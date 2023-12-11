/* eslint-disable react-hooks/exhaustive-deps */
import "./main.scss"
import { useState, useEffect, createContext } from "react"
import { Routes, Route } from "react-router-dom"
import { getBackendUrl } from "./config/getEnvVars"

import TopNav from "./topNav/TopNav"
import HomePage from "./homePage/HomePage"
import SignIn from "./registerAndSignIn/SignIn"
import SignUp from "./registerAndSignIn/SignUp"
import UsersIndex from "./users/UsersIndex"

export interface ActiveUser {
	username: string
	avatar: string
}

export const BackendUrlContext = createContext<string>("")

function App() {
	const [activeUser, setActiveUser] = useState<ActiveUser>({
		username: "",
		avatar: "",
	})
	const [userIsLoaded, setUserIsLoaded] = useState<boolean>(false)
	const [backendUrl, setBackendUrl] = useState<string>("")


	useEffect(() => {
		const userSession = window.localStorage.getItem("HiManUserSession")
		if (userSession) {
			setUserIsLoaded(true)
			// setActiveUser(JSON.parse(window.localStorage.getItem("HiManUserSession")!))
		}
	}, [])

	useEffect(() => {
		const backendUrl = getBackendUrl()
		setBackendUrl(backendUrl)
	}, [])

	return (
		<BackendUrlContext.Provider value={backendUrl}>
			<TopNav userIsLoaded={userIsLoaded} />
			<Routes>
				<Route
					path="/"
					element={
						userIsLoaded ? <UsersIndex activeUser={activeUser} /> : <HomePage />
					}
				/>
				<Route
					path="/signin"
					element={
						<SignIn
							setActiveUser={setActiveUser}
							setUserIsLoaded={setUserIsLoaded}
						/>
					}
				/>
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</BackendUrlContext.Provider>
	)
}

export default App
