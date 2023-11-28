/* eslint-disable react-hooks/exhaustive-deps */
import "./main.scss"
import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useAppContext } from "./AppContext"
import { useLocalStorageState } from "./customHooks/useLocalStorageState"

import TopNav from "./topNav/TopNav"
import UsersIndex from "./users/UsersIndex"
import HomePage from "./homePage/HomePage"
import SignIn from "./registerAndSignIn/SignIn"
import SignUp from "./registerAndSignIn/SignUp"

function App() {
	const { appState, setAppState } = useAppContext()
	const [localStorageState, setLocalStorageState] = useLocalStorageState(
		"invUserInfo",
		appState.userInfo
	)
	console.log(localStorageState)

	useEffect(() => {
		if (localStorageState) {
			setAppState(localStorageState.appState)
		}
	}, [])

	useEffect(() => {
		if (appState.userIsLoaded) {
			setLocalStorageState({
				appState,
			})
		}
	}, [appState])

	return (
		<>
			<TopNav />
			<Routes>
				<Route
					path="/"
					element={appState.userIsLoaded ? <UsersIndex /> : <HomePage />}
				/>
				<Route path="/users" element={<UsersIndex />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</>
	)
}

export default App
