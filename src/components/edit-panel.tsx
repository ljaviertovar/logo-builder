'use client'

import { useEffect, useState } from 'react'

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { TooltipProvider } from '@/components/ui/tooltip'

import IconController from './icon-controller'
import BackgroundController from './background-controller'
import MobileNav from './mobile-nav'
import SideNav from '@/components/side-nav'
import Preview from './preview'
import { Image, PencilRuler } from 'lucide-react'

import { cn } from '@/lib/utils'

import { useAppContext } from '@/context'

interface Props {
	defaultLayout: number[] | undefined
	defaultCollapsed?: boolean
	navCollapsedSize: number
}

export default function EditPanel({ defaultLayout = [20, 80], defaultCollapsed = false, navCollapsedSize }: Props) {
	const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
	const [selectedOption, setSelectedOption] = useState('Icon')

	const { values } = useAppContext()

	useEffect(() => {
		if (Object.keys(values).length) {
			localStorage.setItem('logobuilder', JSON.stringify({ ...values }))
		}
	}, [values])

	return (
		<>
			<div className='md:hidden'>
				<MobileNav
					setSelectedOption={setSelectedOption}
					options={[
						{
							id: 1,
							title: 'Icon',
							icon: PencilRuler,
						},
						{
							id: 2,
							title: 'Background',
							icon: Image,
						},
					]}
				/>
				<main className='w-full flex flex-col md:flex-row'>
					{selectedOption === 'Icon' && <IconController />}
					{selectedOption === 'Background' && <BackgroundController />}
					<Preview />
				</main>
			</div>

			<div className='hidden md:block'>
				<TooltipProvider delayDuration={0}>
					<ResizablePanelGroup
						direction='horizontal'
						onLayout={(sizes: number[]) => {
							document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
						}}
						className='h-screen fixed items-stretch'
					>
						<ResizablePanel
							defaultSize={defaultLayout[0]}
							collapsedSize={navCollapsedSize}
							collapsible={true}
							minSize={8}
							maxSize={12}
							onCollapse={() => {
								setIsCollapsed(true)
								document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
							}}
							onExpand={() => {
								setIsCollapsed(false)
								document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
							}}
							className={cn(isCollapsed && 'min-w-[72px] transition-all duration-300 ease-in-out')}
						>
							<SideNav
								isCollapsed={isCollapsed}
								setSelectedOption={setSelectedOption}
								options={[
									{
										id: 1,
										title: 'Icon',
										icon: PencilRuler,
									},
									{
										id: 2,
										title: 'Background',
										icon: Image,
									},
								]}
							/>
						</ResizablePanel>
						<ResizableHandle
							withHandle
							className='border-[1px]'
						/>
						<ResizablePanel defaultSize={defaultLayout[1]}>
							<main className='w-full flex flex-col md:flex-row'>
								{selectedOption === 'Icon' && <IconController />}
								{selectedOption === 'Background' && <BackgroundController />}
								<Preview />
							</main>
						</ResizablePanel>
					</ResizablePanelGroup>
				</TooltipProvider>
			</div>
		</>
	)
}
