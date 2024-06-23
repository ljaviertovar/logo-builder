import { Button } from './ui/button'

export default function Header() {
	return (
		<header className='w-full p-4 flex justify-between border-b-2'>
			<div className='flex justify-between items-center'>
				<img
					src='/logo.svg'
					alt='Logo Builder'
					className='bg-amber-300 w-10 h-10 rounded-full mr-1'
				/>
				<span className='text-2xl font-bold'>Logobuilder</span>
			</div>
			<Button>Download</Button>
		</header>
	)
}
