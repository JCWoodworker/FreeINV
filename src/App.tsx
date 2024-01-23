import { useEffect, useState, createContext } from "react"
import { Routes, Route } from "react-router-dom"
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

import { getBackendUrl } from "./utils/getBackendUrl.ts"
// import { attemptTokenRefresh } from "./utils/attemptRefreshToken.ts"
// import { fetchUserProfile } from "./utils/fetchUserProfile.ts"
// import { fetchUserInventoryData } from "./utils/fetchUserInventoryData.ts"

import {
	signedOutTopNavLinks,
	signedInTopNavLinks,
} from "./navigation/links.ts"

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
	const [userisLoggedIn, setUserIsLoggedIn] = useState<boolean>(false)
	const [userInventoryData, setUserInventoryData] = useState<
		UserLocationData[] | undefined
	>(undefined)

	const getBaseBackendUrl = async () => {
		const url = await getBackendUrl()
		setBackendUrl(url)
	}

	// const getLoggedInUserData = async () => {
	// 	const { accessToken, refreshToken } = JSON.parse(
	// 		localStorage.getItem("freeInvTokens") || ""
	// 	)
	// 	if (!accessToken || !refreshToken) {
	// 		console.log(
	// 			"FetchUserProfile: No access or refresh token found in local storage"
	// 		)
	// 		return false
	// 	}

	// 	const refreshSuccess = await attemptTokenRefresh(backendUrl, refreshToken)
	// 	if (refreshSuccess) {
	// 		const userProfile = await fetchUserProfile(backendUrl, accessToken)
	// 		const userInventory = await fetchUserInventoryData(
	// 			backendUrl,
	// 			accessToken
	// 		)

	// 		localStorage.setItem("user", JSON.stringify(userProfile))
	// 		localStorage.setItem(
	// 			"freeInvUserInventory",
	// 			JSON.stringify(userInventory)
	// 		)
	// 		setUserInventoryData(userInventory)
	// 		setShowUserNavLinks(true)
	// 	}
	// }

	useEffect(() => {
		getBaseBackendUrl()
	}, [])

	// useEffect(() => {
	// 	getLoggedInUserData()
	// })

	return (
		<UserInventoryDataContext.Provider
			value={{ userInventoryData, setUserInventoryData }}
		>
			{userisLoggedIn ? (
				<TopNavLinks navLinkList={signedInTopNavLinks} />
			) : (
				<TopNavLinks navLinkList={signedOutTopNavLinks} />
			)}
			<div className="d-flex justify-content-center vw-100">
				<Routes>
					<Route path="/" element={<Home userIsLoggedIn={userisLoggedIn} />} />
					<Route
						path="/signin"
						element={
							<SignIn
								backendUrl={backendUrl}
								setUserIsLoggedIn={setUserIsLoggedIn}
							/>
						}
					/>
					<Route
						path="/signup"
						element={
							<SignUp
								backendUrl={backendUrl}
								setUserIsLoggedIn={setUserIsLoggedIn}
							/>
						}
					/>

					{/* Need logic to make sure user can't go to /signout if not logged in */}

					<Route
						path="/signout"
						element={<SignOut setUserIsLoggedIn={setUserIsLoggedIn} />}
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
