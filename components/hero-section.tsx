import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <Terminal className="absolute 2xl:mr-120 right-10 top-15 w-[350px] h-[350px] text-primary opacity-1 z-10 animate-pulse-slow pointer-events-none"/>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-muted-foreground font-medium text-lg md:text-xl">Hola, me llamo</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground text-balance leading-tight">
              Lucas Andrés Parra
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light text-pretty">
              Full Stack Web Developer
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Desarrollador comprometido con crear soluciones tecnológicas innovadoras que combinan eficiencia, 
            claridad y una interacción fluida y agradable.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                Ver Proyectos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contactar</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  )
}
