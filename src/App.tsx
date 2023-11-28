/* eslint-disable react-hooks/exhaustive-deps */
import "./main.scss"
import { Routes, Route } from "react-router-dom"
import { useAppContext } from "./AppContext"

import TopNav from "./topNav/TopNav"
import UsersIndex from "./users/UsersIndex"
import HomePage from "./homePage/HomePage"
import SignIn from "./registerAndSignIn/SignIn"
import SignUp from "./registerAndSignIn/SignUp"


function App() {
	const { appState, setAppState } = useAppContext()

	console.log(`${JSON.stringify(appState)} ${setAppState}`)

	return (
		<>
			<TopNav />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/users" element={<UsersIndex />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</>
	)
}

export default App
