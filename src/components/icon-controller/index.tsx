import React from 'react'
import IconsModal from './icons-modal'
import { Slider } from '../ui/slider'
import ColorPickerController from '../color-picker-controller'
import { useAppContext } from '@/context'

export default function IconControls() {
	const { values, setValues } = useAppContext()

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
					<span className='text-sm text-muted-foreground'>{values.iconSize} px</span>
				</div>

				<Slider
					defaultValue={[values.iconSize]}
					min={40}
					max={500}
					step={1}
					onValueChange={(value: any[]) => setValues({ ...values, iconSize: value[0] })}
				/>
			</div>

			<div className='space-y-2'>
				<div className='w-full flex justify-between gap-4'>
					<label className='font-semibold leading-none tracking-tight'>Border Width</label>
					<span className='text-sm text-muted-foreground'>{values.iconBorder} px</span>
				</div>

				<Slider
					defaultValue={[values.iconBorder]}
					min={1}
					max={4}
					step={1}
					onValueChange={(value: any[]) => setValues({ ...values, iconBorder: value[0] })}
				/>
			</div>

			<div className='space-y-2'>
				<div className='w-full flex justify-between gap-4'>
					<label className='font-semibold leading-none tracking-tight'>Rotate</label>
					<span className='text-sm text-muted-foreground'>{values.iconRotate} °</span>
				</div>

				<Slider
					defaultValue={[values.iconRotate]}
					min={-180}
					max={180}
					step={1}
					onValueChange={(value: any[]) => setValues({ ...values, iconRotate: value[0] })}
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
