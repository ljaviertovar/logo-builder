import React, { useState } from 'react'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '../ui/dialog'
import { Button } from '../ui/button'

import CustomIcon from './custom-icon'

import { useAppContext } from '@/context'
import { iconNames } from '@/constants/icons'
import { ScrollArea } from '../ui/scroll-area'

export default function IconsModal() {
	const [openDialog, setOpenDialog] = useState(false)

	const { values, setValues } = useAppContext()

	return (
		<Dialog open={openDialog}>
			<Button
				onClick={() => setOpenDialog(true)}
				variant='secondary'
				aria-label={values.icon}
				className='h-9 w-9 p-1 border shadow-lg hover:bg-gray-300'
			>
				<CustomIcon name={values.icon} />
			</Button>

			<DialogContent className='sm:max-w-xl'>
				<DialogHeader>
					<DialogTitle>Select your icon</DialogTitle>
					<DialogClose onClick={() => setOpenDialog(false)} />
				</DialogHeader>
				<ScrollArea className='h-[80vh]'>
					<div className='grid grid-cols-6 gap-4 py-4'>
						{iconNames.map(icon => (
							<Button
								key={icon}
								title={icon}
								aria-label={icon}
								variant='secondary'
								className='h-9 w-9 p-1 border shadow-lg hover:bg-gray-300'
								onClick={() => {
									setValues({ ...values, icon })
									setOpenDialog(false)
								}}
							>
								<CustomIcon name={icon} />
							</Button>
						))}
					</div>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	)
}
