import { icons } from 'lucide-react'

interface Props {
	name: string
	color?: string
	size?: number
	rotate?: number
	strokeWidth?: number
}

export default function CustomIcon({ name, color = 'currentColor', size = 24, rotate = 0, strokeWidth = 1 }: Props) {
	const LucideIcon = icons[name]
	if (!LucideIcon) return null

	return (
		<LucideIcon
			size={size}
			color={color}
			strokeWidth={strokeWidth}
			style={{ transform: `rotate(${rotate}deg)` }}
		/>
	)
}
