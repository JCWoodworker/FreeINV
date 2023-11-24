import "./main.scss"
import { useState, createContext } from "react"
import InvButton from "./components/InvButton"

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
	const [userLoaded, setUserLoaded] = useState(false)
	const [userInfo, setUserInfo] = useState<User>({
		name: "",
		avatar: "",
		id: "",
	})

	return (
		<userContext.Provider value={userInfo}>
			<TopNav />
			{userLoaded ? <UsersIndex userInfo={userInfo} /> : <HomePage />}
			<div className="app-body">
				<div className="sign-in-up-container">
					<InvButton
						label="Sign In"
						classNames="button"
						onClick={() => alert("Sign In")}
					/>
					<InvButton
						label="Sign Up"
						classNames="button"
						onClick={() => alert("Sign Up")}
					/>
				</div>
			</div>
		</userContext.Provider>
	)
}

export default App
