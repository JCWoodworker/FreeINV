import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import getBackendUrl from "./config/getBackendUrl.ts"

import TopNavLinks from "./navigation/TopNavLinks.tsx"
import Home from "./pages/home/Home"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import SignOut from "./pages/auth/SignOut.tsx"
import NotFoundPage from "./pages/not-found/NotFound"

import LocationIndex from "./pages/inventory/locations/LocationIndex.tsx"
import LocationShow from "./pages/inventory/locations/LocationShow.tsx"
import NewLocation from "./pages/inventory/locations/NewLocation.tsx"

import { fakeInventoryData } from "./pages/inventory/fakeInventoryData.ts"
import { UserLocationData } from "./pages/inventory/types.ts"

import {
	signedOutTopNavLinks,
	signedInTopNavLinks,
} from "./navigation/links.ts"
import RoomShow from "./pages/inventory/rooms/RoomShow.tsx"

export interface LoggedInUser {
	id: number | undefined
	email: string | undefined
}

function App() {
	const [backendUrl, setBackendUrl] = useState("")
	const [user, setUser] = useState<LoggedInUser>({
		id: undefined,
		email: undefined,
	})
	const [showUserNavLinks, setShowUserNavLinks] = useState(false)

	// Testing this with fake data for now
	const [userInventoryData, setUserInventoryData] = useState<
		UserLocationData[] | undefined
	>(undefined)

	const checkForLoggedInUser = async () => {
		const loggedInUser = await localStorage.getItem("user")
		if (!loggedInUser) {
			setShowUserNavLinks(false)
			setUser({
				id: undefined,
				email: undefined,
			})
		} else {
			const parsedUser = JSON.parse(loggedInUser)
			setUser(parsedUser)
			setShowUserNavLinks(true)
			setUserInventoryData(fakeInventoryData)
		}
	}

	const getBaseBackendUrl = async () => {
		const url = await getBackendUrl()
		setBackendUrl(url)
	}

	useEffect(() => {
		getBaseBackendUrl()
	}, [])

	useEffect(() => {
		checkForLoggedInUser()
	}, [])

	return (
		<>
			{showUserNavLinks ? (
				<TopNavLinks navLinkList={signedInTopNavLinks} />
			) : (
				<TopNavLinks navLinkList={signedOutTopNavLinks} />
			)}
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
					<Route
						index
						element={<LocationIndex userInventoryData={userInventoryData} />}
					/>
					<Route
						path=":id"
						element={<LocationShow userInventoryData={userInventoryData} />}
					/>
					<Route
						path="new"
						element={
							<NewLocation
								setUserInventoryData={setUserInventoryData}
								userInventoryData={userInventoryData}
							/>
						}
					/>
					<Route
						path="rooms/:id"
						element={<RoomShow userInventoryData={userInventoryData} />}
					></Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
