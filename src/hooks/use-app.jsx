"use client"
import { createContext, useContext, useState } from "react"

const _defaultValue = {
	options: {
		roi_percentage: 0.09
	}
}
const App = createContext(_defaultValue)

const AppProvider = ({ defaultValue = _defaultValue, children }) => {
	const [value, setValue] = useState(defaultValue)

	return (
		<App.Provider
			value={{
				options: value.options
			}}
		>
			{children}
		</App.Provider>
	)
}

const useApp = () => useContext(App)

export { App, AppProvider, useApp }
