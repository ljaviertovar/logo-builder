import React from 'react'
import IconsModal from './icons-modal'
import { Slider } from '../ui/slider'

export default function IconControls() {
	return (
		<div className='p-4 w-full md:w-[280px] border-r-2 space-y-6'>
			<h2 className='font-semibold tracking-tight text-xl'>Customize your Icon</h2>

			<div className='space-y-2'>
				<div className='w-full flex justify-between gap-4'>
					<label className='font-semibold leading-none tracking-tight'>Icon</label>
					<span className='text-sm text-muted-foreground'>Icon Name</span>
				</div>
				<IconsModal />
			</div>

			<div className='space-y-2'>
				<div className='w-full flex justify-between gap-4'>
					<label className='font-semibold leading-none tracking-tight'>Size</label>
					<span className='text-sm text-muted-foreground'>10 px</span>
				</div>

				<Slider
					defaultValue={[100]}
					min={40}
					max={500}
					step={1}
				/>
			</div>
		</div>
	)
}
