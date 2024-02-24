import { useState, createContext, useEffect } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

interface Props {
	children: JSX.Element
}

export interface ThemeContext {
	darkMode: boolean
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const DarkModeContext = createContext<ThemeContext>({
	darkMode: false,
	setDarkMode: () => {},
})

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

const lightTheme = createTheme({
	palette: {
		mode: "light",
	},
})

export const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(() => {
		const persistedDarkMode = localStorage.getItem("darkMode")
		if (persistedDarkMode) {
			setDarkMode(JSON.parse(persistedDarkMode))
		}
	}, [darkMode, setDarkMode])


	return (
		<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</DarkModeContext.Provider>
	)
}

export default CustomThemeProvider
