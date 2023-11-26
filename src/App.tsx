import "./main.scss"
import { useState, createContext } from "react"
import { Routes, Route } from "react-router-dom"

import TopNav from "./topNav/TopNav"
import UsersIndex from "./users/UsersIndex"
import HomePage from "./homePage/HomePage"
import SignIn from "./registerAndSignIn/SignIn"
import SignUp from "./registerAndSignIn/SignUp"

import { fakeUserList, FakeUser } from "./utils/fakeUserList"

// eslint-disable-next-line react-refresh/only-export-components
export interface User {
	name: string
	username: string
	avatar: string
	id: string
	isPresent: boolean
}

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext<User>({
	name: "",
	username: "",
	avatar: "",
	id: "",
	isPresent: false,
})

function App() {
	const [fakeUserListState, setFakeUserListState] =
		useState<FakeUser[]>(fakeUserList)
	const [userInfo, setUserInfo] = useState<User>({
		name: "",
		username: "",
		avatar: "",
		id: "",
		isPresent: false,
	})
	const [userLoaded, setUserLoaded] = useState<boolean>(userInfo?.isPresent)

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
					element={
						<SignIn
							setUserInfo={setUserInfo}
							setUserLoaded={setUserLoaded}
						/>
					}
				/>
				<Route
					path="/signup"
					element={
						<SignUp
							fakeUserListState={fakeUserListState}
							setFakeUserListState={setFakeUserListState}
						/>
					}
				/>
			</Routes>
		</userContext.Provider>
	)
}

export default App
