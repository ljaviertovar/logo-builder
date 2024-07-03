import { Button } from './ui/button'

import { Download, Shell } from 'lucide-react'

export default function Header() {
	return (
		<header className='w-full p-4 flex justify-between border-b-2'>
			<div className='flex justify-between items-center space-x-2'>
				<Shell className='w-9 h-9 bg-amber-500 rounded-full p-1' />
				<span className='text-2xl font-bold'>Logobuilder</span>
			</div>
			<Button className='flex gap-2 items-center'>
				<Download
					strokeWidth={2}
					className='w-4 h-4'
				/>{' '}
				Download
			</Button>
		</header>
	)
}
