import CustomIcon from './icon-controller/custom-icon'

import { useAppContext } from '@/context'

import Styles from '../styles/patterns.module.css'

export default function Preview() {
	const { values } = useAppContext()
	const { icon, iconSize, iconColor, iconBorderWidth, iconRotate, bgColor, bgRounded, bgPadding } = values

	return (
		<div className={`flex-1 p-4  ${Styles.patternDotsMd}`}>
			<div className='grid place-content-center h-full'>
				<div
					className='h-[500px] w-[500px] bg-white border-2 hover:border-gray-300'
					style={{
						padding: `${bgPadding}px`,
					}}
				>
					{!Object.keys(values).length ? (
						<div className='animate-pulse flex justify-center items-center h-full w-full bg-gray-200'>
							<div className='animate-pulse h-4/5 w-4/5  rounded-full bg-gray-300' />
						</div>
					) : (
						<div
							className='w-full h-full grid place-content-center'
							style={{
								background: bgColor,
								borderRadius: `${bgRounded}px`,
								padding: `${bgPadding}px`,
							}}
						>
							<CustomIcon
								name={icon}
								size={iconSize}
								color={iconColor}
								rotate={iconRotate}
								strokeWidth={iconBorderWidth}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
