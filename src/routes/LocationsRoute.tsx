import { Route, Routes } from "react-router-dom"

import LocationIndex from "../pages/inventory/locations/LocationIndex"
import LocationShow from "../pages/inventory/locations/LocationShow"
import NewLocation from "../pages/inventory/locations/NewLocation"

import ElementNavLayout from "../layouts/ElementNavLayout"

const ItemRoutes = () => {
	return (
		<>
			<ElementNavLayout elementName="Location" elementPath="locations" />
			<Routes>
				<Route index element={<LocationIndex />} />
				<Route path=":id" element={<LocationShow />} />
				<Route path="new" element={<NewLocation />} />
			</Routes>
		</>
	)
}

export default ItemRoutes
