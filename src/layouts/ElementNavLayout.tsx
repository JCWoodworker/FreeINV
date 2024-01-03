import { Link, Outlet } from "react-router-dom"
import * as testElementData from "../routes/testElementData"

interface Props {
	elementPath: string
}
const ElementNavLayout: React.FC<Props> = ({ elementPath }) => {

	// This is using test data for now
	// TODO: fetch from backend and save to state
	let elementListData = null
	if (elementPath === "locations") {
		elementListData = testElementData.locations
	} else if (elementPath === "rooms") {
		elementListData = testElementData.rooms
	} else if (elementPath === "items") {
		elementListData = testElementData.items
	} 

	return (
		<div>
			<Outlet />
			<ul>
				{elementListData?.map((element) => (
					<li key={element.id}>
						<Link to={`/${elementPath}/${element.id}`} state={element}>{element.name}</Link>
					</li>
				))}
				<li>
					<Link to={`/${elementPath}/new`}>+</Link>
				</li>
			</ul>
		</div>
	)
}

export default ElementNavLayout
