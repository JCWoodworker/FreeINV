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

import {
	getBackendUrl,
	getLocalStorageTokens,
	fetchUserInventoryData,
} from "./utils/index.ts"
// import { attemptTokenRefresh } from "./utils/attemptRefreshToken.ts"
// import { fetchUserProfile } from "./utils/fetchUserProfile.ts"

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

	const hydrateUserData = async () => {
		const accessToken = await getLocalStorageTokens("accessToken")
		const userData = await fetchUserInventoryData(backendUrl, accessToken)
		setUserInventoryData(userData)
	}

	useEffect(() => {
		getBaseBackendUrl()
	}, [])

	useEffect(() => {
		if (userisLoggedIn) {
			hydrateUserData()
		} else {
			setUserInventoryData(undefined)
			localStorage.clear()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userisLoggedIn])

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
						<Route
							index
							element={
								<LocationIndex
									userInventoryData={userInventoryData}
									userIsLoggedIn={userisLoggedIn}
								/>
							}
						/>
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
