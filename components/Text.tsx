import Image from 'next/image'
import React from 'react'

const Text = () => {
  return (
    <section className='relative w-[100%] px-[3.3%] pt-[112px]'>
        <div className='hidden lg:inline-block border border-accent-foreground w-[91px] h-[91px] absolute right-[3%] top-[70%] translate-x-[50%] translate-y-[-50%]'></div>
        <div className='max-w-[720px] w-[100%] mx-auto flex flex-col items-end'>
            <div className='w-[100%] p-[24px] sm:p-[32px] border border-accent-foreground relative'>
                <div className='absolute w-[35px] flex items-center justify-center top-0 left-[9%] sm:left-[5%] bg-background translate-y-[-50%] translate-x-[-50%]'>
                    <Image src={'/“.svg'} width={25} height={20} alt='"' />
                </div>
                <div className='absolute w-[35px] flex rotate-[180deg] items-center justify-center top-[100%] right-0 translate-y-[-50%] translate-x-[-50%] bg-background '>
                    <Image src={'/“.svg'} width={25} height={20} alt='"' />
                </div>
                <h2 className='text-[16px] md:text-[24px]'>With great power comes great electricity bill</h2>
            </div>
            <div className='border border-t-0 p-[16px] border-accent-foreground'>
                <h2 className='text-[16px]'>_Dr. Abdujabbarof</h2>
            </div>
        </div>
    </section>
  )
}

export default Text