/*
TODO: all "new" pages should open in a modal instead of their own page
this will allow for better UX since the "back" button will work as expected
*/

import { useState, createContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import "./app.scss"

import Navigation from "./navigation/Navigation.tsx"
import Home from "./pages/home/Home.tsx"
import Logout from "./pages/auth/Logout.tsx"
import SignUp from "./pages/auth/SignUp.tsx"
import NotFound from "./pages/not-found/NotFound.tsx"

import UserHome from "./pages/home/UserHome.tsx"
import LocationIndex from "./pages/inventory/01-locations/LocationIndex.tsx"
import LocationShow from "./pages/inventory/01-locations/LocationShow"
import NewLocation from "./pages/inventory/01-locations/NewLocation.tsx"
import RoomShow from "./pages/inventory/02-rooms/RoomShow"
import NewRoom from "./pages/inventory/02-rooms/NewRoom"
import ItemShow from "./pages/inventory/03-items/ItemShow"
import NewItem from "./pages/inventory/03-items/NewItem"

import { UserLocationData } from "./pages/inventory/inventoryTypes.ts"
import { hydrateUserData } from "./utils/hydrateUserData.ts"
import useAuth from "./hooks/useAuth.tsx"
import Login from "./pages/auth/Login.tsx"

import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

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
				image_url: "",
			},
		],
		setUserInventoryData: () => {},
	})

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
})

function App() {
	const { auth, persist } = useAuth()

	const [userInventoryData, setUserInventoryData] = useState<
		UserLocationData[] | undefined
	>(undefined)

	useEffect(() => {
		if (persist) {
			hydrateUserData(auth?.accessToken, setUserInventoryData)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [persist])

	return (
		<UserInventoryDataContext.Provider
			value={{ userInventoryData, setUserInventoryData }}
		>
			<ThemeProvider theme={darkTheme}>
				{!persist ? (
					<>
						<Navigation />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/signup" element={<SignUp />} />
							<Route path="/login" element={<Login />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</>
				) : (
					<>
						<Navigation />
						<Routes>
							<Route path="/" element={<UserHome />} />
							<Route path="/logout" element={<Logout />} />
							<Route path="/my-inventory">
								<Route
									index
									element={
										<LocationIndex userInventoryData={userInventoryData} />
									}
								/>
								<Route path="locations">
									<Route path=":id" element={<LocationShow />} />
									<Route path="new" element={<NewLocation />} />
								</Route>
								<Route path="rooms">
									<Route path=":id" element={<RoomShow />} />
									<Route path="new" element={<NewRoom />} />
								</Route>
								<Route path="items">
									<Route path=":id" element={<ItemShow />} />
									<Route path="new" element={<NewItem />} />
								</Route>
							</Route>
						</Routes>
					</>
				)}
				<CssBaseline />
			</ThemeProvider>
		</UserInventoryDataContext.Provider>
	)
}

export default App
