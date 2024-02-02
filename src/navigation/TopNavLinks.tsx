import { signedInTopNavLinks, signedOutTopNavLinks } from "./links"
import { NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"
import useAuth from "../hooks/useAuth"

const TopNavLinks: React.FC = () => {
	const {persist} = useAuth()
	const linkList = persist ? signedInTopNavLinks : signedOutTopNavLinks
	return (
		<Nav
			variant="pills"
			className="top-nav-links mt-1 pb-1 pt-1 d-flex flex-row justify-content-center align-items-center"
		>
			{linkList.map((link) => (
				<Nav.Item key={link.path}>
					<Nav.Link as={NavLink} to={link.path}>
						{link.name} {link.icon}
					</Nav.Link>
				</Nav.Item>
			))}
		</Nav>
	)
}

export default TopNavLinks
