import Image from 'next/image'
import React from 'react'
import style from './style.module.scss'
import photoAuthor from './assets/photoAuthor.png'
import Button from '@mui/material/Button/Button'
import CallMadeIcon from '@mui/icons-material/CallMade';
import item1Photo from './assets/item1.png'
import instagramSvg from './assets/instagram.svg'
import githubSvg from './assets/github.svg'
import linkedinSvg from './assets/linkedin.svg'
import twitterSvg from './assets/twitter.svg'
import telegramSvg from './assets/telegram.svg'

type Props = {}

const linksSocial = [
    {
        id: 1,
        title: 'Linkedin',
        url: '',
        icon: linkedinSvg,
        color: '#0A66C2'
    },
    {
        id: 2,
        title: 'Instagram',
        url: '',
        icon: instagramSvg,
        color: '#D82D7E #FA8F21',
    },
    {
        id: 3,
        title: 'Github',
        url: '',
        icon: githubSvg,
        color: '#737373',
    },
    {
        id: 4,
        title: 'Twitter',
        url: '',
        icon: twitterSvg,
        color: '#1D9BF0',
    },
    {
        id: 5,
        title: 'Telegram',
        url: '',
        icon: telegramSvg,
        color: '#2AABEE',
    },
]

function MainSection({ }: Props) {
    return (
        <div className='grid grid-cols-12 gap-4 md:gap-5'>
            <div
                className={`${style.cssSelector} flex flex-col justify-between col-span-12 md:col-span-7 rounded-3xl cssSelector p-8 min-[900px]:p-11 min-h-[400px]`}>
                <div>
                    <h1 className='text-4xl font-bold text'>
                        Hello, I’m Bekbolot, a Front-end
                        Developer With 1.5 years of
                        experience
                    </h1>
                    <p className='mt-[50px]'>
                        Icare a lot about usin design for positive impact. and enjoy creating
                        user-centric, delightful, and human experiences.
                    </p>
                </div>
                <div className='flex items-center max-sm:flex-col gap-2 mt-5'>
                    <a href='' className='h-12 w-[300px] flex justify-center items-center max-sm:w-full rounded-full bg-black text-white hover:scale-105 transition-all'>Contact me</a>
                    <div className='flex gap-2 max-sm:justify-between w-full'>
                        {linksSocial.map((link) =>
                            <a href={link.url} className={`flex justify-center items-center  bg-black h-12 w-12 rounded-full bg-[${link.color}]`}>
                                <Image
                                    alt='Author'
                                    src={link.icon}
                                    objectFit='contain'
                                />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className='col-span-12 md:col-span-5 rounded-3xl bg-black bg-center overflow-hidden max-md:order-first max-md:h-[500px]'>
                <Image
                    alt='Author'
                    src={photoAuthor}
                    objectFit='contain'
                />
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) =>
                <div
                    className='col-span-12 md:col-span-6 rounded-3xl bg-[#6B5CE5] overflow-hidden'>
                    <div className='' >
                        <div className='p-6 min-[500px]:p-8'>
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className='text-lg text-white'>Goplanet.kg</h2>
                                    <p className='text-sm font-extralight text-white'>Travel and work in Europe</p>
                                    <div className='flex gap-1'>
                                        {/* <p className=' px-3 bg-white text-black text-xs rounded-sm '>#React</p>
                                    <p className=' px-3 bg-white text-black text-xs rounded-sm '>#Node.js</p>
                                    <p className=' px-3 bg-white text-black text-xs rounded-sm '>#Tailwind Css</p>
                                    <p className=' px-3 bg-white text-black text-xs rounded-sm '>#Redux</p> */}
                                    </div>
                                </div>
                                <a className='flex justify-center items-center h-8 sm:h-12  w-8 sm:w-12 bg-white rounded-full cursor-pointer'>
                                    <CallMadeIcon />
                                </a>
                            </div>
                        </div>
                        <a href='' className='block cursor-pointer rounded-lg overflow-hidden shadow-lg m-4 min-[500px]:m-6 md:translate-y-6 hover:translate-y-0 transition duration-700 ease-in-out'>
                            <Image
                                alt='website'
                                src={item1Photo}
                                objectFit='contain'
                            />
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MainSection