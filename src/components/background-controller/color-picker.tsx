import { useEffect, useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'

import { useAppContext } from '@/context'

interface Props {
	hidecontrols?: boolean
	hidepresets?: boolean
}

export default function ColorPickerController({ hidecontrols = true, hidepresets = true }: Props) {
	const { values, setValues } = useAppContext()

	const [color, setColor] = useState(values.bgColor)

	useEffect(() => {
		setValues({ ...values, bgColor: color })
	}, [color])

	return (
		<ColorPicker
			value={color}
			onChange={setColor}
			hideControls={hidecontrols}
			hidePresets={hidepresets}
		/>
	)
}
