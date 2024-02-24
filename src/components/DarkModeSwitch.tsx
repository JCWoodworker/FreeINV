import { Switch } from "@mui/material"
import useTheme from "../hooks/useTheme"

const DarkModeSwitch = () => {
	const { darkMode, setDarkMode } = useTheme()

	const handleSwitchChange = () => {
		localStorage.setItem("darkMode", JSON.stringify(!darkMode))
		setDarkMode(!darkMode)
	}

	return (
		<>
			☀️<Switch onChange={handleSwitchChange} checked={darkMode} id="dark-mode-switch"/>🌙
		</>
	)
}

export default DarkModeSwitch
