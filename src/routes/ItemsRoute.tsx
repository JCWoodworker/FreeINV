import { Route, Routes } from "react-router-dom"

import ItemIndex from "../pages/inventory/items/ItemIndex"
import ItemShow from "../pages/inventory/items/ItemShow"
import NewItem from "../pages/inventory/items/NewItem"

import ElementNavLayout from "../layouts/ElementNavLayout"

const ItemRoutes = () => {
	return (
		<>
			<ElementNavLayout elementName="Item" elementPath="items" />
			<Routes>
				<Route index element={<ItemIndex />} />
				<Route path=":id" element={<ItemShow />} />
				<Route path="new" element={<NewItem />} />
			</Routes>
		</>
	)
}

export default ItemRoutes
