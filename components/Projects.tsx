import React from 'react'
import { Button } from './ui/button'
import { FaArrowRightLong } from "react-icons/fa6";
import Card from './Card';

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
    <section className='w-full px-[3.3%] pt-[74px] flex flex-col gap-y-[30px] md:gap-y-[48px]'>
        <div className="container flex justify-between items-center">
            <div className="max-w-[700px] w-full flex justify-start items-center gap-[16px]">
                <h1 className='flex text-[24px] md:text-[32px]'><span className='text-primary'>#</span> projects</h1>
                <div className='w-full border border-accent-foreground'></div>
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