import { useEffect, useState, createContext } from "react"
import { Routes, Route } from "react-router-dom"
import { getBackendUrl } from "./config/getBackendUrl.ts"
import "./app.scss"

import TopNavLinks from "./navigation/TopNavLinks.tsx"
import Home from "./pages/home/Home"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import SignOut from "./pages/auth/SignOut.tsx"
import NotFoundPage from "./pages/not-found/NotFound"

import LocationIndex from "./pages/inventory/locations/LocationIndex.tsx"
import LocationShow from "./pages/inventory/locations/LocationShow.tsx"
import NewLocation from "./pages/inventory/locations/NewLocation.tsx"
import RoomShow from "./pages/inventory/rooms/RoomShow.tsx"
import NewRoom from "./pages/inventory/rooms/NewRoom.tsx"
import ItemShow from "./pages/inventory/items/ItemShow.tsx"
import NewItem from "./pages/inventory/items/NewItem.tsx"

// import { fakeInventoryData } from "./pages/inventory/fakeInventoryData.ts"
import { UserLocationData } from "./pages/inventory/inventoryTypes.ts"
import { attemptTokenRefresh } from "./utils/attemptRefreshToken.ts"

import {
	signedOutTopNavLinks,
	signedInTopNavLinks,
} from "./navigation/links.ts"

export interface LoggedInUser {
	id: number | undefined
	email: string | undefined
	inventory: UserLocationData[]
}

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
	const [backendUrl, setBackendUrl] = useState("")
	const [user, setUser] = useState<LoggedInUser>({
		id: undefined,
		email: undefined,
		inventory: [],
	})
	const [showUserNavLinks, setShowUserNavLinks] = useState(false)

	// Testing this with fake data for now
	const [userInventoryData, setUserInventoryData] = useState<
		UserLocationData[] | undefined
	>(undefined)

	// const checkForLoggedInUser = async () => {
	// 	const loggedInUser = await localStorage.getItem("user")
	// 	if (!loggedInUser) {
	// 		setShowUserNavLinks(false)
	// 		setUser({
	// 			id: undefined,
	// 			email: undefined,
	// 			inventory: [],
	// 		})
	// 	} else {
	// 		const parsedUser = JSON.parse(loggedInUser)
	// 		setUser(() =>parsedUser)
	// 		fetchUserInventoryData()
	// 		setShowUserNavLinks(true)
	// 	}
	// }

	// const fetchUserInventoryData = async () => {
	// 	setUserInventoryData(fakeInventoryData)
	// 	setUser({ ...user, inventory: fakeInventoryData })
	// }

	const getBaseBackendUrl = async () => {
		const url = await getBackendUrl()
		setBackendUrl(url)
	}

	useEffect(() => {
		getBaseBackendUrl()
	}, [])

	useEffect(() => {
		attemptTokenRefresh(backendUrl)
	})

	// useEffect(() => {
	// 	checkForLoggedInUser()
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [])

	return (
		<UserInventoryDataContext.Provider
			value={{ userInventoryData, setUserInventoryData }}
		>
			{showUserNavLinks ? (
				<TopNavLinks navLinkList={signedInTopNavLinks} />
			) : (
				<TopNavLinks navLinkList={signedOutTopNavLinks} />
			)}
			<div className="d-flex justify-content-center vw-100">
				<Routes>
					<Route path="/" element={<Home loggedInUser={user} />} />
					<Route path="/signin" element={<SignIn backendUrl={backendUrl} />} />
					<Route path="/signup" element={<SignUp backendUrl={backendUrl} />} />

					{/* Need logic to make sure user can't go to /signout if not logged in */}

					<Route
						path="/signout"
						element={
							<SignOut
								setUser={setUser}
								setShowUserNavLinks={setShowUserNavLinks}
							/>
						}
					/>

					<Route path="*" element={<NotFoundPage />} />

					<Route path="/my-inventory">
						<Route index element={<LocationIndex />} />
						<Route path=":id" element={<LocationShow />} />
						<Route path="new" element={<NewLocation />} />
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
			</div>
		</UserInventoryDataContext.Provider>
	)
}

export default App
