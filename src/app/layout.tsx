import { Metadata } from 'next'

import { Inter } from 'next/font/google'
import Header from '@/components/header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Logo Builder',
	description: ' Create a logo for your brand in seconds. No design skills needed. ',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
