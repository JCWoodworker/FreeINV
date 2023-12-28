import { Route, Routes } from "react-router-dom"

import RoomIndex from "../pages/inventory/rooms/RoomIndex"
import RoomShow from "../pages/inventory/rooms/RoomShow"
import NewRoom from "../pages/inventory/rooms/NewRoom"

import ElementNavLayout from "../layouts/ElementNavLayout"

const ItemRoutes = () => {
	return (
		<>
			<ElementNavLayout elementName="Room" elementPath="rooms" />
			<Routes>
				<Route index element={<RoomIndex />} />
				<Route path=":id" element={<RoomShow />} />
				<Route path="new" element={<NewRoom />} />
			</Routes>
		</>
	)
}

export default ItemRoutes
