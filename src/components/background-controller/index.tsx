import ColorPickerController from '../color-picker-controller'
import { Slider } from '../ui/slider'

export default function BackgroundController() {
	return (
		<div className='p-4 w-full md:w-[340px] border-r-2 space-y-6 overflow-hidden overflow-y-auto h-[calc(100vh-80px)]'>
			<h2 className='font-semibold tracking-tight text-xl'>Customize your Background</h2>

			<div className='space-y-2'>
				<div className='w-full flex justify-between gap-4'>
					<label className='font-semibold leading-none tracking-tight'>Rounded</label>
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
					<label className='font-semibold leading-none tracking-tight'>Padding</label>
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
					<label className='font-semibold leading-none tracking-tight'>Color</label>
				</div>

				<ColorPickerController
					hidecontrols={false}
					hidepresets={false}
				/>
			</div>
		</div>
	)
}
