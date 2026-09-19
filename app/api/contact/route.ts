import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const RATE_LIMIT = 5
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutos

const requests = new Map<string, number[]>()

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim()
  }

  return request.headers.get("x-real-ip") || "unknown"
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const timestamps = requests.get(ip) || []

  const recentRequests = timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
  )

  if (recentRequests.length >= RATE_LIMIT) {
    requests.set(ip, recentRequests)
    return true
  }

  recentRequests.push(now)
  requests.set(ip, recentRequests)

  return false
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request)

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error:
            "Demasiados intentos. Por favor, esperá unos minutos antes de volver a intentarlo.",
        },
        { status: 429 }
      )
    }

    const { name, email, message, website } = await request.json()

    // Honeypot
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Validación básica del lado del servidor
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      )
    }

    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json(
        { error: "Datos inválidos." },
        { status: 400 }
      )
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "El mensaje es demasiado largo." },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["parra.developer@gmail.com"],
      replyTo: email,
      subject: `Contacto desde Portfolio - ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}

        Mensaje:
        ${message}
      `,
    })

    if (error) {
      console.error("Error de Resend:", error)

      return NextResponse.json(
        { error: "No se pudo enviar el mensaje." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error en /api/contact:", error)

    return NextResponse.json(
      { error: "Ocurrió un error al procesar el mensaje." },
      { status: 500 }
    )
  }
}