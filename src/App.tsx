import "./main.scss"
import { useState, createContext } from "react"
import InvButton from "./components/InvButton"

import TopNav from "./topNav/TopNav"
import UsersIndex from "./users/UsersIndex"
import HomePage from "./homePage/HomePage"
import SignUpInButtons from "./registerAndSignIn/SignUpInButtons"

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
	const [userLoaded, setUserLoaded] = useState(false)
	const [userInfo, setUserInfo] = useState<User>({
		name: "Fake User",
		avatar: "https://i.pravatar.cc/300",
		id: "fake-user",
		isPresent: false,
	})

	return (
		<userContext.Provider value={userInfo}>
			<TopNav userLoaded={userLoaded} setUserLoaded={setUserLoaded} />
			{userLoaded ? <UsersIndex userInfo={userInfo} /> : <HomePage />}
			<SignUpInButtons
				userInfo={userInfo}
				userLoaded={userLoaded}
				setUserLoaded={setUserLoaded}
			/>
		</userContext.Provider>
	)
}

export default App
