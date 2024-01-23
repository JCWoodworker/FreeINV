import { TopNavLink } from "./links"
import { NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"

interface Props {
	navLinkList: TopNavLink[]
}

const TopNavLinks: React.FC<Props> = ({ navLinkList }) => {
	return (
		<Nav
			variant="pills"
			className="top-nav-links mt-1 pb-1 pt-1 d-flex flex-row justify-content-center align-items-center"
		>
			{navLinkList.map((link) => (
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
