import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    name: "HTML",
    icon: "./logos/html.png",
    description:
      "HTML es un lenguaje de marcado que nos permite indicar la estructura de nuestro documento mediante etiquetas. Este lenguaje nos ofrece una gran adaptabilidad, una estructuración lógica y es fácil de interpretar tanto por humanos como por máquinas.",
  },
  {
    name: "CSS",
    icon: "./logos/css.png",
    description:
      "Lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado. Es muy usado para establecer el diseño visual de los documentos web, e interfaces de usuario.",
  },
  {
    name: "Javascript",
    icon: "./logos/javascript.png",
    description:
      "Todos los navegadores modernos interpretan el código JavaScript integrado en las páginas web. Para interactuar con una página web se provee al lenguaje JavaScript de una implementación del Document Object Model (DOM). Javascript es el único lenguaje de programación que entiende de forma nativa los navegadores.",
  },
  {
    name: "Typescript",
    icon: "./logos/typescript.png",
    description:
      "TypeScript es un lenguaje de programación de código abierto desarrollado por Microsoft que es un superconjunto de JavaScript. Su principal característica es que añade tipado estático y características de orientación a objetos para hacer que el desarrollo de aplicaciones grandes y complejas sea más robusto y fácil de mantener",
  },
  {
    name: "React",
    icon: "./logos/react.png",
    description:
      "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.",
  },
  {
    name: "Node.js",
    icon: "./logos/node.png",
    description:
      "Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto que fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web.",
  },
  {
    name: "Next.js",
    icon: "./logos/next.png",
    description:
      "Next.js es un framework de React de código abierto que se utiliza para construir aplicaciones web de alto rendimiento, amigables con el SEO y de rápida implementación. Proporciona herramientas y optimizaciones adicionales para aplicaciones React permitiendo crear sitios web y aplicaciones dinámicas de forma eficiente y escalable. ",
  },
  {
    name: "MongoDB",
    icon: "./logos/mongodb.png",
    description:
      "Es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. En lugar de guardar los datos en tablas como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos BSON con un esquema dinámico.",
  },
  {
    name: "PostgreSQL",
    icon: "./logos/postgresql.png",
    description:
      "PostgreSQL, también llamado Postgres, es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto. PostgreSQL permite que mientras un proceso escribe en una tabla, otros accedan a la misma tabla sin necesidad de bloqueos.",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">Habilidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="relative h-24 mb-6 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">{skill.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
