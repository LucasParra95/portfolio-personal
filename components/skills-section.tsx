import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    name: "Pensamiento crítico y resolución de problemas",
    description:
      "Analizo situaciones complejas, identifico causas raíz y propongo soluciones efectivas con enfoque lógico y estructurado.",
  },
  {
    name: "Creatividad e innovación",
    description:
      "Busco alternativas nuevas, diseño soluciones originales y aporto ideas que mejoran procesos o experiencias.",
  },
  {
    name: "Orientación a resultados",
    description:
      "Trabajo con enfoque claro en objetivos, priorizando eficiencia, calidad y cumplimiento de metas.",
  },
  {
    name: "Adaptabilidad",
    description:
      "Capacidad para ajustarme rápidamente a nuevas tecnologías, entornos y desafíos. Me adapto con facilidad a distintos flujos de trabajo y metodologías, manteniendo siempre un enfoque flexible y orientado a la solución.",
  },
  {
    name: "Comunicación efectiva",
    description:
      "Habilidad para transmitir ideas de forma clara y precisa, tanto en contextos técnicos como no técnicos. Facilita la colaboración, la toma de decisiones y la coordinación eficiente dentro de equipos de trabajo.",
  },
  {
    name: "Atención al detalle",
    description:
      "Foco constante en la calidad y la precisión. Me aseguro de que cada tarea, línea de código o análisis esté cuidadosamente verificado para prevenir errores y garantizar resultados consistentes y profesionales.",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">Habilidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-center text-primary">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-center">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
