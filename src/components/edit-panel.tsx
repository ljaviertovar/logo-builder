'use client'

import Sidenav from '@/components/sidenav'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Image, PencilRuler } from 'lucide-react'
import { useState } from 'react'
import Preview from './preview'
import IconControls from './icon-controls'
import BackgroundControls from './background-controls'

interface Props {
	defaultLayout: number[] | undefined
	defaultCollapsed?: boolean
	navCollapsedSize: number
}

export default function EditPanel({ defaultLayout = [20, 80], defaultCollapsed = false, navCollapsedSize }: Props) {
	const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
	const [selectedOption, setSelectedOption] = useState('Icon')

	return (
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
					maxSize={15}
					onCollapse={() => {
						setIsCollapsed(true)
						document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
					}}
					onExpand={() => {
						setIsCollapsed(false)
						document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
					}}
					className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
				>
					<Sidenav
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
						{selectedOption === 'Icon' && <IconControls />}
						{selectedOption === 'Background' && <BackgroundControls />}
						<Preview />
					</main>
				</ResizablePanel>
			</ResizablePanelGroup>
		</TooltipProvider>
	)
}
