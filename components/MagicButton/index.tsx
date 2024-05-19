import React from 'react'

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
	title,
	icon,
	position,
	handleClick,
	otherClasses,
}: {
	title: string
	icon: React.ReactNode
	position: string
	handleClick?: () => void
	otherClasses?: string
}) => {
	return (
		<button
			className='w-[300px]  bg-white text-black text-lg  mt-4 px-6 py-3 rounded-full hover:bg-gray-300'
			onClick={handleClick}
		>
			{title}
		</button>
	)
}

export default MagicButton
