import { LucideIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

interface Props {
	isCollapsed: boolean
	links: {
		id: number
		title: string
		icon: LucideIcon
		variant: 'default' | 'secondary'
	}[]
}

export default function Sidenav({ isCollapsed, links }: Props) {
	return (
		<div
			data-collapsed={isCollapsed}
			className='group flex flex-col gap-4'
		>
			<nav className='grid gap-2 p-4 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:p-4'>
				{links.map(link =>
					isCollapsed ? (
						<Tooltip
							key={link.id}
							delayDuration={0}
						>
							<TooltipTrigger asChild>
								<Button
									className={cn(
										buttonVariants({ variant: link.variant, size: 'sm' }),
										'hover:bg-amber-500/90',
										link.variant === 'default' && 'bg-amber-500 text-foreground',
										'justify-start'
									)}
								>
									<link.icon className='h-4 w-4' />
									<span className='sr-only'>{link.title}</span>
								</Button>
							</TooltipTrigger>
							<TooltipContent
								side='right'
								className='flex items-center gap-4'
							>
								{link.title}
							</TooltipContent>
						</Tooltip>
					) : (
						<Button
							key={link.id}
							className={cn(
								buttonVariants({ variant: link.variant, size: 'sm' }),
								'hover:bg-amber-500/90',
								link.variant === 'default' && 'bg-amber-500 text-foreground',
								'justify-start'
							)}
						>
							<link.icon className='mr-2 h-4 w-4' />
							{link.title}
						</Button>
					)
				)}
			</nav>
		</div>
	)
}
