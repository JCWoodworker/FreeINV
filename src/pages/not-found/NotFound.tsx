import { useEffect } from "react"
import { useNavigate } from "react-router"

const NotFound = () => {
	const navigate = useNavigate()

	const navigateHome = () => {
		navigate("/")
	}

	useEffect(() => {
		setTimeout(navigateHome, 1500)
	})

	return (
		<div>
			<h1>Not Found</h1>
			<p>Auto-navigating home in a second</p>
		</div>
	)
}

export default NotFound
