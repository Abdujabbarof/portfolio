import React from 'react'
import { Button } from './ui/button'
import { FaArrowRightLong } from "react-icons/fa6";
import Card from './Card';
import Image from 'next/image';

const projects = [
    {
        img: '/card-img.svg',
        text: 'HTML CSS JS REACT',
        title: 'ChertNodes',
        p: 'Minecraft servers hosting',
        btn: 'Preview',
        git: 'Github'
    },
    {
        img: '/card-img.svg',
        text: 'HTML CSS JS REACT',
        title: 'ChertNodes',
        p: 'Minecraft servers hosting',
        btn: 'Preview',
        git: 'Github'
    },
    {
        img: '/card-img.svg',
        text: 'HTML CSS JS REACT',
        title: 'ChertNodes',
        p: 'Minecraft servers hosting',
        btn: 'Preview',
        git: 'Github'
    }
]

const Projects = () => {
  return (
    <section id='projects' className='w-full px-[3.3%] md:px-[40px] pt-[74px] flex flex-col gap-y-[30px] md:gap-y-[48px] relative'>
        <div className='hidden lg:inline-block border border-accent-foreground w-[91px] h-[155px] absolute right-[0%] top-[50%] translate-x-[65%] translate-y-[50%]'></div>
        <Image src={'/Dots.svg'} className='h-[100px] hidden lg:inline-block w-full absolute left-[1%] top-[20%] translate-x-[-50%] translate-y-[-50%]' width={500} height={500} alt='Dots' />

        <div className="container flex justify-between items-center">
            <div className="max-w-[700px] w-full flex justify-start items-center gap-[16px]">
                <h1 className='flex text-[24px] md:text-[32px]'><span className='text-primary'>#</span> projects</h1>
                <div className='w-full border border-primary'></div>
            </div>

            <Button variant={'link'} className='flex gap-3 text-accent-foreground'>View all <FaArrowRightLong /></Button>
        </div>

        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-[16px] sm:grid-cols-2 place-items-center">
            {
                projects.map((i) => (
                    <Card key={i.title} />
                ))
            }
        </div>
    </section>
  )
}

export default Projects