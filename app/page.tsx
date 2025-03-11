"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react";

import {
  Linkedin,
  Mail,
  Code,
  GitBranch,
  Moon,
  GithubIcon,
  ArrowRight,
  Sun
} from "lucide-react"

import { Button } from "@/components/ui/button"
import AppStoreCard from "@/components/ui/AppStoreCard"

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default theme based on system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newTheme);
      return newTheme;
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/30 backdrop-blur-lg">
        <div className="container max-w-4xl flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Ronaldo.dev
          </Link>
          <div className="flex items-center gap-3">
            {/* Theme toggle button */}
            <Button className="rounded-full">Download CV</Button>
            {
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-800" />}
              </Button>
            }
          </div>
        </div>
      </header>


      <main className="container py-10 max-w-4xl">
        {/* Profile & Social Section */}
        <section className="py-8 md:py-12">
          <div className="flex flex-col gap-12 items-center text-center">
            <div className="flex flex-col items-center text-center w-full">
              <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden">
                <Image src="/images/profile.jpg" alt="Foto de perfil" fill className="object-cover" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Ronaldo Avalos</h1>
              <p className="text-lg text-muted-foreground mb-6">Creating elegant and functional mobile experiences</p>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                  <Link href="mailto:ronaldoadan1@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                  <Link href="https://github.com/Ronaldo-avalos" target="_blank" aria-label="GitHub">
                    <GithubIcon className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                  <Link href="https://linkedin.com/in/Ronaldoavalos" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="py-8">
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Button className="rounded-full flex items-center">
                    Projects
                    <ArrowRight className="ml-2" /> {/* Añadir el icono con un margen a la izquierda */}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* About & Experience Section */}
        <section className="py-16 md:py-16">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sobre mí */}
            <div className="md:w-1/2 mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">About me</h2>
                  <p className="text-muted-foreground">
                    A developer specialized in mobile applications with nearly 3 years of experience creating native apps for iOS and Android,
                    successfully published on the App Store and Google Play.
                  </p>
                  <p className="text-muted-foreground">
                    My primary goal is to continue growing as an iOS developer, an area where I am fully prepared to excel.
                    I have clear goals and a strong passion for tackling new challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Experiencia */}
            <div className="md:w-1/2 bg-muted rounded-lg p-6">
              <h3 className="font-medium text-xl mb-4">Work experience</h3>
              <div className="relative border-l-2 border-gray-400 pl-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div>
                    <div className="font-medium">Developer iOS Mid</div>
                    <div className="text-muted-foreground">MatchBall Inc. • 2024 - Presente</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div>
                    <div className="font-medium">Developer iOS</div>
                    <div className="text-muted-foreground">Sfera • 2023 - 2024</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div>
                    <div className="font-medium">Developer iOS Junior</div>
                    <div className="text-muted-foreground">Vecinio Technologies • 2022 - 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="py-16 border-t">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="h-[250px] p-4 border rounded-lg flex flex-col">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-primary p-1.5 rounded-md mr-2">
                    <code className="text-sm">📱</code>
                  </span>
                  Languages
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/swift-icon.webp" alt="FitTracker Icon" width={24} height={24} />
                    <span>Swift</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/kotlin-icon.webp" alt="FitTracker Icon" width={24} height={24} />
                    <span>Kotlin</span>
                  </li>
                </ul>
              </div>

              <div className="h-[250px] p-4 border rounded-lg flex flex-col">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className=" text-primary p-1.5 rounded-md mr-2">
                    <code className="text-sm">{"📚"}</code>
                  </span>
                  Frameworks & Libraries
                </h3>
                <ul className="grid grid-cols-2 gap-2 flex-grow">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/uikit-icon.webp" alt="FitTracker Icon" width={24} height={24} />
                    <span>UIKit</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/firebase-icon.webp" alt="FitTracker Icon" width={24} height={24} />
                    <span>Firebase</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <GitBranch className="h-4 w-4 text-primary" />
                    <span>Git - Github</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/cocoapods-icon.webp" alt="FitTracker Icon" width={24} height={24} />
                    <span>Cocoa-pods</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Code className="h-4 w-4 text-primary" />
                    <span>FSCalendar</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/swiftui-icon.webp" alt="FitTracker Icon" width={24} height={24} />
                    <span>SwiftUI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-[250px] p-4 border rounded-lg flex flex-col">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-primary p-1.5 rounded-md mr-2">
                    <code className="text-sm">🛠️</code>
                  </span>
                  Tools
                </h3>
                <ul className="grid grid-cols-2 gap-2 flex-grow">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/figma-icon.webp" alt="FitTracker Icon" width={24} height={24} />
                    <span>Figma</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/jira-icon.webp" alt="FitTracker Icon" width={24} height={24} />
                    <span>Jira Software</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/connect-icon.webp" alt="FitTracker Icon" width={24} height={24} />
                    <span>App Store Connect</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/playconsole-icon.webp" alt="FitTracker Icon" width={24} height={24} />
                    <span>Google Play console</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/photoshop-icon.webp" alt="FitTracker Icon" width={24} height={24} />
                    <span>Photoshop</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/illustrator-icon.webp" alt="FitTracker Icon" width={24} height={24} />
                    <span>Illustrator</span>
                  </li>
                </ul>
              </div>

              <div className="h-[250px] p-4 border rounded-lg flex flex-col">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-primary p-1.5 rounded-md mr-2">
                    <code className="text-sm">{"🧑🏻‍💻"}</code>
                  </span>
                  Methodologies
                </h3>
                <ul className="grid grid-cols-1 gap-2 flex-grow">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Code className="h-4 w-4 text-primary" />
                    <span>MVVM architecture</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Code className="h-4 w-4 text-primary" />
                    <span>Clean code principles</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Code className="h-4 w-4 text-primary" />
                    <span>Dependency injection</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Code className="h-4 w-4 text-primary" />
                    <span>Unit & UI testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 border-t">
          <h2 className="text-2xl font-bold mb-8">Featured projects</h2>
          <div className="space-y-16">
            <AppStoreCard
              title="Mejor.ai"
              description="Improve and enhance your images with artificial intelligence"
              longDescription="Mejor.ai es una solución innovadora para la mejora y optimización de imágenes mediante el uso de inteligencia artificial. Esta aplicación permite realizar ajustes de calidad y tamaño en tus fotos, manteniendo la resolución y detalles clave. Incluye características como un sistema de mejora automático y una interfaz intuitiva para una experiencia de usuario excepcional."
              badges={["Swift", "SwiftUI", "MVVM", "HealthKit", "Core Data"]}
              icon="/images/mejor-ai-icon.webp"
              appStore
              screenshots={[
                "/images/mejor-ai-1.webp",
                "/images/mejor-ai-2.webp",
                "/images/mejor-ai-3.webp",
                "/images/mejor-ai-4.webp",
                "/images/mejor-ai-5.webp",
                "/images/mejor-ai-6.webp",
                "/images/mejor-ai-7.webp",
                "/images/mejor-ai-8.webp",
              ]} appleLink={""} googleLink={""} codeLink={""} />

            <AppStoreCard
              title="On-calls Guardias Médicas"
              description="Alication that is at the top of applications in Medicines"
              longDescription="On-calls Guardias Médicas es una herramienta esencial para médicos internos, permitiendo llevar un registro detallado de las guardias médicas, horarios, y tareas asignadas. La app facilita el acceso rápido a información crítica y ayuda a mejorar la organización durante las jornadas laborales, asegurando un mejor rendimiento y seguimiento. Está integrada con tecnologías de vanguardia como Firebase para la sincronización de datos en tiempo real."
              badges={["Swift", "Kotlin", "MVVM", "UIKit", "Firebase", "Core Data", "Kotlin", "Dagger Hilt", "XML", "Push notificacions"]}
              icon="/images/oncalls-icon.webp"
              appStore
              playStore
              screenshots={[
                "/images/oncalls-sc-1.webp",
                "/images/oncalls-sc-2.webp",
                "/images/oncalls-sc-3.webp",
                "/images/oncalls-sc-4.webp",
                "/images/oncalls-sc-5.webp",
              ]} appleLink={"https://apps.apple.com/mx/app/guardias-médicas/id1501607063"}
              googleLink={"https://play.google.com/store/apps/details?id=mx.vecinio.guardiasmedicas&hl=es_MX"} codeLink={""} />

            <AppStoreCard
              title="Subcalenro"
              description="Seguimiento de suscripciones con un calendario fácil de usar"
              longDescription="Subcalenro es una aplicación intuitiva que permite llevar el control de todas tus suscripciones a través de un calendario visual. Puedes gestionar fechas de vencimiento, recibir recordatorios y planificar de manera más eficiente tus pagos recurrentes. Está diseñada para simplificar el seguimiento de tus suscripciones y evitar olvidos o cargos inesperados."
              badges={["Swift", "UiKit", "MVVM", "Firebase", "Core Data", "Push notificacions"]}
              icon="/images/subcalenro-icon.webp"
              code
              screenshots={[
                "/images/subcal-sc-1.webp",
                "/images/subcal-sc-2.webp",
                "/images/subcal-sc-3.webp",
                "/images/subcal-sc-4.webp",
              ]} appleLink={""} googleLink={""}
              codeLink={"https://github.com/ronaldo-avalos/subcalenro_iOS"} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0 w-full">
        <div className="container max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-center md:text-left text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ronaldo.dev. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

