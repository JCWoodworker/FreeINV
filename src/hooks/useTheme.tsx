import { useContext } from "react"
import { DarkModeContext } from "../context/CustomThemeProvider"
const useTheme = () => {
	const themeContext = useContext(DarkModeContext)
	const { darkMode, setDarkMode } = themeContext
	return { darkMode, setDarkMode }
}

export default useTheme
