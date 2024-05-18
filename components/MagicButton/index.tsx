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
			className='w-[200px]  bg-white text-black text-lg  mt-4 px-6 py-3 rounded-full hover:bg-gray-300'
			onClick={handleClick}
		>
			{/* <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' /> */}

			{/* remove px-3 py-1, add px-5 gap-2 */}
			{title}
			{/* <span
				className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
              px-7 text-sm font-medium  backdrop-blur-3xl gap-2 ${otherClasses}`}
			>
				{position === 'left' && icon}

				{position === 'right' && icon}
			</span> */}
		</button>
	)
}

export default MagicButton
