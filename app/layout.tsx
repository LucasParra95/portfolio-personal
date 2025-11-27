import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


export const metadata: Metadata = {
  title: "Lucas Parra - Full Stack Developer",
  description:
    "Portfolio profesional de Lucas Andres Parra, Full Stack Web Developer con experiencia en React, Node.js, MongoDB y PostgreSQL",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PYEN5QRZXH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PYEN5QRZXH');
            `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
