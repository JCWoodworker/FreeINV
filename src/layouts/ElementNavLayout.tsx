import { Link, Outlet } from "react-router-dom"

interface Props {
	elementName: string
	elementPath: string
}

const ElementNavLayout: React.FC<Props> = ({ elementName, elementPath }) => {
	return (
		// These are just sample links for now ... will be replaced with actual links in the future
		<div>
			<ul>
				<li>
					<Link to={`/${elementPath}/1`}>{elementName} 1</Link>
				</li>
				<li>
					<Link to={`/${elementPath}/2`}>{elementName} 2</Link>
				</li>
				<li>
					<Link to={`/${elementPath}/new`}>New {elementName}</Link>
				</li>
			</ul>
			<Outlet />
		</div>
	)
}

export default ElementNavLayout
