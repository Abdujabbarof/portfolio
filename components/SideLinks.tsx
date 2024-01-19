import React from 'react'
import Github from '../public/Github .svg'
import { sideLinks } from '@/constants/index'
import Link from 'next/link'

const SideLinks = () => {
  return (
    <ul className='hidden md:flex flex-col justify-center items-center gap-3 px-[5px] fixed left-0 z-[10] top-[50%] -translate-y-[50%]'>
        {
            sideLinks.map((icons, idx) => (
                <li key={idx}>
                    <Link href={icons.href} className='text-[30px]'>{icons.icon}</Link>
                </li>
            ))
        }
    </ul>
  )
}

export default SideLinks