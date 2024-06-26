import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Bug } from 'lucide-react'

export default function IconsModal() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant='secondary'
					className='h-9 w-9 p-1 border shadow-lg'
				>
					<Bug />
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Select your icon</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>yei</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
