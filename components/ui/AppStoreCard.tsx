"use client"

import Image from "next/image"
import Link from "next/link"
import { GitBranchIcon, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import {Badge } from "@/components/ui/badge"

 interface AppStoreCardProps {
  title: string
  description: string
  longDescription: string
  badges: string[]
  status: string
  icon: string
  screenshots: string[]
}

export default function AppStoreCard({ title, description, longDescription, badges, status, icon, screenshots }: AppStoreCardProps) {
  return (
    <div className="space-y-6">
      {/* App header with icon and info */}
      <div className="flex items-start gap-4">
        {/* App icon */}
        <div className="relative w-20 h-20 rounded-[20px] overflow-hidden shadow-md flex-shrink-0">
          <Image src={icon} alt={`${title} icon`} width={80} height={80} className="object-cover" />
        </div>

        {/* App info */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">{title}</h3>
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">{status}</Badge>
          </div>
          <p className="text-muted-foreground mb-2">{description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {badges.map((badge, index) => (
              <span key={index} className="text-xs text-muted-foreground">
                {badge}
                {index < badges.length - 1 ? " • " : ""}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="rounded-full" asChild>
              <Link href="#" className="flex items-center">
                <GitBranchIcon className="mr-1.5 h-3.5 w-3.5" />
                Código
              </Link>
            </Button>
            <Button size="sm" className="rounded-full" asChild>
              <Link href="#" className="flex items-center">
                <Download className="mr-1.5 h-3.5 w-3.5" />
                Apple Store
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* App screenshots */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[200px] h-[420px] rounded-xl overflow-hidden"
            >
              <Image
                src={screenshot}
                alt={`${title} screenshot ${index + 1}`}
                width={200}
                height={300}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* App description */}
      <div className="bg-muted p-2 rounded-lg">
        <h4 className="font-medium mb-2">Descripción</h4>
        <p className="text-muted-foreground text-sm">{longDescription}</p>
      </div>
    </div>
  )
}
