import Image from 'next/image'
import React from 'react'

const ClientSays = () => {
  return (
    <section className='w-full px-[3.3%] md:px-[40px] pt-[34px] flex flex-col gap-y-[30px] md:gap-y-[48px]'>
        <div className="container flex justify-between items-center">
            <div className="w-full flex justify-start items-center gap-[16px]">
                <h1 className='inline-block text-[24px] md:text-[32px]'><span className='text-primary'>#</span>client testimonials</h1>
                <div className='w-full max-w-[500px] border border-primary'></div>
            </div>
        </div>
        <div className="container">
            <div className='w-full grid grid-cols-2'>
                <div className="w-full border border-accent-foreground p-[16px]"></div>
            </div>
        </div>
    </section>
  )
}

export default ClientSays