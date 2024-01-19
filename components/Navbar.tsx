"use client"
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './toggle-mode'
import { navLinks } from '@/constants'
import Sidebar from './Sidebar'

const Navbar = () => {
  return (
    <header className='z-10 left-0 top-0 w-full bg-background px-[3.3%] md:px-[40px] py-4 sm:py-7'>
        <div className='container flex flex-row-reverse sm:flex-row justify-between items-center'>
            <Link href={'/'}>
                <h1 className='font-bold text-lg text-[20px] md:text-[24px]'>_abdulloh_dev</h1>
            </Link>

            <nav className='flex justify-center items-center gap-7'>
                <ul className='hidden justify-center items-center gap-7 sm:flex'>
                    {
                        navLinks.map((item) => (
                            <li key={item.title}>
                                <span className='text-primary'>#</span>
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
                <span>
                    <ModeToggle />
                </span>
                {/* <Sidebar /> */}
            </nav>

        </div>
    </header>
  )
}

export default Navbar