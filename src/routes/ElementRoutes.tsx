import { Route, Routes } from "react-router-dom"

import InventoryIndex from "../pages/inventory/InventoryIndex"
import InventoryShow from "../pages/inventory/InventoryShow"
import NewInventory from "../pages/inventory/NewInventory"

import ElementNavLayout from "../layouts/ElementNavLayout"

interface Props {
  elementName: string
  elementPath: string
}
const ElementRoutes: React.FC<Props> = ({ elementName, elementPath }) => {
	return (
		<>
			<ElementNavLayout elementName={elementName} elementPath={elementPath} />
			<Routes>
				<Route index element={<InventoryIndex elementName={elementName} />} />
				<Route path=":id" element={<InventoryShow elementName={elementName} />} />
				<Route path="new" element={<NewInventory elementName={elementName} />} />
			</Routes>
		</>
	)
}

export default ElementRoutes
