import { Switch } from "@mui/material"
import useTheme from "../hooks/useTheme"

const DayNightSwitch = () => {
	const { darkMode, setDarkMode } = useTheme()

	const handleSwitchChange = () => {
		localStorage.setItem("darkMode", JSON.stringify(!darkMode))
		setDarkMode(!darkMode)
	}

	return (
		<>
			🌞
			<Switch onChange={handleSwitchChange} checked={darkMode} id="dark-mode-switch"/>
			🌚
		</>
	)
}

export default DayNightSwitch
