'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ModeToggle } from '@/components/ui/toggle-mode';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { NavBar } from '../types/api/navbar';

interface NavProps {
  navbarData: NavBar;
}

const Nav: React.FC<NavProps> = ({ navbarData }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative">
      <nav className="flex items-center justify-between p-4 bg-dark-800">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a
            href="/"
            className="flex place-items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex md:w-5/6 items-center justify-between">
          <li>
            <Button asChild variant="ghost" size="icon" className="rounded-md w-16 lg:w-24" aria-label="Home">
              <Link href={navbarData.section_one_link} className='flex place-items-center gap-2 p-4 zen_dots' rel='noopener noreferrer'>
                {navbarData.section_one_text}
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" size="icon" className="rounded-md w-16 lg:w-24" aria-label="About">
              <Link href={navbarData.section_two_link} className='flex place-items-center gap-2 p-4 zen_dots' rel='noopener noreferrer'>
                {navbarData.section_two_text}
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" size="icon" className="rounded-md w-16 lg:w-24" aria-label="Skills">
              <Link href={navbarData.section_three_link} className='flex place-items-center gap-2 p-4 zen_dots' rel='noopener noreferrer'>
                {navbarData.section_three_text}
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" size="icon" className="rounded-md w-28 lg:w-36" aria-label="Experience">
              <Link href={navbarData.section_four_link} className='flex place-items-center gap-2 p-4 zen_dots' rel='noopener noreferrer'>
                {navbarData.section_four_text}
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" size="icon" className="rounded-md w-28 lg:w-36" aria-label="Portfolio">
              <Link href={navbarData.section_five_link} className='flex place-items-center gap-2 p-4 zen_dots' rel='noopener noreferrer'>
                {navbarData.section_five_text}
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" size="icon" className="rounded-md w-16 lg:w-24" aria-label="CMS">
              <Link href='http://127.0.0.1:8000/admin/login' className='flex place-items-center gap-2 p-4 zen_dots' rel='noopener noreferrer'>
                CMS
              </Link>
            </Button>
          </li>
          <li className=''>
            <ModeToggle />
          </li>
        </ul>
      </nav>
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center justify-center space-y-4 mt-4">
          <li>
            <Link href={navbarData.section_one_link} className='flex place-items-center gap-2 p-4 zen_dots' rel='noopener noreferrer'>
              {navbarData.section_one_text}
            </Link>
          </li>
          <li>
            <Link href={navbarData.section_two_link} className='flex place-items-center gap-2 p-4 zen_dots' rel='noopener noreferrer'>
              {navbarData.section_two_text}
            </Link>
          </li>
          <li>
            <Link href={navbarData.section_three_link} className='flex place-items-center gap-2 p-4 zen_dots' rel='noopener noreferrer'>
              {navbarData.section_three_text}
            </Link>
          </li>
          <li>
            <Link href={navbarData.section_four_link} className='flex place-items-center gap-2 p-4 zen_dots' rel='noopener noreferrer'>
              {navbarData.section_four_text}
            </Link>
          </li>
          <li>
            <Link href={navbarData.section_five_link} className='flex place-items-center gap-2 p-4 zen_dots' rel='noopener noreferrer'>
              {navbarData.section_five_text}
            </Link>
          </li>
          <li>
            <Link href='http://127.0.0.1:8000/admin/login' className='flex place-items-center gap-2 p-4 zen_dots' rel='noopener noreferrer'>
              CMS
            </Link>
          </li>
          <li className=''>
            <ModeToggle />
          </li>
        </ul>
      )}
    </header>
  );
}

export default Nav;
