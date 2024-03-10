import React from 'react'
import Image from 'next/image'
import CallMadeIcon from '@mui/icons-material/CallMade';
import GoplanetImg from './assets/goplanet.png'
import AtekImg from './assets/atek.png'
import YourBooksImg from './assets/YourBooks.png'
import example2 from './assets/example2.webp'
import Link from 'next/link';

type Props = {}

function Projects({ }: Props) {

    const ColorList = ["yellow", "orange", "red", "indigo", "sky", "violet", "purple", "teal"]
    const ProjectList = [
        {
            id: 1,
            tittle: 'Atek.kg',
            description: 'Modern landing page',
            technology: ["React", "Sass", "Telegram Bot", "React-tsparticles", "Axios", "Adaptive"],
            img: AtekImg,
            websiteUrl: 'https://atek.vercel.app/Travel',
            githubUrl: 'https://github.com/bekbolot2004/atek',
            color: 'bg-violet-600'
        },
        {
            id: 2,
            tittle: 'Goplanet',
            description: 'Travel and work in Europe',
            technology: ["React", "Tailwind Css", "Adaptive"],
            img: GoplanetImg,
            websiteUrl: 'https://goplanet.kg ',
            githubUrl: 'https://github.com/bekbolot2004/goplanet.kg',
            color: 'bg-red-600'
        },
        {
            id: 3,
            tittle: 'YourBooks',
            description: 'Online library, free books download',
            technology: ["React", "Tailwind Css", "Adaptive", "Axios", "Material UI", "Validation",],
            img: YourBooksImg,
            websiteUrl: 'https://goplanet.kg ',
            githubUrl: 'https://github.com/bekbolot2004/goplanet.kg',
            color: 'bg-orange-600'
        },
        {
            id: 4,
            tittle: 'GetDesk',
            description: 'Find office',
            technology: ["Next.js", "Tailwind Css", "Adaptive", "Axios", "Material UI", "Validation",],
            img: YourBooksImg,
            websiteUrl: 'https://getdesk.vercel.app/',
            githubUrl: '',
            color: 'bg-green-600'
        },

    ]

    return (
        <>
            <div className='col-span-12 pt-8' id='about'>
                <h1 className='text-6xl font-black text-center uppercase'>My projects</h1>
            </div>
            {ProjectList.map((item) =>
                <Link href={''} key={item.id} className={`col-span-12 md:col-span-6 rounded-4xl bg-secondary overflow-hidden p-6 min-[500px]:p-8 grid gap-6 group `}>
                    <a href='' className='block cursor-pointer rounded-lg overflow-hidden'>
                        <Image
                            className=' group-hover:scale-105 transition-all duration-500'
                            alt='website'
                            src={example2}
                            objectFit='contain'
                        />
                    </a>
                    <div className=''>
                        <div className='flex justify-between'>
                            <div>
                                <h2 className='text-2xl font-medium'>{item.tittle}</h2>
                                {/* <p className=' '>{item.description}</p> */}
                                <div className='flex flex-wrap mt-4 gap-2'>
                                    {item.technology.map((technology, i) => (
                                        <p key={i} className=' text-sm border-black border px-4 py-[2px] rounded-full '>{technology}</p>
                                    ))}
                                </div>
                            </div>
                            {/* <div>
                                <a className='flex justify-center items-center h-8 sm:h-12  w-8 sm:w-12 bg-white rounded-full cursor-pointer'>
                                    <CallMadeIcon />
                                </a>
                            </div> */}
                        </div>
                    </div>
                </Link>
            )}
            <div className='col-span-12 mt-4 mb-20 flex'>
                <Link href="/" className='w-full text-center bg-white text-black text-lg font-medium py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-700'>All my projects</Link>
            </div>
        </>
    )
}

export default Projects