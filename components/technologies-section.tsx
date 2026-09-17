import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  // Desarrollo Web
  {
    name: "HTML",
    category: "Desarrollo Web",
    icon: "./logos/html.png",
    description:
      "Lenguaje de marcado utilizado para estructurar el contenido de sitios y aplicaciones web.",
  },
  {
    name: "CSS",
    category: "Desarrollo Web",
    icon: "./logos/css.png",
    description:
      "Utilizado para definir estilos, layouts y diseños responsivos en interfaces web.",
  },
  {
    name: "JavaScript",
    category: "Desarrollo Web",
    icon: "./logos/javascript.png",
    description:
      "Lenguaje utilizado para desarrollar la lógica y las funcionalidades de aplicaciones web.",
  },
  {
    name: "TypeScript",
    category: "Desarrollo Web",
    icon: "./logos/typescript.png",
    description:
      "Extensión de JavaScript con tipado estático para desarrollar aplicaciones más robustas y mantenibles.",
  },
  {
    name: "React",
    category: "Desarrollo Web",
    icon: "./logos/react.png",
    description:
      "Biblioteca utilizada para desarrollar interfaces de usuario dinámicas y componentes reutilizables.",
  },
  {
    name: "Next.js",
    category: "Desarrollo Web",
    icon: "./logos/next.png",
    description:
      "Framework basado en React utilizado para desarrollar aplicaciones web completas y escalables.",
  },
  {
    name: "Tailwind CSS",
    category: "Desarrollo Web",
    icon: "./logos/tailwind.png",
    description:
      "Framework de utilidades CSS utilizado para construir interfaces modernas y responsivas.",
  },
  {
    name: "Bootstrap",
    category: "Desarrollo Web",
    icon: "./logos/bootstrap.png",
    description:
      "Framework utilizado para desarrollar interfaces responsivas y componentes de forma rápida.",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: "./logos/node.png",
    description:
      "Entorno de ejecución utilizado para desarrollar aplicaciones y servicios backend con JavaScript.",
  },
  {
    name: "Express",
    category: "Backend",
    icon: "./logos/express.png",
    description:
      "Framework para Node.js utilizado para desarrollar APIs y servicios backend.",
  },
  {
    name: "Python",
    category: "Backend",
    icon: "./logos/python.png",
    description:
      "Lenguaje incorporado a mi stack para desarrollo backend y trabajo con datos.",
  },
  {
    name: "Django",
    category: "Backend",
    icon: "./logos/django.png",
    description:
      "Framework de Python utilizado para desarrollar aplicaciones web y sistemas de gestión.",
  },
  {
    name: "Django REST Framework",
    category: "Backend",
    icon: "./logos/drf.png",
    description: "Framework utilizado para desarrollar APIs REST sobre Django.",
  },

  // Bases de datos
  {
    name: "SQL",
    category: "Bases de datos",
    icon: "./logos/sql.png",
    description:
      "Lenguaje utilizado para consultar y gestionar información en bases de datos relacionales.",
  },
    {
    name: "PostgreSQL",
    category: "Bases de datos",
    icon: "./logos/postgresql.png",
    description:
      "Sistema de gestión de bases de datos relacional de código abierto. Permite que mientras un proceso escribe en una tabla, otros accedan a la misma tabla.",
  },
  {
    name: "SQLite",
    category: "Bases de datos",
    icon: "./logos/sqlite.png",
    description:
      "Base de datos relacional utilizada en aplicaciones y proyectos que requieren una solución ligera.",
  },
  {
    name: "MongoDB",
    category: "Bases de datos",
    icon: "./logos/mongodb.png",
    description:
      "Base de datos NoSQL orientada a documentos, utilizada para trabajar con modelos de datos flexibles.",
  },

  // Datos y BI
  {
    name: "Power BI",
    category: "Datos y BI",
    icon: "./logos/powerbi.png",
    description:
      "Herramienta de Business Intelligence utilizada para crear informes y visualizaciones interactivas.",
  },
  {
    name: "Looker Studio",
    category: "Datos y BI",
    icon: "./logos/lookerstudio.png",
    description:
      "Herramienta utilizada para crear dashboards y visualizaciones orientadas al análisis de datos.",
  },
  {
    name: "Excel",
    category: "Datos y BI",
    icon: "./logos/excel.png",
    description:
      "Herramienta utilizada para organizar, analizar y visualizar información.",
  },
  {
    name: "Google Sheets",
    category: "Datos y BI",
    icon: "./logos/google-sheets.png",
    description:
      "Herramienta utilizada para trabajar con datos, realizar análisis y colaborar en línea.",
  },

  // Herramientas
  {
    name: "Git",
    category: "Herramientas",
    icon: "./logos/git.png",
    description:
      "Sistema de control de versiones utilizado para gestionar cambios y colaborar en proyectos.",
  },
  {
    name: "GitHub",
    category: "Herramientas",
    icon: "./logos/github.png",
    description:
      "Plataforma utilizada para alojar repositorios y colaborar en proyectos mediante Git.",
  },
];

const categories = [
  "Desarrollo Web",
  "Backend",
  "Bases de datos",
  "Datos y BI",
  "Herramientas",
];

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          Tecnologías
        </h2>

<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
  {categories.map((category) => {
    const categoryTechnologies = technologies.filter(
      (technology) => technology.category === category,
    );
    return (
      <div key={category}>
        <h3 className="text-lg font-bold mb-4 text-center">{category}</h3>
        <div className="flex flex-col gap-3">
          {categoryTechnologies.map((tech) => (
            <Card
              key={tech.name}
              className="group relative flex items-center gap-2 p-2 rounded hover:bg-primary/5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <img src={tech.icon} alt={tech.name} className="w-6 h-6 flex-shrink-0 group-hover:opacity-0" />
              
              {/* Nombre - Visible por defecto */}
              <span className="text-sm font-medium opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                {tech.name}
              </span>

              {/* Descripción - Invisible por defecto, se superpone */}
              <span className="absolute text-center text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.description}
              </span>
            </Card>
          ))}
        </div>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}