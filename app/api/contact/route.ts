import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

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