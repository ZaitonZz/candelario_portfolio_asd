'use client'
import React from 'react'
import Image from 'next/image'
import { ModeToggle } from '@/components/ui/toggle-mode'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Nav() {
  return (
    <header>
        <nav className='flex items-center'>
            <div className='md:w-[100vh] lg:w-[150vh]'>
            <a 
                    href='' 
                    className='pointer-events-none flex place-items-center gap-2 p-4'
                    target='_blank'
                    rel='noopener noreferrer'>
                        <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={100}
                    height={24}
                    priority
                  />
                    </a>
            </div>
            <ul className='flex items-center justify-between'>
                <li>
                    
                </li>
                <li>
                <Button asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-md w-24 mx-2"
                                aria-label="Playground"
                            >
                                <Link href='http://localhost:3000/home' 
                    className='flex place-items-center gap-2 p-4 zen_dots'
                    rel='noopener noreferrer'>
                        Home
                    </Link>
                                </Button>
                    
                </li>
                <li>
                <Button asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-md w-30 mx-2"
                                aria-label="Playground"
                            >
                    <Link href='http://localhost:3000/portfolio' 
                    className='flex place-items-center gap-2 p-4 zen_dots'
                    rel='noopener noreferrer'>
                        Portfolio
                    </Link>
                    </Button>
                </li>
                <li>
                <Button asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-md w-32 h-14 mx-2"
                                aria-label="Playground"
                            >
                    <Link href='http://localhost:3000/everything' 
                    className='flex place-items-center gap-2 p-4 zen_dots'
                    rel='noopener noreferrer'>
                        Everything<br></br>About Me
                    </Link>
                    </Button>
                </li>
                <li>
                <Button asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-md w-24 mx-2"
                                aria-label="Playground"
                            >
                    <Link href='http://localhost:3000/login' 
                    className='flex place-items-center gap-2 p-4 zen_dots'
                    rel='noopener noreferrer'>
                        Login
                    </Link>
                    </Button>
                </li>
                <li className='p-4'>
                    <ModeToggle></ModeToggle>
                </li>
            </ul>
            
        </nav>
    </header>
  )
}

export default Nav