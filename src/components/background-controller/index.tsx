import { ScrollArea } from '../ui/scroll-area'
import { Slider } from '../ui/slider'
import ColorPickerController from './color-picker'

import { useAppContext } from '@/context'

export default function BackgroundController() {
	const { values, setValues } = useAppContext()

	return (
		<ScrollArea className='h-[calc(100vh-80px)]'>
			<section className='p-4 w-full md:w-[340px] border-r-2 space-y-6'>
				<h2 className='font-semibold tracking-tight text-xl'>Customize your Background</h2>

				<div className='space-y-2'>
					<div className='w-full flex justify-between gap-4'>
						<label className='font-semibold leading-none tracking-tight'>Rounded</label>
						<span className='text-sm text-muted-foreground'>{values.bgRounded} px</span>
					</div>

					<Slider
						defaultValue={[values.bgRounded]}
						min={0}
						max={250}
						step={1}
						onValueChange={(value: any[]) => setValues({ ...values, bgRounded: value[0] })}
					/>
				</div>

				<div className='space-y-2'>
					<div className='w-full flex justify-between gap-4'>
						<label className='font-semibold leading-none tracking-tight'>Padding</label>
						<span className='text-sm text-muted-foreground'>{values.bgPadding} px</span>
					</div>

					<Slider
						defaultValue={[values.bgPadding]}
						min={0}
						max={100}
						step={1}
						onValueChange={(value: any[]) => setValues({ ...values, bgPadding: value[0] })}
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
			</section>
		</ScrollArea>
	)
}
