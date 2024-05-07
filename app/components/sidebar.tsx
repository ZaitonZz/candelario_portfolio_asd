"use client";
import React from "react";
import { Github, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Link from "next/link";
import { Social } from "../types/api/social";

async function SideBarSocials() {
  const socialsReponse = await fetch("http://127.0.0.1:8000/api/socials", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const socials: Social[] = await socialsReponse.json();

  return (
    <aside>
      <nav className="grid gap-6 p-2 md:mt-10 lg:mt-60">
        <TooltipProvider>
          {socials.map((social) => (
            <Tooltip key={social.name}>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label={social.name}
                >
                  <Link href={social.link}>
                    {social.name === "Facebook" && (
                      <Facebook className="size-5 stroke-primary dark:stroke-foreground" />
                    )}
                    {social.name === "Instagram" && (
                      <Instagram className="size-5 stroke-primary dark:stroke-foreground" />
                    )}
                    {social.name === "Twitter" && (
                      <Twitter className="size-5 stroke-primary dark:stroke-foreground" />
                    )}
                    {social.name === "Github" && (
                      <Github className="size-5 stroke-primary dark:stroke-foreground" />
                    )}
                    {social.name === "LinkedIn" && (
                      <Linkedin className="size-5 stroke-primary dark:stroke-foreground" />
                    )}
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                {social.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
    </aside>
  );
}

export default SideBarSocials;
