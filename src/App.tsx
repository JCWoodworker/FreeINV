import "./main.scss"
import { useState, createContext } from "react"
import { Button } from "react-bootstrap"

import TopNav from "./topNav/TopNav"
import UsersIndex from "./users/UsersIndex"
import HomePage from "./homePage/HomePage"

// eslint-disable-next-line react-refresh/only-export-components
export interface User {
	name: string
	avatar: string
	id: string
}

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext<User>({
	name: "",
	avatar: "",
	id: "",
})

function App() {
	const [userInfo, setUserInfo] = useState<User>({
		name: "",
		avatar: "",
		id: "",
	})

	return (
		<userContext.Provider value={userInfo}>
			<TopNav />
			{userInfo ? <UsersIndex userInfo={userInfo} /> : <HomePage />}
			<div className="app-body">
				<Button>Sign In</Button>
			</div>
		</userContext.Provider>
	)
}

export default App
