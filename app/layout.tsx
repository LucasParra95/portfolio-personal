import type React from "react"
import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
  title: "Lucas Parra - Full Stack Developer",
  description:
    "Portfolio profesional de Lucas Andres Parra, Full Stack Web Developer",
  metadataBase: new URL("https://lucasparra.dev.ar"),
    keywords: [
    "lucas parra",
    "desarrollador web",
    "full stack developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "javascript developer",
    "node.js",
    "express",
    "mern",
    "mongodb",
    "postgresql",
    "desarrollo de sitios web",
    "aplicaciones web",
    "sistemas de turnos",
    "integraciones de pago",
    "data analyst",
    "data analytics",
    "optimización web",
    "accesibilidad web",
  ],
  alternates: {
    canonical: "/",
  },
    openGraph: {
    title: "Lucas Parra - Full Stack Developer",
    description:
      "Portfolio profesional de Lucas Andres Parra, Full Stack Web Developer",
    url: "https://lucasparra.dev.ar",
    siteName: "Lucas Parra Portfolio",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Lucas Parra - Full Stack Developer",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
      </body>
    </html>
  )
}
