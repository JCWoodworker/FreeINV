import "./main.scss"
import { Routes, Route, Link } from "react-router-dom"

import Locations from "./inventory/locations/LocationIndex"
import Rooms from "./inventory/rooms/RoomIndex"
import Items from "./inventory/items/ItemIndex"

import LocationShow from "./inventory/locations/LocationShow"
import RoomShow from "./inventory/rooms/RoomShow"
import ItemShow from "./inventory/items/ItemShow"


function App() {
	return (
		<>
		<nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/signin">Sign In</Link></li>
				<li><Link to="/signup">Sign Up</Link></li>
				<li><Link to="/locations">Locations</Link></li>
				<li><Link to="/rooms">Rooms</Link></li>
				<li><Link to="/items">Items</Link></li>
			</ul>
		</nav>
		<Routes>
			<Route path="/" element={<h1>Home Page</h1>} />
			<Route path="/signin" element={<h1>Sign In Page</h1>} />
			<Route path="/signup" element={<h1>Sign Up Page</h1>} />
			<Route path="/locations" element={<Locations />} />
			<Route path="/locations/:id" element={<LocationShow />} />
			<Route path="/rooms" element={<Rooms />} />
			<Route path="/rooms/:id" element={<RoomShow />} />
			<Route path="/items" element={<Items />} />
			<Route path="/items/:id" element={<ItemShow />} />
			<Route path="*" element={<h1>Not Found</h1>} />
		</Routes>
		</>
	)
}

export default App
