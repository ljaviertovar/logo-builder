import { useAppContext } from '@/context'
import { useEffect, useState } from 'react'

import ColorPicker from 'react-best-gradient-color-picker'

interface Props {
	hidecontrols?: boolean
	hidepresets?: boolean
}

export default function ColorPickerController({ hidecontrols = true, hidepresets = true }: Props) {
	const { values, setValues } = useAppContext()

	const [color, setColor] = useState(values.iconColor)

	useEffect(() => {
		setValues({ ...values, iconColor: color })
	}, [color])

	return (
		<div className='flex '>
			<ColorPicker
				value={color}
				onChange={setColor}
				hideControls={hidecontrols}
				hidePresets={hidepresets}
			/>
		</div>
	)
}
