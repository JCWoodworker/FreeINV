/* eslint-disable react-hooks/exhaustive-deps */
import "./main.scss"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import TopNav from "./topNav/TopNav"
import HomePage from "./homePage/HomePage"
import SignIn from "./registerAndSignIn/SignIn"
import SignUp from "./registerAndSignIn/SignUp"
import UsersIndex from "./users/UsersIndex"

export type ActiveUser = {
	username: string
	avatar: string
}

function App() {
	const [activeUser, setActiveUser] = useState<ActiveUser>({
		username: "",
		avatar: "",
	})
	const [userIsLoaded, setUserIsLoaded] = useState<boolean>(false)

	useEffect(() => {
		const userSession = window.localStorage.getItem("HiManUserSession")
		if (userSession) {
			const user = JSON.parse(userSession)
			setUserIsLoaded(true)
			setActiveUser({
				username: user.username,
				avatar: user.avatar,
			})
		}
	}, [])

	return (
		<div>
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
		</div>
	)
}

export default App
