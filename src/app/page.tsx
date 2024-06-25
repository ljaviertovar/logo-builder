import { cookies } from 'next/headers'

import EditPanel from '@/components/edit-panel'

export default function HomePage() {
	const layout = cookies().get('react-resizable-panels:layout')
	const collapsed = cookies().get('react-resizable-panels:collapsed')

	const defaultLayout = layout ? JSON.parse(layout.value) : undefined
	const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

	return (
		<div className='flex flex-col'>
			<EditPanel
				defaultLayout={defaultLayout}
				defaultCollapsed={defaultCollapsed}
				navCollapsedSize={4}
			/>
		</div>
	)
}
