import React from 'react'

import Link from 'next/link'
import ProjectList from './ProjectList'

type Props = {}

function Projects({}: Props) {
	return (
		<>
			<div className='col-span-12 flex justify-center pt-8'>
				<h1 className='w-3/4 text-center text-7xl font-black uppercase '>
					<span className=' text-[#787d82]'>My </span> Projects
				</h1>
			</div>
			<ProjectList />
			<div className='col-span-12 mt-4 mb-20 flex'>
				<Link
					href='/projects'
					className='w-full text-center bg-white text-black text-lg font-medium py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-700'
				>
					All my projects
				</Link>
			</div>
		</>
	)
}

export default Projects
