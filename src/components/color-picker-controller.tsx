import { useState } from 'react'

import ColorPicker from 'react-best-gradient-color-picker'

interface Props {
	hidecontrols?: boolean
	hidepresets?: boolean
}

export default function ColorPickerController({ hidecontrols = true, hidepresets = true }: Props) {
	const [color, setColor] = useState('#ff0000')

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
