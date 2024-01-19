import React from 'react'
import Comments from './Comments'
import Image from 'next/image'

const Skills = () => {
  return (
    <section className='w-full px-[3.3%] pt-[74px] flex flex-col gap-y-[30px] md:gap-y-[48px]'>
        <div className="container flex justify-between items-center">
            <div className="max-w-[450px] w-full flex justify-start items-center gap-[16px]">
                <h1 className='flex text-[24px] md:text-[32px]'><span className='text-primary'>#</span> skills</h1>
                <div className='w-full border border-accent-foreground'></div>
            </div>
        </div>

        <div className='container grid md:grid-cols-5'>
            <div className='relative col-span-2 hidden md:inline-block'>
                <Image src={'/Dots.svg'} className='max-w-[63px] w-full absolute left-[16%] top-[15%] translate-x-[-50%] translate-y-[-50%]' width={500} height={500} alt='Dots' />

                <Image src={'/Dots.svg'} className='max-w-[63px] w-full absolute left-[60%] top-[45%] translate-x-[-50%] translate-y-[-50%]' width={500} height={500} alt='Dots' />

                <Image src={'/cube-1.svg'} className='max-w-[113px] w-full absolute left-[15%] bottom-0 -z-[1] md:translate-x-[-12%] translate-y-[-50%]' width={500} height={500} alt='Dots' />

                <div className='w-[86px] h-[86px] absolute border border-accent-foreground translate-x-[-50%] translate-y-[-50%] left-[75%]'></div>

                <div className='w-[52px] h-[52px] absolute bottom-[15%] border border-accent-foreground translate-x-[-50%] translate-y-[-50%] left-[85%]'></div>
            </div>
            <div className='col-span-3 grid grid-cols-2 grid-flow-row auto-rows-max sm:grid-cols-3 gap-[16px] sm:grid-rows-8'>
                <Comments idx={0} />
                <Comments idx={1} />
                <Comments idx={2} />
                <Comments idx={3} />
                <Comments idx={4} />
            </div>
        </div>
    </section>
  )
}

export default Skills