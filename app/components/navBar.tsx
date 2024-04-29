'use client'
import React from 'react'
import Image from 'next/image'
import { ModeToggle } from '@/components/ui/toggle-mode'

function Nav() {
  return (
    <header>
        <nav className='flex'>
            <div className='w-[150vh]'>
            <a 
                    href='' 
                    className='pointer-events-none flex place-items-center gap-2 p-8'
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
                    <a href='http://localhost:3000/home' 
                    className='flex place-items-center gap-2 p-12'
                    target='_blank'
                    rel='noopener noreferrer'>
                        Home
                    </a>
                </li>
                <li>
                    <a href='http://localhost:3000/portfolio' 
                    className='flex place-items-center gap-2 p-12'
                    rel='noopener noreferrer'>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href='http://localhost:3000/everything' 
                    className='flex place-items-center gap-2 p-12'
                    rel='noopener noreferrer'>
                        Everything<br></br>About Me
                    </a>
                </li>
                <li>
                    <a href='http://localhost:3000/login' 
                    className='flex place-items-center gap-2 p-12'
                    rel='noopener noreferrer'>
                        Login
                    </a>
                </li>
                <li className='p-12'>
                    <ModeToggle></ModeToggle>
                </li>
            </ul>
            
        </nav>
    </header>
  )
}

export default Nav