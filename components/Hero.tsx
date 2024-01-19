import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='w-full pt-[100px] sm:pt-[130px] md:pt-[180px] px-[3.3%]'>
        <div className="container grid grid-cols-1 md:grid-cols-7">
            <div className='w-full col-span-4 md:pt-[60px]'>
                <h1 className='text-[32px] max-w-[537px] w-full font-semibold'>Elias is a <span className='text-primary'>web designer</span> and <span className='text-primary'>front-end developer</span></h1>

                <p className='text-[16px] mt-[25px] sm:mt-[32px] max-w-[537px] w-full'>He crafts responsive websites where technologies meet creativity</p>

                <Button className='mt-[24px] hidden sm:flex'>Contact me!</Button>
            </div>

            <div className='w-full col-span-3 relative flex flex-col items-center'>
              <Image src={'/Person.svg'} className='relative max-w-[100%]' width={500} height={500} alt='Person' />

              <Image src={'/Dots.svg'} className='max-w-[84px] w-full absolute right-0 bottom-[10%] translate-y-[-50%]' width={500} height={500} alt='Dots' />

              <Image src={'/cube-1.svg'} className='max-w-[155px] w-full absolute left-0 top-[40%] -z-[1] md:translate-x-[-12%] translate-y-[-50%]' width={500} height={500} alt='Dots' />

              <div className='w-full border border-accent-foreground p-2 flex justify-start items-center gap-3'>
                <div className='h-[16px] w-[16px] bg-primary'></div> <h4>Currently working on <span className='text-primary'>Portfolio</span></h4>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hero