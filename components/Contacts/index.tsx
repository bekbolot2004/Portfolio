import React from 'react'
import Image from 'next/image'
import { ContactsList } from '../data'
import { linksSocial } from '../About/index'
import Form from './Form'
import Link from 'next/link'


type Props = {}

function Contacts({ }: Props) {
    return (
        <>
            <div className='col-span-12 flex justify-center pt-8'>
                <h1 className='w-3/4 text-center text-7xl font-black uppercase '><span className=' text-[#787d82]'>Have an idea? </span>Let’s connect.</h1>
            </div>
            <div className={`bg-secondary flex flex-col justify-between col-span-6 rounded-4xl cssSelector p-6`}>
                <p className=' text-3xl text-[#374151]'>I am eager to hear from you and discuss how my UI design expertise can help you achieve your business goals. Please contact me today to schedule a consultation.</p>
            </div>
            <div className={`bg-secondary flex flex-col justify-between col-span-6 rounded-4xl cssSelector p-6`}>
                <p className=' text-3xl text-[#374151]'>I am eager to hear from you and discuss how my UI design expertise can help you achieve your business goals. Please contact me today to schedule a consultation.</p>
            </div>
            <div className={`bg-secondary flex flex-col justify-between col-span-12 md:col-span-12 rounded-4xl cssSelector p-28`}>
                <div className='flex justify-center mb-14'>
                    <h2 className='text-center text-4xl font-semibold w-1/2'>Send me message, I’ll reply within 12 hours</h2>
                </div>
                <Form />
            </div>
            <div className={`bg-black text-white flex flex-col justify-between col-span-12 rounded-4xl cssSelector p-20 text-center`}>
                <h1 className='text-6xl font-semibold'>
                    Let’s drop your ideas here
                </h1>
                {/* <p className='mt-[40px] text-xl font-light'>Let’s drop your ideas here</p> */}
                <div className='mt-[60px]'>
                    <Link href="/" className='bg-white text-black text-lg  mt-4 px-6 py-3 rounded-full hover:bg-gray-300'>{ContactsList.email}</Link>
                </div>
                <div className='flex justify-center gap-8 mt-5'>
                    {linksSocial.map((link) =>
                        <a key={link.id} href={link.url} className={`flex  justify-center items-center py-10 text-xl text-whtie hover:text-gray-300`}>
                            {link.title}
                        </a>
                    )}
                </div>
            </div>
        </>
    )
}

export default Contacts