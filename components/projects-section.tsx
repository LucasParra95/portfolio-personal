import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardImage } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Countries App",
    image: "/projects/countries.png",
    description:
      'Proyecto individual desarrollado dentro de Henry Bootcamp. Desarrollo de una SPA (Single Page Application) utilizando React para el Front End y Redux como state management. Todos los componentes fueron desarrollados con CSS sin uso de librerías externas. La SPA consume datos de una API ("REST Countries").',
    github: "https://github.com/LucasParra95/PI-Countries-SoyHenry",
    demo: null,
    tags: ["React", "Redux", "CSS", "API REST"],
  },
  {
    title: "AllTech e-commerce",
    image: "/projects/AllTech.jpg",
    description:
      "Proyecto grupal desarrollado dentro de Henry Bootcamp. Diseño y desarrollo de un E-commerce dedicado a la venta de productos gaming cómo su principal fuente de ingresos y otros artículos electrónicos cómo fuente secundaria. Aplicación creada usando MongoDB y Mongoose junto con Node.js para el Back-End, mientras que para el Front-End se utilizó React, Redux, Chakra y Typescript.",
    github: "https://github.com/zodieth/CLIENT",
    demo: "https://client-ochre-five.vercel.app/",
    tags: ["MongoDB", "Node.js", "React", "TypeScript"],
  },
  {
    title: "Basket de Oficina",
    image: "/projects/basketProject.jpg",
    description:
      "Juego desarrollado en JavaScript a partir de uno existente, añadiendo funcionalidades al original, como son la lógica del ciclo de vida, el sistema del viento, o la implementación de un nuevo ciclo de juego.",
    github: "https://github.com/LucasParra95/Trash-Can-Basketball",
    demo: "https://trash-can-basketball.vercel.app",
    tags: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Zanutto Estudio",
    image: "/projects/Zanutto.jpg",
    description:
      'Proyecto individual desarrollado como una práctica dentro de Henry Bootcamp. Desarrollado utilizando React para el Front End. Todos los componentes fueron desarrollados con CSS sin uso de librerías externas. La Aplicación consume datos de una API ("OpenWeather").',
    github: "https://github.com/zodieth/zanuttoestudio",
    demo: "http://zanuttoestudio.vercel.app/",
    tags: ["React", "Next.js", "MongoDB", "Javascript"],
  },
  {
    title: "Hotel Océano",
    image: "/projects/Oceano.jpg",
    description:
      'Proyecto individual desarrollado como una práctica dentro de Henry Bootcamp. Desarrollado utilizando React para el Front End. Todos los componentes fueron desarrollados con CSS sin uso de librerías externas. La Aplicación consume datos de una API ("OpenWeather").',
    github: null,
    demo: "http://www.oceanohotel.com.ar/",
    tags: ["Next.js", "Tailwind", "Node.js","Docker"],
  },
  {
    title: "F5-Club",
    image: "/projects/f5club.jpg",
    description:
      'Proyecto individual desarrollado como una práctica dentro de Henry Bootcamp. Desarrollado utilizando React para el Front End. Todos los componentes fueron desarrollados con CSS sin uso de librerías externas. La Aplicación consume datos de una API ("OpenWeather").',
    github: null,
    demo: "https://futbol-turnos-app.vercel.app/",
    tags: ["Typescript", "Tailwind", "Node.js","MongoDB"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-balance">
          Algunos de mis Proyectos
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {project.image && (
                <CardImage
                  src={project.image}
                  alt={project.title}
                />
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardContent>
              <CardFooter className="pt-0 flex gap-3">
                {project.github && (
                  <Button variant="default" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
