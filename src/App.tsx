import "./main.scss"
import { Routes, Route, Link } from "react-router-dom"

import Locations from "./pages/inventory/locations/LocationIndex"
import LocationShow from "./pages/inventory/locations/LocationShow"
import NewLocation from "./pages/inventory/locations/NewLocation"

import Rooms from "./pages/inventory/rooms/RoomIndex"
import RoomShow from "./pages/inventory/rooms/RoomShow"
import NewRoom from "./pages/inventory/rooms/NewRoom"

import Items from "./pages/inventory/items/ItemIndex"
import ItemShow from "./pages/inventory/items/ItemShow"
import NewItem from "./pages/inventory/items/NewItem"

import NotFoundPage from "./pages/NotFoundPage"

function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/signin">Sign In</Link>
					</li>
					<li>
						<Link to="/signup">Sign Up</Link>
					</li>
					<li>
						<Link to="/locations">Locations</Link>
					</li>
					<li>
						<Link to="/rooms">Rooms</Link>
					</li>
					<li>
						<Link to="/items">Items</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<h1>Home Page</h1>} />
				<Route path="/signin" element={<h1>Sign In Page</h1>} />
				<Route path="/signup" element={<h1>Sign Up Page</h1>} />

				<Route path="/locations" element={<Locations />}>
					<Route path=":id" element={<LocationShow />} />
					<Route path="new" element={<NewLocation />} />
				</Route>

				<Route path="/rooms" element={<Rooms />}>
					<Route path=":id" element={<RoomShow />} />
					<Route path="new" element={<NewRoom />} />
				</Route>

				<Route path="/items" element={<Items />}>
					<Route path=":id" element={<ItemShow />} />
					<Route path="new" element={<NewItem />} />
				</Route>

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
