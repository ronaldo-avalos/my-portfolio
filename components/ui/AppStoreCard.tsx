"use client"; 

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {ChevronDown, ChevronUp, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Url } from "next/dist/shared/lib/router/router";

interface AppStoreCardProps {
  title: string;
  description: string;
  badges: string[];
  icon: string;
  screenshots: string[];
  appStore?: boolean;
  playStore?: boolean;
  code?: boolean;
  appleLink: Url;
  googleLink: Url;
  codeLink: Url;
}

export default function AppStoreCard({
  title,
  description,
  badges,
  icon,
  screenshots,
  appStore,
  playStore,
  code,
  appleLink,
  googleLink,
  codeLink
}: AppStoreCardProps) {
  const [showScreenshots, setShowScreenshots] = useState(false);

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
          <div>
          {appStore && (
              <Button size="sm" variant="link" className="rounded-full" asChild>
                <Link href={appleLink} className="flex items-leading" target="_blank" rel="noopener noreferrer">
                <Image src="/images/applestore.webp" alt="Apple Store" width={24} height={24} className="mr-1.5" />
                </Link>
              </Button>
            )}
            {playStore && (
              <Button size="sm" variant="link" className="rounded-full" asChild>
               <Link href={googleLink} className="flex items-leading" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/google-play-logo.webp" alt="Apple Store" width={24} height={24} className="mr-1.5" />
                </Link>
              </Button>
            )}
                   {code && (
              <Button size="sm" variant="outline" className="rounded-full" asChild>
                <Link href={codeLink} className="flex items-center" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1.5 h-3.5 w-3.5" />
                  Código
                </Link>
              </Button>
            )}
            
          </div>
         
           </div>
          <p className="text-muted-foreground mb-2">{description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {badges.map((badge, index) => (
              <span key={index} className="text-xs font-bold ">
                {badge}
                {index < badges.length - 1 ? " • " : ""}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
     {/* Buttons */}
          </div>
        </div>
      </div>

      {/* Toggle Screenshots Button */}
      <Button
        variant="ghost"
        className="w-full flex justify-center items-center gap-2"
        onClick={() => setShowScreenshots(!showScreenshots)}
      >
        {showScreenshots ? "Hide Screenshots" : "Show Screenshots"}
        {showScreenshots ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </Button>

      {/* App screenshots - Conditionally Rendered */}
      {showScreenshots && (
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
      )}
    </div>
  );
}

