import { Route, Routes } from "react-router-dom"

import InventoryIndex from "../pages/inventory/InventoryIndex"
import InventoryShow from "../pages/inventory/InventoryShow"
import NewInventory from "../pages/inventory/NewInventory"

import ElementNavLayout from "../layouts/ElementNavLayout"

const ItemRoutes = () => {
	return (
		<>
			<ElementNavLayout elementName="Item" elementPath="items" />
			<Routes>
				<Route index element={<InventoryIndex elementName="Item" />} />
				<Route path=":id" element={<InventoryShow elementName="Item" />} />
				<Route path="new" element={<NewInventory elementName="Item" />} />
			</Routes>
		</>
	)
}

export default ItemRoutes
