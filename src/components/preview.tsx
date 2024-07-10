import { useRef } from 'react'
import html2canvas from 'html2canvas-pro'
import { Download } from 'lucide-react'

import { Button } from './ui/button'
import CustomIcon from './icon-controller/custom-icon'

import { useAppContext } from '@/context'

import Styles from '../styles/patterns.module.css'

export default function Preview() {
	const { values } = useAppContext()
	const { icon, iconSize, iconColor, iconBorderWidth, iconRotate, bgColor, bgRounded, bgPadding } = values

	const divRef = useRef<HTMLDivElement | null>(null)

	const handleDownloadImage = () => {
		const downloadArea = divRef.current

		html2canvas(downloadArea as HTMLDivElement, {
			backgroundColor: null,
		}).then(canvas => {
			const pngImage = canvas.toDataURL('image/png')
			const downloadLink = document.createElement('a')
			downloadLink.href = pngImage
			downloadLink.download = 'logobuilder.png'
			downloadLink.click()
		})
	}

	return (
		<div className={`flex-1 p-4  ${Styles.patternDotsMd}`}>
			<div className='w-full flex justify-end'>
				<Button
					size={'sm'}
					className='flex gap-2 items-center'
					onClick={() => handleDownloadImage()}
				>
					<Download
						strokeWidth={2}
						className='w-4 h-4'
					/>{' '}
					Download
				</Button>
			</div>
			<div className='grid place-content-center h-[calc(100%-52px)]'>
				<div className='bg-white border-2 hover:border-gray-300'>
					<div
						ref={divRef}
						id='download-area'
						className='h-[500px] w-[500px]'
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
								<span style={{ transform: `rotate(${iconRotate}deg)` }}>
									<CustomIcon
										name={icon}
										size={iconSize}
										color={iconColor}
										strokeWidth={iconBorderWidth}
									/>
								</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
