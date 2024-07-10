import { ScrollArea } from '../ui/scroll-area'
import { Slider } from '../ui/slider'

import IconsModal from './icons-modal'
import ColorPickerController from './color-picker'

import { useAppContext } from '@/context'

export default function IconControls() {
	const { values, setValues } = useAppContext()

	const FallbackSlider = () => {
		return (
			<Slider
				defaultValue={[0]}
				min={40}
				max={500}
				step={1}
			/>
		)
	}

	return (
		<ScrollArea className='h-[calc(100vh-80px)]'>
			<section className='p-4 w-full md:w-[340px] border-r-2 space-y-6 '>
				<h2 className='font-semibold tracking-tight text-xl'>Customize your Icon</h2>

				<div className='space-y-2'>
					<div className='w-full flex justify-between gap-4'>
						<label className='font-semibold leading-none tracking-tight'>Icon</label>
						<span className='text-sm text-muted-foreground'>{values.icon}</span>
					</div>
					<IconsModal />
				</div>

				<div className='space-y-2'>
					<div className='w-full flex justify-between gap-4'>
						<label className='font-semibold leading-none tracking-tight'>Size</label>
						<span className='text-sm text-muted-foreground'>{values.iconSize} px</span>
					</div>
					{Object.keys(values).length ? (
						<Slider
							defaultValue={[values.iconSize]}
							min={40}
							max={500}
							step={1}
							onValueChange={(value: any[]) => setValues({ ...values, iconSize: value[0] })}
						/>
					) : (
						<FallbackSlider />
					)}
				</div>

				<div className='space-y-2'>
					<div className='w-full flex justify-between gap-4'>
						<label className='font-semibold leading-none tracking-tight'>Border Width</label>
						<span className='text-sm text-muted-foreground'>{values.iconBorderWidth} px</span>
					</div>
					{Object.keys(values).length ? (
						<Slider
							defaultValue={[values.iconBorderWidth]}
							min={1}
							max={4}
							step={1}
							onValueChange={(value: any[]) => setValues({ ...values, iconBorderWidth: value[0] })}
						/>
					) : (
						<FallbackSlider />
					)}
				</div>

				<div className='space-y-2'>
					<div className='w-full flex justify-between gap-4'>
						<label className='font-semibold leading-none tracking-tight'>Rotate</label>
						<span className='text-sm text-muted-foreground'>{values.iconRotate} °</span>
					</div>

					{Object.keys(values).length ? (
						<Slider
							defaultValue={[values.iconRotate]}
							min={-180}
							max={180}
							step={1}
							onValueChange={(value: any[]) => setValues({ ...values, iconRotate: value[0] })}
						/>
					) : (
						<FallbackSlider />
					)}
				</div>

				<div className='space-y-2'>
					<div className='w-full flex justify-between gap-4'>
						<label className='font-semibold leading-none tracking-tight'>Color</label>
					</div>

					<ColorPickerController />
				</div>
			</section>
		</ScrollArea>
	)
}
