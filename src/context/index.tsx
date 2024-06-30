'use client'

import { ContextApp } from '@/types.d'
import { ReactNode, createContext, useContext, useState } from 'react'

const initalState = {
	icon: 'Bug',
	iconSize: 400,
	iconColor: '#000000',
	iconBorder: 1,
	iconRotate: 0,
}

const AppContext = createContext({} as { values: ContextApp; setValues: (values: ContextApp) => void })

export function AppWrapper({ children }: { children: ReactNode }) {
	const [values, setValues] = useState(initalState)

	return <AppContext.Provider value={{ values, setValues }}>{children}</AppContext.Provider>
}

export function useAppContext() {
	return useContext(AppContext)
}
