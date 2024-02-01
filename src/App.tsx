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

import { UserLocationData } from "./pages/inventory/inventoryTypes.ts"
import { Request, getLocalStorageTokens } from "./utils/index.ts"


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
	const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>(false)
	const [userInventoryData, setUserInventoryData] = useState<
		UserLocationData[] | undefined
	>(undefined)

	const checkForLoggedInUser = async () => {
		try {
			const doTokensExist = await getLocalStorageTokens("both")
			if (!doTokensExist) {
				setUserIsLoggedIn(false)
				return
			}

			const refreshedTokens = await Request.refresh()
			if (!refreshedTokens) {
				console.log("Failed to refresh token, please login again")
				return false
			}
			localStorage.setItem("freeInvTokens", JSON.stringify(refreshedTokens))
			setUserIsLoggedIn(true)
			return true
		} catch (error) {
			console.log(error)
			return false
		}
	}

	const hydrateUserData = async () => {
		try {
			const accessToken = await getLocalStorageTokens("accessToken")
			if (!accessToken) {
				return console.log(
					"No access token found in local storage.  Cannot hydrate user data"
				)
			}
			const userData = await Request.get("/freeinv/complete-location", true)
			setUserInventoryData(userData)
			return true
		} catch (error) {
			console.log(error)
			return false
		}
	}

	useEffect(() => {
		if (!userIsLoggedIn) {
			checkForLoggedInUser()
		}
		if (userIsLoggedIn) {
			hydrateUserData()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userIsLoggedIn])

	return (
		<UserInventoryDataContext.Provider
			value={{ userInventoryData, setUserInventoryData }}
		>
			{!userIsLoggedIn ? (
				<>
					<TopNavLinks navLinkList={signedOutTopNavLinks} />
					<div className="d-flex justify-content-center vw-100">
						<Routes>
							<Route
								path="/"
								element={<Home userIsLoggedIn={userIsLoggedIn} />}
							/>
							<Route
								path="/signin"
								element={<SignIn setUserIsLoggedIn={setUserIsLoggedIn} />}
							/>
							<Route
								path="/signup"
								element={<SignUp setUserIsLoggedIn={setUserIsLoggedIn} />}
							/>
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</div>
				</>
			) : (
				<>
					<TopNavLinks navLinkList={signedInTopNavLinks} />
					<div className="d-flex justify-content-center vw-100">
						<Routes>
							<Route
								path="/"
								element={<Home userIsLoggedIn={userIsLoggedIn} />}
							/>
							<Route
								path="/signout"
								element={<SignOut setUserIsLoggedIn={setUserIsLoggedIn} />}
							/>
							<Route path="/my-inventory">
								<Route
									index
									element={
										<LocationIndex
											userInventoryData={userInventoryData}
											userIsLoggedIn={userIsLoggedIn}
										/>
									}
								/>
								<Route path="locations/:id" element={<LocationShow />} />
								<Route path="locations/new" element={<NewLocation />} />
								<Route path="rooms">
									<Route path=":id" element={<RoomShow />} />
									<Route path="new" element={<NewRoom />} />
								</Route>
								<Route path="items">
									<Route path=":id" element={<ItemShow />} />
									<Route path="new" element={<NewItem />} />
								</Route>
							</Route>
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</div>
				</>
			)}
		</UserInventoryDataContext.Provider>
	)
}

export default App
