import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

const About = () => {
  return (
    <section className='w-full px-[3.3%] md:px-[40px] py-[74px] flex flex-col gap-y-[30px] md:gap-y-[20px]'>
        <div className="container flex justify-between w-full items-center">
            <div className="max-w-[650px] w-full flex justify-start items-center gap-[16px]">
                <h1 className='flex text-[24px] md:text-[32px]'><span className='text-primary'>#</span> about_me</h1>
                <div className='w-full border border-primary'></div>
            </div>
        </div>

        <div className="container grid grid-cols-1 gap-[15px] sm:gap-0 sm:grid-cols-5">
            <div className='col-span-2 flex justify-start items-center h-full'>
                <h1 className='text-[24px] md:text-[32px] inline-block font-bold'>Creative <br /> Front<span className='text-primary'>~End</span> Developer</h1>
            </div>
            <div className='col-span-3'>
                <p className='text-[14px] sm:text-[16px]'><span className='text-primary'>Hello, i’m Elias!</span>
                    <br /><br />
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
                    <br /><br />
                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
            </div>
        </div>
    </section>
  )
}

export default About