import { useState, createContext } from "react"
import { Routes, Route } from "react-router-dom"
import "./app.scss"

import Navigation from "./navigation/Navigation.tsx"
import Home from "./pages/home/Home.tsx"
import Login from "./pages/auth/Login.tsx"
import Logout from "./pages/auth/Logout.tsx"
import NotFound from "./pages/not-found/NotFound.tsx"

import UserHome from "./pages/users/UserHome.tsx"
// import LocationIndex from "./pages/inventory/locations/LocationIndex"
// import LocationShow from "./pages/inventory/locations/LocationShow"
// import NewLocation from "./pages/inventory/locations/NewLocation"
// import RoomShow from "./pages/inventory/rooms/RoomShow"
// import NewRoom from "./pages/inventory/rooms/NewRoom"
// import ItemShow from "./pages/inventory/items/ItemShow"
// import NewItem from "./pages/inventory/items/NewItem"

import { UserLocationData } from "./pages/inventory/inventoryTypes.ts"
import useAuth from "./hooks/useAuth.tsx"

interface UserInventoryDataContextInterface {
	userInventoryData: UserLocationData[] | undefined
	setUserInventoryData: (value: UserLocationData[] | undefined) => void
}

export const UserInventoryDataContext =
	createContext<UserInventoryDataContextInterface>({
		userInventoryData: [
			{
				id: 0,
				name: "Test Location",
				description: "Test location",
				type: "location",
				rooms: [],
			},
		],
		setUserInventoryData: () => {},
	})

function App() {
	const { auth, persist } = useAuth()
	console.log(JSON.stringify(auth))

	const [userInventoryData, setUserInventoryData] = useState<
		UserLocationData[] | undefined
	>(undefined)

	// useEffect(() => {
	// 	if (persist) {
	// 		hydrateUserData(auth?.accessToken, setUserInventoryData)
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [persist])

	return (
		<UserInventoryDataContext.Provider
			value={{ userInventoryData, setUserInventoryData }}
		>
			{!persist ? (
				<>
					<Navigation />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						{/* <Route path="/signup" element={<SignUp />} /> */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</>
			) : (
				<>
					<Navigation />
					<Routes>
						<Route path="/" element={<UserHome />} />
						<Route path="/logout" element={<Logout />} />
						{/* <Route path="/my-inventory">
							<Route
								index
								element={
									<LocationIndex userInventoryData={userInventoryData} />
								}
							/>
							<Route path="locations/:id" element={<LocationShow />} />
							<Route path="locations/new" element={<NewLocation />} />
						</Route>
						<Route path="rooms">
							<Route path=":id" element={<RoomShow />} />
							<Route path="new" element={<NewRoom />} />
						</Route>
						<Route path="items">
							<Route path=":id" element={<ItemShow />} />
							<Route path="new" element={<NewItem />} />
						</Route> */}
					</Routes>
				</>
			)}
		</UserInventoryDataContext.Provider>
	)
}

export default App
