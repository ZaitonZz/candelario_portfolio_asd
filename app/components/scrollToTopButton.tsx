'use client'
import { Rocket } from 'lucide-react'
import React from 'react'
import ScrollToTop from 'react-scroll-up'

function ScrollToTopButton() {
  return (
    <div>
    <ScrollToTop showUnder={160}>
        <div className='rounded-lg p-3 hover:border-primary hover:border-2 border-2 border-background'>
        <Rocket className='stroke-primary'></Rocket>
        </div>
</ScrollToTop>
    </div>
  )
}

export default ScrollToTopButton