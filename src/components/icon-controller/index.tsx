import React from 'react'
import IconsModal from './icons-modal'
import { Slider } from '../ui/slider'
import ColorPickerController from '../color-picker-controller'

export default function IconControls() {
	return (
		<div className='p-4 w-full md:w-[340px] border-r-2 space-y-6 overflow-hidden overflow-y-auto h-[calc(100vh-80px)]'>
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

			<div className='space-y-2'>
				<div className='w-full flex justify-between gap-4'>
					<label className='font-semibold leading-none tracking-tight'>Border Width</label>
					<span className='text-sm text-muted-foreground'>1 px</span>
				</div>

				<Slider
					defaultValue={[0]}
					min={1}
					max={4}
					step={1}
				/>
			</div>

			<div className='space-y-2'>
				<div className='w-full flex justify-between gap-4'>
					<label className='font-semibold leading-none tracking-tight'>Rotate</label>
					<span className='text-sm text-muted-foreground'>10 °</span>
				</div>

				<Slider
					defaultValue={[0]}
					min={-180}
					max={180}
					step={1}
				/>
			</div>

			<div className='space-y-2'>
				<div className='w-full flex justify-between gap-4'>
					<label className='font-semibold leading-none tracking-tight'>Color</label>
				</div>

				<ColorPickerController />
			</div>
		</div>
	)
}