'use client'

import { Shell } from 'lucide-react'

export default function Header() {
	return (
		<header className='w-full p-4 flex justify-center border-b-2'>
			<div className='flex items-center gap-12'>
				<div className='flex justify-between items-center space-x-2'>
					<Shell className='w-9 h-9 bg-amber-500 rounded-full p-1' />
					<span className='text-2xl font-bold'>Logobuilder</span>
				</div>
			</div>
		</header>
	)
}
