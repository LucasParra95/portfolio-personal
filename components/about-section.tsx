import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

const timelineItems = [
  {
    year: "2013-2021",
    title: "Tercer año de Ingeniería Mecánica",
    description: "Facultad de Ingeniería Universidad Nacional de La Plata",
  },
  {
    year: "2022",
    title: "Introducción a la programación",
    description: "Fundación Telefónica",
  },
  {
    year: "2022-2023",
    title: "Full Stack Web Developer",
    description: "Henry Bootcamp. 700 horas de cursado teórico-práctico",
  },
  {
    year: "2024",
    title: "Algoritmos y Estructuras de Datos en JavaScript",
    description:
      "Desarrollo de habilidades en programación y resolución de problemas mediante JavaScript, completando 16 proyectos prácticos.",
  },
  {
    year: "2024",
    title: "Fundamentos de Data Analytics",
    description:
      "Certificado otorgado por IBM y Guayerd por 255 horas de cursado y práctica profesional",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-balance">
          Sobre Mi
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground mb-12">
            <p>
              <strong className="text-foreground">
                La curiosidad siempre ha sido mi motor.
              </strong>{" "}
              Desde chico desmontaba juguetes para entender sus mecanismos, una
              costumbre que marcó el inicio de mi interés por la tecnología y la
              resolución de problemas.
            </p>

            <p>
              Estudié{" "}
              <strong className="text-foreground">Ingeniería Mecánica</strong>{" "}
              en la Universidad Nacional de La Plata, donde desarrollé un
              pensamiento lógico y una mentalidad analítica que hoy aplico en el
              desarrollo de software. Esa formación me enseñó a abordar los
              desafíos con{" "}
              <strong className="text-foreground">
                método, precisión y creatividad.
              </strong>
            </p>

            <p>
              Con el tiempo, descubrí en la programación una forma de unir mis
              intereses técnicos con mi deseo de crear soluciones útiles e
              innovadoras. Me certifiqué como{" "}
              <strong className="text-foreground">Full Stack Developer</strong>{" "}
              en Henry, lo que me permitió explorar un mundo de posibilidades
              dentro del desarrollo web y la tecnología aplicada a la
              optimización de procesos.
            </p>

            <p>
              También he complementado mi perfil con un curso de{" "}
              <strong className="text-foreground">Análisis de Datos</strong>,
              con el objetivo de comprender mejor la información detrás de cada
              proyecto y brindar soluciones más eficientes y fundamentadas.
            </p>

            <p>
              Hoy, combino mi{" "}
              <strong className="text-foreground">capacidad analítica</strong>{" "}
              con una mirada creativa y orientada al detalle para desarrollar
              herramientas tecnológicas que optimizan procesos, impulsan la toma
              de decisiones y mejoran la experiencia del{" "}
              <strong className="text-foreground">usuario</strong>.
            </p>
          </div>

          <div className="flex justify-center mb-24">
            <Button size="lg" variant="default" className="group" asChild>
              <a
                href="/cv-lucas-parra.pdf"
                download="cv-Lucas-Parra.pdf"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                Descargar CV
              </a>
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Educación y Experiencia
          </h3>

          {/* MOBILE - Timeline vertical */}
          <div className="flex flex-col gap-6 md:hidden px-4 pb-12">
            {timelineItems.map((item, index) => (
              <Card key={index} className="p-6 w-full">
                <h4 className="text-xl font-bold text-primary mb-2">
                  {item.year}
                </h4>
                <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          {/* DESKTOP - Timeline horizontal */}
          <div className="relative w-full overflow-x-auto hidden md:block">
            <div className="min-w-max px-8 pb-12">
              <div className="relative pt-72 pb-72">
                {/* Línea horizontal */}
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border -translate-y-1/2 z-0" />

                <div className="relative flex justify-around">
                  {timelineItems.map((item, index) => {
                    const isAbove = index % 2 === 0;

                    return (
                      <div
                        key={index}
                        className="relative flex flex-col items-center flex-shrink-0"
                        style={{ width: "288px" }}
                      >
                        {/* Card arriba */}
                        {isAbove && (
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full mt-4">
                            <Card className="p-6 w-full">
                              <h4 className="text-xl font-bold text-primary mb-2">
                                {item.year}
                              </h4>
                              <h5 className="text-lg font-semibold mb-2">
                                {item.title}
                              </h5>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </Card>
                          </div>
                        )}

                        {/* Punto */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                        {/* Card abajo */}
                        {!isAbove && (
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full mb-4">
                            <Card className="p-6 w-full">
                              <h4 className="text-xl font-bold text-primary mb-2">
                                {item.year}
                              </h4>
                              <h5 className="text-lg font-semibold mb-2">
                                {item.title}
                              </h5>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </Card>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="text-center mt-8 text-sm text-muted-foreground">
                ← Desliza para ver más →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
