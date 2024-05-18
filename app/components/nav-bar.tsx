'use client'
import React from 'react'
import Image from 'next/image'
import { ModeToggle } from '@/components/ui/toggle-mode'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { NavBar } from '../types/api/navbar'

interface NavProps{
    navbarData:NavBar
}

const Nav: React.FC<NavProps> = ({ navbarData }) => {
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
                                <Link href={navbarData.section_one_link} 
                    className='flex place-items-center gap-2 p-4 zen_dots'
                    rel='noopener noreferrer'>
                        {navbarData.section_one_text}
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
                    <Link href={navbarData.section_two_link} 
                    className='flex place-items-center gap-2 p-4 zen_dots'
                    rel='noopener noreferrer'>
                        {navbarData.section_two_text}
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
                    <Link href={navbarData.section_three_link} 
                    className='flex place-items-center gap-2 p-4 zen_dots'
                    rel='noopener noreferrer'>
                        {navbarData.section_three_text}
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
                    <Link href={navbarData.section_four_link}
                    className='flex place-items-center gap-2 p-4 zen_dots'
                    rel='noopener noreferrer'>
                        {navbarData.section_four_text}
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
                    <Link href={navbarData.section_five_link}
                    className='flex place-items-center gap-2 p-4 zen_dots'
                    rel='noopener noreferrer'>
                        {navbarData.section_five_text}
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
                        CMS
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