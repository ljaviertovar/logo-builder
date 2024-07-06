import { useEffect, useState } from 'react'

export function useDevice() {
	const [width, setWidth] = useState<number | null>(null)

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

	const isMobile = width ? width <= 768 : width

	return { isMobile }
}
