import { Route, Routes } from "react-router-dom"

import InventoryIndex from "../pages/inventory/InventoryIndex"
import InventoryShow from "../pages/inventory/InventoryShow"
import NewInventory from "../pages/inventory/NewInventory"

interface Props {
	elementName: string
	elementPath: string
}
const ElementRoutes: React.FC<Props> = ({ elementName, elementPath }) => {
	return (
		<>
			<Routes>
				<Route index element={<InventoryIndex elementPath={elementPath} />} />
				<Route path=":id" element={<InventoryShow />} />
				<Route
					path="new"
					element={<NewInventory elementName={elementName} />}
				/>
			</Routes>
		</>
	)
}

export default ElementRoutes
