import React, { useState } from 'react'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '../ui/dialog'
import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'

import CustomIcon from './custom-icon'
import IconList from './icon-list'

import { useAppContext } from '@/context'

export default function IconsModal() {
	const [openDialog, setOpenDialog] = useState(false)

	const { values } = useAppContext()

	return (
		<Dialog
			open={openDialog}
			onOpenChange={setOpenDialog}
		>
			<Button
				onClick={() => setOpenDialog(true)}
				variant='ghost'
				aria-label={values.icon}
				className='h-9 w-9 p-1 border shadow-lg '
			>
				<CustomIcon name={values.icon} />
			</Button>

			<DialogContent className='sm:max-w-xl'>
				<DialogHeader>
					<DialogTitle>Select your icon:</DialogTitle>
					<DialogClose onClick={() => setOpenDialog(false)} />
				</DialogHeader>
				<ScrollArea className='h-[80vh]'>
					<IconList setOpenDialog={setOpenDialog} />
				</ScrollArea>
			</DialogContent>
		</Dialog>
	)
}
