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
            <div className='md:w-1/6 lg:1/3 2xl:w-1/2 w-screen flex justify-center md:block'>
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
            <ul className='items-center justify-between hidden md:flex md:w-5/6'>
                <li>
                    
                </li>
                <li>
                <Button asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-md w-16 lg:w-24"
                                aria-label="Home"
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
                                className="rounded-md w-16 lg:w-24"
                                aria-label="About"
                            >
                    <Link href='http://localhost:3000/home#secondFrameContent' 
                    className='flex place-items-center gap-2 p-4 zen_dots'
                    rel='noopener noreferrer'>
                        About
                    </Link>
                    </Button>
                </li>
                <li>
                <Button asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-md w-16 lg:w-24"
                                aria-label="Playground"
                            >
                    <Link href='http://localhost:3000/home#thirdFrameContent' 
                    className='flex place-items-center gap-2 p-4 zen_dots'
                    rel='noopener noreferrer'>
                        Skills
                    </Link>
                    </Button>
                </li>
                <li>
                <Button asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-md w-28 lg:w-36"
                                aria-label="Playground"
                            >
                    <Link href='http://localhost:3000/home#fourthFrameContent' 
                    className='flex place-items-center gap-2 p-4 zen_dots'
                    rel='noopener noreferrer'>
                        Experience
                    </Link>
                    </Button>
                </li>
                <li>
                <Button asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-md w-28 lg:w-36"
                                aria-label="Playground"
                            >
                    <Link href='http://localhost:3000/home#fifthFrameContent' 
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
                                className="rounded-md w-16 lg:w-24"
                                aria-label="Playground"
                            >
                    <Link href='http://127.0.0.1:8000/admin/login' 
                    className='flex place-items-center gap-2 p-4 zen_dots'
                    rel='noopener noreferrer'>
                        Login
                    </Link>
                    </Button>
                </li>
                <li className=' '>
                    <ModeToggle></ModeToggle>
                </li>
            </ul>
            
        </nav>
    </header>
  )
}

export default Nav