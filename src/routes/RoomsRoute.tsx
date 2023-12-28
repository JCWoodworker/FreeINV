import { Route, Routes } from "react-router-dom"

import InventoryIndex from "../pages/inventory/InventoryIndex"
import InventoryShow from "../pages/inventory/InventoryShow"
import NewInventory from "../pages/inventory/NewInventory"

import ElementNavLayout from "../layouts/ElementNavLayout"

const RoomRoutes = () => {
	return (
		<>
			<ElementNavLayout elementName="Room" elementPath="rooms" />
			<Routes>
				<Route index element={<InventoryIndex elementName="Room" />} />
				<Route path=":id" element={<InventoryShow elementName="Room" />} />
				<Route path="new" element={<NewInventory elementName="Room" />} />
			</Routes>
		</>
	)
}

export default RoomRoutes
