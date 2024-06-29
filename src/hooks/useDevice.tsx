import { useEffect, useState } from 'react'

export function useDevice() {
	const [width, setWidth] = useState<number>(0)

	function handleWindowSizeChange() {
		setWidth(window.innerWidth)
	}

	useEffect(() => {
		handleWindowSizeChange()
	}, [])

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange)
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange)
		}
	}, [])

	const isMobile = width <= 768

	return { isMobile }
}
