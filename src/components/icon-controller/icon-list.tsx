import { useCallback, useEffect, useRef, useState } from 'react'

import { Button } from '../ui/button'
import CustomIcon from './custom-icon'

import { useAppContext } from '@/context'

import { iconNames } from '@/constants/icons'

interface Props {
	setOpenDialog: (value: boolean) => void
}

export default function IconList({ setOpenDialog }: Props) {
	const [visibleIcons, setVisibleIcons] = useState<string[]>([])
	const observer = useRef<IntersectionObserver | null>(null)

	const { values, setValues } = useAppContext()

	const lastIconElementRef = useCallback(
		(node: HTMLElement | null) => {
			if (observer.current) observer.current.disconnect()

			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting && visibleIcons.length < iconNames.length) {
					setVisibleIcons(prevIcons => [...prevIcons, ...iconNames.slice(prevIcons.length, prevIcons.length + 20)])
				}
			})

			if (node) observer.current.observe(node)
		},
		[visibleIcons.length, iconNames, setVisibleIcons]
	)

	useEffect(() => {
		if (iconNames.length) setVisibleIcons(iconNames.slice(0, 20))
	}, [iconNames])

	return (
		<div className='grid grid-cols-6 gap-4 py-4'>
			{visibleIcons.map((icon, index) => {
				if (visibleIcons.length === index + 1) {
					return (
						<div
							ref={lastIconElementRef}
							key={icon}
						>
							<Button
								title={icon}
								aria-label={icon}
								variant='ghost'
								className='h-9 w-9 p-1 border shadow-lg'
								onClick={() => {
									setValues({ ...values, icon })
									setOpenDialog(false)
								}}
							>
								<CustomIcon name={icon} />
							</Button>
						</div>
					)
				} else {
					return (
						<Button
							key={icon}
							title={icon}
							aria-label={icon}
							variant='ghost'
							className='h-9 w-9 p-1 border shadow-lg'
							onClick={() => {
								setValues({ ...values, icon })
								setOpenDialog(false)
							}}
						>
							<CustomIcon name={icon} />
						</Button>
					)
				}
			})}
		</div>
	)
}
