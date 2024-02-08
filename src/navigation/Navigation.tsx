import { Nav } from "react-bootstrap"
import useAuth from "../hooks/useAuth"
import { loggedInLinks, loggedOutLinks } from "./navLinks"

const Navigation = () => {
	const { persist } = useAuth()

	let links
	if (persist) {
		links = loggedInLinks.map((link) => {
			return (
				<Nav key={link.name}>
					<Nav.Item>
						<Nav.Link href={link.path}>{`${link.name} ${link.icon}`}</Nav.Link>
					</Nav.Item>
				</Nav>
			)
		})
	} else {
		links = loggedOutLinks.map((link) => {
			return (
				<Nav key={link.name}>
					<Nav.Item>
						<Nav.Link href={link.path}>{`${link.name} ${link.icon}`}</Nav.Link>
					</Nav.Item>
				</Nav>
			)
		})
	}

	return (
		<div className="top-nav p-2 d-flex flex-row justify-content-center align-items-center">
			{links}
		</div>
	)
}

export default Navigation
