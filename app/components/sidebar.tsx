'use client'
import React from 'react'
import {
    Github,
    Twitter,
    Facebook,
    Instagram,
    Linkedin
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from '@radix-ui/react-tooltip'
import Link from 'next/link'

function SideBarSocials() {
    return (
        <aside>
            <nav className="grid gap-6 p-2 md:mt-10 lg:mt-60">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-lg"
                                aria-label="Facebook"
                            >
                                <Link href="https://web.facebook.com/philip.candelario.3/">
                                    <Facebook className="size-5 stroke-primary dark:stroke-foreground" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Facebook
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-lg"
                                aria-label="Instagram"
                            >
                                <Link href="https://www.instagram.com/zaiton.with.the.zz/">
                                    <Instagram className="size-5 stroke-primary dark:stroke-foreground" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Instagram
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-lg"
                                aria-label="Twitter"
                            >
                                <Link href="https://twitter.com/_ZaitonZz">
                                    <Twitter className="size-5 stroke-primary dark:stroke-foreground" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Twitter
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-lg"
                                aria-label="Github"
                            >
                                <Link href="https://github.com/ZaitonZz">
                                    <Github className="size-5 stroke-primary dark:stroke-foreground" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Github
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-lg"
                                aria-label="LinkedIn"
                            >
                                <Link href="https://www.linkedin.com/in/philip-greg-candelario-b8b195212/">
                                    <Linkedin className="size-5 stroke-primary dark:stroke-foreground" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            LinkedIn
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    )
}

export default SideBarSocials