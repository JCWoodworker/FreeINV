/* eslint-disable react-hooks/exhaustive-deps */
import "./main.scss"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import TopNav from "./topNav/TopNav"
import HomePage from "./homePage/HomePage"
import SignIn from "./registerAndSignIn/SignIn"
import SignUp from "./registerAndSignIn/SignUp"
import UsersIndex from "./users/UsersIndex"
// import UsersIndex from "./users/UsersIndex"

export interface ActiveUser {
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
		console.log(
			`activeUser: ${JSON.stringify(activeUser)}\nuserIsLoaded: ${userIsLoaded}`
		)
	}, [activeUser])

	return (
		<>
			<TopNav userIsLoaded={userIsLoaded} />
			<Routes>
				<Route
					path="/"
					element={
						userIsLoaded ? (
							<UsersIndex
								activeUser={activeUser}
								setUserIsLoaded={setUserIsLoaded}
							/>
						) : (
							<HomePage />
						)
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
		</>
	)
}

export default App
