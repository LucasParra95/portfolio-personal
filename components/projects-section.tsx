import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardImage } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
    {
    title: "Grupo 5",
    image: "./projects/grupocinco.jpg",
    description:
      'Plataforma de reservas de servicios para eventos. Permite registrar servicios, empleados y clientes; gestionar reservas y visualizar listados. Incluye API REST para consultar servicios y filtrar por ID. Proyecto grupal Alkemy en Python/Django.',
    github: "https://github.com/LucasParra95/proyecto-python-django",
    demo: "",
    tags: ["Python", "Django", "Django REST Framework", "Bootstrap","SQLite"],
  },
  {
    title: "StockControl",
    image: "./projects/stockcontrol.jpg",
    description:
      'Sistema de gestión de inventario con Django. Administra proveedores y productos de forma centralizada. Incluye búsqueda, filtrado, ordenamiento y indicadores visuales de stock bajo. Interfaz responsive Bootstrap 5.',
    github: "https://github.com/LucasParra95/stockcontrol",
    demo: "https://stockcontrol-tau.vercel.app/compras/productos/listado",
    tags: ["Python", "Django", "Bootstrap","SQLite"],
  },
  {
    title: "Hotel Océano",
    image: "./projects/Oceano.jpg",
    description:
      'Sitio web optimizado para potenciar la presencia digital del hotel y aumentar la captación de reservas. Incluye información comercial clara, presentación de servicios, tarifas actualizadas y una galería atractiva que refuerza la propuesta de valor del establecimiento.',
    github: null,
    demo: "http://www.oceanohotel.com.ar/",
    tags: ["Next.js", "Tailwind", "Node.js","Docker"],
  },
  {
    title: "F5-Club",
    image: "./projects/f5club.jpg",
    description:
      'Aplicación web diseñada para organizar y gestionar turnos de fútbol 5 de manera eficiente. Permite crear partidos, asignar organizadores y participantes, administrar equipos, enviar notificaciones y manejar listas de espera, ofreciendo una experiencia simple y dinámica tanto para jugadores como para organizadores.',
    github: null,
    demo: "https://futbol-turnos-app.vercel.app/",
    tags: ["Typescript", "Tailwind", "Node.js","MongoDB"],
  },
  {
    title: "Basket de Oficina",
    image: "./projects/basketProject.jpg",
    description:
      "Juego desarrollado en JavaScript a partir de uno existente, añadiendo funcionalidades al original, como son la lógica del ciclo de vida, el sistema del viento, o la implementación de un nuevo ciclo de juego.",
    github: "https://github.com/LucasParra95/Trash-Can-Basketball",
    demo: "https://trash-can-basketball.vercel.app",
    tags: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Zanutto Estudio",
    image: "./projects/Zanutto.jpg",
    description:
      'Sitio web profesional desarrollado para un estudio jurídico, incluyendo un sistema de turnos para múltiples sucursales. La plataforma permite gestionar disponibilidad, asignación de citas y administración interna, ofreciendo una experiencia clara y ágil tanto para los clientes como para el estudio.',
    github: "https://github.com/zodieth/zanuttoestudio",
    demo: "https://zanuttoestudio.vercel.app/",
    tags: ["React", "Next.js", "MongoDB", "Node.js"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
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
              <CardHeader className="pb-4">
                {project.image && (
                  <CardImage
                    src={project.image}
                    alt={project.title}
                  />
                )}
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
