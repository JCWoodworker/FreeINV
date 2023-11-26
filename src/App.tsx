import "./main.scss"
import { useState, createContext } from "react"
import { Routes, Route } from "react-router-dom"

import TopNav from "./topNav/TopNav"
import UsersIndex from "./users/UsersIndex"
import HomePage from "./homePage/HomePage"
import SignIn from "./registerAndSignIn/SignIn"
import SignUp from "./registerAndSignIn/SignUp"

// eslint-disable-next-line react-refresh/only-export-components
export interface User {
	name: string
	avatar: string
	id: string
	isPresent: boolean
}

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext<User>({
	name: "",
	avatar: "",
	id: "",
	isPresent: false,
})

function App() {
	const [userInfo, setUserInfo] = useState<User>({
		name: "",
		avatar: "",
		id: "",
		isPresent: false,
	})
	const [userLoaded, setUserLoaded] = useState<boolean>(userInfo?.isPresent)

	const handleSignIn = async () => {
		try {
			setUserLoaded(true)
			setUserInfo({
				name: "Fake User",
				avatar: "https://i.pravatar.cc/300",
				id: "fake-user",
				isPresent: true,
			})
		} catch (error) {
			console.log(`Sign in error: ${error}`)
		}
	}

	return (
		<userContext.Provider value={userInfo}>
			<TopNav userLoaded={userLoaded} />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/users"
					element={
						<UsersIndex
							userInfo={userInfo}
							setUserInfo={setUserInfo}
							userLoaded={userLoaded}
							setUserLoaded={setUserLoaded}
						/>
					}
				/>
				<Route
					path="/signin"
					element={<SignIn handleSignIn={handleSignIn} />}
				/>
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</userContext.Provider>
	)
}

export default App
