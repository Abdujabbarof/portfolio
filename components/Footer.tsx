import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='px-[3.3%] md:px-[40px] w-full py-[32px] border-t border-accent-foreground'>
        <div className="container flex justify-between items-start">
            <div className='flex items-start gap-2 flex-col justify-center'>
                <Link href={'/'}>
                    <h1 className='font-bold text-lg text-[20px] md:text-[24px]'>_abdulloh_dev</h1>
                </Link>
            </div>
        </div>
        <div className='w-full text-center pt-[32px]'>
            <p>© Copyright 2022. Made by <Link href={'https://www.instagram.com/'} className='text-primary'>_abdujabbarof_</Link></p>
        </div>
    </footer>
  )
}

export default Footer