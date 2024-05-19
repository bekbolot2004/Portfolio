import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import YourBooksImg from './assets/YourBooks.png'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'

type Props = {}

function ProjectList({}: Props) {
	const ProjectList = [
		{
			id: 1,
			tittle: 'Atek.kg',
			description: 'Modern landing page',
			technology: [
				'React',
				'Sass',
				'Telegram Bot',
				'React-tsparticles',
				'Axios',
				'Adaptive',
			],
			img: project1,
			websiteUrl: 'https://atek.vercel.app/Travel',
			githubUrl: 'https://github.com/bekbolot2004/atek',
			color: 'bg-violet-600',
		},
		{
			id: 2,
			tittle: 'Goplanet',
			description: 'Travel and work in Europe',
			technology: ['React', 'Tailwind Css', 'Adaptive'],
			img: project2,
			websiteUrl: 'https://goplanet.kg ',
			githubUrl: 'https://github.com/bekbolot2004/goplanet.kg',
			color: 'bg-red-600',
		},
		{
			id: 3,
			tittle: 'YourBooks',
			description: 'Online library, free books download',
			technology: [
				'React',
				'Tailwind Css',
				'Adaptive',
				'Axios',
				'Material UI',
				'Validation',
			],
			img: YourBooksImg,
			websiteUrl: 'https://goplanet.kg ',
			githubUrl: 'https://github.com/bekbolot2004/goplanet.kg',
			color: 'bg-orange-600',
		},
		{
			id: 4,
			tittle: 'GetDesk',
			description: 'Find office',
			technology: [
				'Next.js',
				'Tailwind Css',
				'Adaptive',
				'Axios',
				'Material UI',
				'Validation',
			],
			img: YourBooksImg,
			websiteUrl: 'https://getdesk.vercel.app/',
			githubUrl: '',
			color: 'bg-green-600',
		},
	]
	return (
		<>
			{ProjectList.map(item => (
				<Link
					href={''}
					key={item.id}
					className={`col-span-12 md:col-span-6 rounded-4xl bg-secondary overflow-hidden p-6 min-[500px]:p-8 grid gap-6 group `}
				>
					<Image
						className='rounded-3xl group-hover:scale-105 transition-all duration-500 shadow-sm'
						alt='website'
						src={item.img}
						objectFit='contain'
					/>
					<div className=''>
						<div className='flex justify-between'>
							<div>
								<h2 className='text-3xl font-semibold'>{item.tittle}</h2>
								<div className='flex flex-wrap mt-4 gap-2'>
									{item.technology.map((technology, i) => (
										<p
											key={i}
											className='text-black/70 text-sm font-semibold border-black/70 border-2 px-4 py-[2px] rounded-full '
										>
											{technology}
										</p>
									))}
								</div>
							</div>
						</div>
					</div>
				</Link>
			))}
		</>
	)
}

export default ProjectList
