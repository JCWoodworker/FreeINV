import { Route, Routes } from "react-router-dom"

import InventoryIndex from "../pages/inventory/InventoryIndex"
import InventoryShow from "../pages/inventory/InventoryShow"
import NewInventory from "../pages/inventory/NewInventory"

import ElementNavLayout from "../layouts/ElementNavLayout"

const LocationRoutes = () => {
	return (
		<>
			<ElementNavLayout elementName="Location" elementPath="locations" />
			<Routes>
				<Route index element={<InventoryIndex elementName="Location" />} />
				<Route path=":id" element={<InventoryShow elementName="Location" />} />
				<Route path="new" element={<NewInventory elementName="Location" />} />
			</Routes>
		</>
	)
}

export default LocationRoutes
