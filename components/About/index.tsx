import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ContactsList } from '../data'
import githubSvg from './assets/github.svg'
import instagramSvg from './assets/instagram.svg'
import linkedinSvg from './assets/linkedin.svg'
import photoAuthor from './assets/photoAuthor.png'
import photoAuthor2 from './assets/photoAuthor2.jpg'
import telegramSvg from './assets/telegram.svg'
import twitterSvg from './assets/twitter.svg'

type Props = {}

export const linksSocial = [
	{
		id: 1,
		title: 'Linkedin',
		url: ContactsList.linkedin,
		icon: linkedinSvg,
		color: '#0A66C2',
	},
	{
		id: 2,
		title: 'Instagram',
		url: ContactsList.instagram,
		icon: instagramSvg,
		color: '#D82D7E #FA8F21',
	},
	{
		id: 3,
		title: 'Github',
		url: ContactsList.github,
		icon: githubSvg,
		color: '#737373',
	},
	{
		id: 4,
		title: 'Twitter',
		url: ContactsList.twitter,
		icon: twitterSvg,
		color: '#1D9BF0',
	},
	{
		id: 5,
		title: 'Telegram',
		url: ContactsList.telegram,
		icon: telegramSvg,
		color: '#2AABEE',
	},
]

function About({}: Props) {
	const aboutMe = [
		{
			id: 1,
			tittle: 'First name',
			secondTittle: 'Bekbolot',
		},
		{
			id: 2,
			tittle: 'Last name',
			secondTittle: 'Zhantaev',
		},
		{
			id: 3,
			tittle: 'Birthday',
			secondTittle: '8 march 2004',
		},
		{
			id: 4,
			tittle: 'Country',
			secondTittle: 'Kyrgyzstan',
		},
		{
			id: 5,
			tittle: 'Phone Number',
			secondTittle: '+996 (706) 915 494',
		},
		{
			id: 6,
			tittle: 'Email',
			secondTittle: 'bzantaev@gmail.com',
		},
		{
			id: 7,
			tittle: 'Russian',
			secondTittle: 'Native',
		},
		{
			id: 8,
			tittle: 'Kyrgyz',
			secondTittle: 'Native',
		},
		{
			id: 9,
			tittle: 'English',
			secondTittle: 'Intermediate',
		},
	]

	return (
		<>
			<div id='about' className='col-span-12 flex justify-center pt-8'>
				<h1 className='w-3/4 text-center text-7xl font-black uppercase '>
					<span className=' text-[#787d82]'>About </span> Me
				</h1>
			</div>
			<div className='relative flex flex-col justify-between col-span-12 md:col-span-4 rounded-4xl cssSelector'>
				<Image
					alt='Author'
					src={photoAuthor}
					objectFit='contain'
					className='rounded-4xl'
				/>
				<span className='absolute bottom-4 left-4 py-2 px-3 rounded-3xl backdrop-blur-sm bg-white/60 text-sm'>
					Prague, Czechia
				</span>
			</div>
			<div
				className={`bg-secondary flex flex-col justify-between col-span-8 rounded-4xl cssSelector p-6`}
			>
				<div className=' p-4'>
					<h2 className='col-span-6 font-semibold text-3xl'>
						Bekbolot Zhantaev
					</h2>
					<p className='text-lg'>
						👋 Hey there! I'm Bekbolot, a passionate Middle Frontend Developer
						with over 2 years of experience in React development. My forte lies
						in crafting intuitive, high-performance web applications and driving
						project success through innovative front-end solutions.
					</p>
				</div>
			</div>
			<div className='relative flex flex-col justify-between col-span-12 md:col-span-4 rounded-4xl cssSelector'>
				<Image
					alt='Author'
					src={photoAuthor2}
					objectFit='contain'
					className='rounded-4xl'
				/>
			</div>

			<div className='col-span-6'>
				<div className='grid grid-cols-3 gap-4 md:gap-8'>
					{linksSocial.map(link => (
						<Link
							key={link.id}
							href={link.url}
							className={`flex flex-col justify-between bg-secondary rounded-3xl p-6 aspect-square hover:bg-secondaryhover transition-all`}
						>
							<Image
								alt='Author'
								src={link.icon}
								objectFit='contain'
								color='red'
								style={{ filter: 'invert(100%)' }}
								className={' w-8'}
							/>
							<p className='mt-4'>{link.title}</p>
							{/* <button className='border border-black  '>Follow</button> */}
							<p className='relative inline-flex text-center items-center justify-center inline-block  px-4 py-1 overflow-hidden text-sm font-semibold rounded-full group hover:text-white z-0'>
								<span className='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]'></span>
								<span className='absolute -top-3 left-0 w-52 8 h-52 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-60 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8'></span>
								<span className='relative w-full text-center text-black transition-colors duration-200 ease-in-out group-hover:text-white'>
									Follow
								</span>
								<span className='absolute inset-0 border-2 border-black rounded-full'></span>
							</p>
						</Link>
					))}
				</div>
			</div>
		</>
	)
}

export default About
