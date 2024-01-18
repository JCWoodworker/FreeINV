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
			className="justify-content-center"
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
