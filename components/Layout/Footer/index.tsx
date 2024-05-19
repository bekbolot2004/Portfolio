import React, { useState } from 'react'
import { linksSocial } from '../../About/index'
import MagicButton from '../../MagicButton'
type Props = {}

function Footer({}: Props) {
	const [copied, setCopied] = useState(false)

	const defaultOptions = {
		loop: copied,
		autoplay: copied,
		// animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	const handleCopy = () => {
		const text = 'bzantaev@gmail.com'
		navigator.clipboard.writeText(text)
		setCopied(true)
	}
	return (
		<div
			className={`bg-black text-white flex flex-col justify-between col-span-12 rounded-4xl cssSelector py-20 text-center`}
		>
			<div id='about' className='col-span-12 flex justify-center pt-8'>
				<h1 className='w-3/4 text-center text-6xl font-bold uppercase '>
					Let’s drop your ideas here
				</h1>
			</div>
			{/* <p className='mt-[40px] text-xl font-light'>Let’s drop your ideas here</p> */}
			<div className='mt-[60px]'>
				<MagicButton
					title={copied ? 'Email is Copied!' : 'Copy my email address'}
					icon={<div></div>}
					position='left'
					handleClick={handleCopy}
					otherClasses='!bg-[#161A31]'
				/>
			</div>
			<div className='flex justify-center gap-8 mt-10'>
				{linksSocial.map(link => (
					<a
						key={link.id}
						href={link.url}
						className={`flex  justify-center items-center py-10 text-xl text-whtie hover:text-gray-300`}
					>
						{link.title}
					</a>
				))}
			</div>
		</div>
	)
}

export default Footer
