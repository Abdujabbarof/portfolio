import React from 'react'
import { sideLinks } from '@/constants/index'
import Link from 'next/link'

const SideLinks = () => {
  return (
    <div className='hidden md:flex flex-col justify-start gap-4 fixed left-0 top-0 h-screen items-center'> 
      <div className='h-[36vh] border border-muted-foreground'></div>
      <ul className='flex flex-col justify-center items-center gap-3 px-[5px]'>
          {
              sideLinks.map((icons, idx) => (
                  <li key={idx}>
                      <Link href={icons.href} className='text-[30px] text-muted-foreground'>{icons.icon}</Link>
                  </li>
              ))
          }
      </ul>
    </div>
  )
}

export default SideLinks