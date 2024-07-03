import { icons } from 'lucide-react'

import { useAppContext } from '@/context'

import Styles from '../styles/patterns.module.css'

export default function Preview() {
	const { values } = useAppContext()
	const { icon, iconSize, iconColor, iconBorderWidth, iconRotate, bgColor, bgRounded, bgPadding } = values

	const Icon = ({ name, color, size, strokeWidth }: any) => {
		const LucideIcon = icons[name]
		if (!LucideIcon) return null

		return (
			<LucideIcon
				size={size}
				color={color}
				strokeWidth={strokeWidth}
				style={{ transform: `rotate(${iconRotate}deg)` }}
			/>
		)
	}

	return (
		<div className={`flex-1 p-4  ${Styles.patternDotsMd}`}>
			<div className='grid place-content-center h-full'>
				<div
					className='h-[500px] w-[500px] bg-white border'
					style={{
						padding: `${bgPadding}px`,
					}}
				>
					{!Object.keys(values).length ? (
						<span>Loading</span>
					) : (
						<div
							className='w-full h-full grid place-content-center'
							style={{
								background: bgColor,
								borderRadius: `${bgRounded}px`,
								padding: `${bgPadding}px`,
							}}
						>
							<Icon
								name={icon}
								size={iconSize}
								color={iconColor}
								strokeWidth={iconBorderWidth}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
