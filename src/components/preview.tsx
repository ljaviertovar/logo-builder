import Styles from '../styles/patterns.module.css'

export default function Preview() {
	return (
		<div className={`flex-1 p-4  ${Styles.patternDotsMd}`}>
			<div className='grid place-content-center h-full'>
				<div className='h-[400px] w-[400px] bg-white border'>d</div>
			</div>
		</div>
	)
}
