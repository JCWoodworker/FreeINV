import "./main.scss"
import { Routes, Route, Link } from "react-router-dom"

import NotFoundPage from "./pages/NotFoundPage"

import LocationRoutes from "./routes/LocationsRoute"
import RoomRoutes from "./routes/RoomsRoute"
import ItemRoutes from "./routes/ItemsRoute"

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
				</ul>
			</nav>
			<nav>
				<ul>
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

				<Route path="/locations/*" element={<LocationRoutes />} />
				<Route path="/rooms/*" element={<RoomRoutes />} />
				<Route path="/items/*" element={<ItemRoutes />} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
