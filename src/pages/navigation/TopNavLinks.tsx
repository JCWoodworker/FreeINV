import { TopNavLink } from "./links"
import { NavLink } from "react-router-dom"

interface Props {
	navLinkList: TopNavLink[]
}

const TopNavLinks: React.FC<Props> = ({ navLinkList }) => {
	return (
		<nav>
			<ul className="top-nav-link-list">
				{navLinkList.map((link) => (
					<li key={link.path}>
						<NavLink to={link.path}>
							{({ isActive }) => {
								return isActive ? `${link.name} ${link.icon}` : link.name
							}}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default TopNavLinks
