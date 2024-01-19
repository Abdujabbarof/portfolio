import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Card = () => {
  return (
    <div className='w-[100%] max-w-[440px] border border-accent-foreground'>
        <Image src={'/card-img.svg'} width={500} height={500} alt='Card img' className='w-full' />

        <div className='px-[8px] py-[7px] border-t border-accent-foreground'>
            <h4 className='text-[16px] leading-0'>HTML SCSS Python Flask</h4>
        </div>

        <div className='px-[16px] py-[18px] border-t border-accent-foreground'>
            <h2 className='text-[20px] sm:text-[24px]'>ChertNodes</h2>

            <p className='text-[16px] leading-0 mt-[16px] text-accent-muted'>Minecraft servers hosting </p>

            <div className='mt-[16px] flex justify-start flex-wrap items-center gap-3'>
                <Button className='py-[8px] text-[16px]'>Preview ~</Button>
                <Button className='py-[8px] text-[16px]' variant={'destructive'}>Github ~</Button>
            </div>
        </div>
    </div>
  )
}

export default Card