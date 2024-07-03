'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { ContextApp } from '@/types.d'

const initalState = {
	icon: 'Shell',
	iconSize: 420,
	iconColor: '#000000',
	iconBorderWidth: 1,
	iconRotate: 0,
	bgRounded: 250,
	bgPadding: 0,
	bgColor: '#f59e0b',
}

const AppContext = createContext({} as { values: ContextApp; setValues: (values: ContextApp) => void })

export function AppWrapper({ children }: { children: ReactNode }) {
	const [values, setValues] = useState({} as ContextApp)

	useEffect(() => {
		const saved = localStorage.getItem('logobuilder')
		if (saved) {
			setValues(JSON.parse(saved))
		} else {
			setValues(initalState)
		}
	}, [])

	return <AppContext.Provider value={{ values, setValues }}>{children}</AppContext.Provider>
}

export function useAppContext() {
	return useContext(AppContext)
}
