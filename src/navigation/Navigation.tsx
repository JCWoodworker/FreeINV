import useAuth from "../hooks/useAuth"
import { loggedInLinks, loggedOutLinks } from "./navLinks"
import { Link } from "react-router-dom"

const Navigation = () => {
	const { persist } = useAuth()

	let links
	if (persist) {
		links = loggedInLinks.map((link) => {
			return (
				<Link
					to={link.path}
					key={link.name}
				>{`${link.name} ${link.icon}`}</Link>
			)
		})
	} else {
		links = loggedOutLinks.map((link) => {
			return (
				<Link
					to={link.path}
					key={link.name}
				>{`${link.name} ${link.icon}`}</Link>
			)
		})
	}

	return <nav>{links}</nav>
}

export default Navigation
