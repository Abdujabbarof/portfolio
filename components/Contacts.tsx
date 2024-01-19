import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import FormComponent from './Form'

const Contacts = () => {
  return (
    <section id='contacts' className='w-full px-[3.3%] md:px-[40px] sm:pt-[40px] pb-[80px]'>
        <div className="container grid md:grid-cols-2 gap-[50px] md:gap-4">
            <div className='w-full'>
                <h1 className='text-[24px] md:text-[32px] font-bold text-primary'><span>#</span>get in touch</h1>

                <p className='mt-[16px]'>Have a project in mind? Looking to partner or work together? Reach out through the form and I&apos;ll get back to you.</p>

                <ul className='mt-[24px] flex flex-col gap-[10px]'>
                    <li>
                        <Link href={'tel:+998998113691'} className='flex justify-start font-bold items-center gap-4 text-[14px] sm:text-[18px] '><Mail className='text-primary' size={30} /> +998998113691</Link>
                    </li>

                    <li>
                        <Link href={'mailto:abdujabborov6172@gmail.com'} className='flex justify-start font-bold items-center gap-4 text-[14px] sm:text-[18px]'><Phone className='text-primary' size={30} /> abdujabborov6172@gmail.com</Link>
                    </li>
                </ul>
            </div>

            <FormComponent />            
        </div>
    </section>
  )
}

export default Contacts