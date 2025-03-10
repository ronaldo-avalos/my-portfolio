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
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container max-w-4xl flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Ronaldo.dev
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              About me
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            {/* Theme toggle button */}
            <Button className="rounded-full">Donwload CV</Button>
            {
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-800" />}
              </Button>
            }
          </div>
        </div>
      </header>


      <main className="container py-10 max-w-4xl">
        <section className="py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Left column - Profile & Social */}
            <div className="md:w-1/3 flex flex-col items-center text-center ">
              <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden">
                <Image src="/images/profile.jpg" alt="Foto de perfil" fill className="object-cover" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Ronaldo Avalos</h1>
              <p className="text-lg text-muted-foreground mb-6">Creando experiencias móviles elegantes y funcionales</p>
              {/* <div className="flex flex-wrap justify-center gap-3 mb-6">
                <Button asChild>
                  <Link href="#projects">
                    Projets <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div> */}
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
              {/* <Button className="rounded-full">Projects </Button> */}
            </div>

            {/* Right column - About & Experience */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-6 md:hidden text-center">About me</h2>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 hidden md:block">About me</h2>
                  <div className="space-y-4">
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

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-medium text-xl mb-4">Experiencia profesional</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium">Desarrollador iOS Senior</div>
                      <div className="text-muted-foreground">TechApp Inc. • 2020 - Presente</div>
                    </div>
                    <div>
                      <div className="font-medium">Desarrollador iOS</div>
                      <div className="text-muted-foreground">MobileStudio • 2018 - 2020</div>
                    </div>
                    <div>
                      <div className="font-medium">Desarrollador iOS Junior</div>
                      <div className="text-muted-foreground">AppStart • 2016 - 2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 border-t">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>

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
                    <Image src="/images/swift-icon.png" alt="FitTracker Icon" width={24} height={24} />
                    <span>Swift</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/kotlin-icon.png" alt="FitTracker Icon" width={24} height={24} />
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
                    <Image src="/images/uikit-icon.png" alt="FitTracker Icon" width={24} height={24} />
                    <span>UIKit</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/firebase-icon.png" alt="FitTracker Icon" width={24} height={24} />
                    <span>Firebase</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <GitBranch className="h-4 w-4 text-primary" />
                    <span>Git - Github</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/cocoapods-icon.svg" alt="FitTracker Icon" width={24} height={24} />
                    <span>Cocoa-pods</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Code className="h-4 w-4 text-primary" />
                    <span>FSCalendar</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/swiftui-icon.png" alt="FitTracker Icon" width={24} height={24} />
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
                    <Image src="/images/figma-icon.png" alt="FitTracker Icon" width={24} height={24} />
                    <span>Figma</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/jira-icon.svg" alt="FitTracker Icon" width={24} height={24} />
                    <span>Jira Software</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/connect-icon.webp" alt="FitTracker Icon" width={24} height={24} />
                    <span>App Store Connect</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/playconsole-icon.png" alt="FitTracker Icon" width={24} height={24} />
                    <span>Google Play console</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/photoshop-icon.png" alt="FitTracker Icon" width={24} height={24} />
                    <span>Photoshop</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Image src="/images/illustrator-icon.png" alt="FitTracker Icon" width={24} height={24} />
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
          <h2 className="text-3xl font-bold mb-8">Featured projects</h2>
          <div className="space-y-16">
            <AppStoreCard
              title="Mejor.ai"
              description="Aplicación de mejora y rescalado de imágenes con inteligencia artifical"
              longDescription="Una aplicación completa para seguimiento de actividad física, nutrición y progreso personal. Incluye sincronización con HealthKit y visualizaciones personalizadas."
              badges={["Swift", "SwiftUI", "HealthKit", "Core Data"]}
              status="App Store"
              icon="/images/mejor-ai-icon.png"
              screenshots={[
                "/images/mejor-ai-1.png",
                "/images/mejor-ai-2.png",
                "/images/mejor-ai-3.png",
                "/images/mejor-ai-4.png",
                "/images/mejor-ai-5.png",
                "/images/mejor-ai-6.png",
                "/images/mejor-ai-7.png",
                "/images/mejor-ai-8.png",
              ]}
            />

            <AppStoreCard
              title="On-calls Guardias Médicas"
              description="Aplicación de recetas con experiencia de realidad aumentada"
              longDescription="Una innovadora aplicación de cocina que utiliza realidad aumentada para mostrar instrucciones paso a paso y visualizar el resultado final de las recetas."
              badges={["Swift", "UIKit", "Firebase", "Core Data", "Kotlin", "Dagger Hilt", "XML"]}
              status="App Store"
              icon="/images/oncalls-icon.webp"
              screenshots={[
                "/images/mejor-ai-1.png",
                "/images/mejor-ai-2.png",
                "/images/mejor-ai-3.png",
                "/images/mejor-ai-4.png",
                "/images/mejor-ai-5.png",
              ]}
            />

            <AppStoreCard
              title="Subcalenro"
              description="Control de dispositivos domésticos inteligentes"
              longDescription="Una aplicación para controlar dispositivos domésticos inteligentes con integración HomeKit. Incluye automatizaciones, escenas y control por voz con Siri."
              badges={["Swift", "UiKit", "Firebase", "Core Data"]}
              status="Beta"
              icon="/placeholder.svg?height=120&width=120"
              screenshots={[
                "/images/mejor-ai-1.png",
                "/images/mejor-ai-2.png",
                "/images/mejor-ai-3.png",
                "/images/mejor-ai-4.png",
                "/images/mejor-ai-5.png",
              ]}
            />
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

