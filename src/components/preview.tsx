import { Bug } from 'lucide-react'
import Styles from '../styles/patterns.module.css'

interface Props {
	size: number
	color: string
	borderWidth: number
	rotate: number
}

export default function Preview({ size, color, borderWidth, rotate }: Props) {
	return (
		<div className={`flex-1 p-4  ${Styles.patternDotsMd}`}>
			<div className='grid place-content-center h-full'>
				<div className='h-[500px] w-[500px] bg-white border'>
					<div className='w-full h-full grid place-content-center'>
						<Bug
							size={size}
							color={color}
							strokeWidth={borderWidth}
							style={{ transform: `rotate(${rotate}deg)` }}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
