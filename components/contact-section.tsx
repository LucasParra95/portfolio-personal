"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  })

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle")

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()

    setStatus("sending")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "No se pudo enviar el mensaje.")
      }

      setStatus("success")

      setFormData({
        name: "",
        email: "",
        message: "",
        website: "",
      })
    } catch (error) {
      console.error(error)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">Contacto</h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          ¿Tienes un proyecto en mente? Me encantaría ayudarte
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Enviame un mensaje</CardTitle>
              <CardDescription>Completa el formulario y me pondré en contacto contigo lo antes posible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Mensaje..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
                >
                  <label htmlFor="website">Website</label>
                  <Input
                    id="website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                  />
                </div>
                <Button type="submit" className="w-full group" disabled={status === "sending"}>
                  <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                </Button>
                {status === "success" && (
                  <p className="text-sm text-green-600 text-center">
                    ¡Mensaje enviado correctamente! Me pondré en contacto pronto.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm text-red-600 text-center">
                    No se pudo enviar el mensaje. Por favor, intentá nuevamente.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="mailto:parra.developer@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span>parra.developer@gmail.com</span>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Redes sociales</CardTitle>
                <CardDescription>Conéctate conmigo en las siguientes plataformas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a
                    href="https://www.linkedin.com/in/lucas-parra-bb510121a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="https://github.com/LucasParra95" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lucas Andrés Parra. Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  )
}
