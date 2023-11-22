import "./App.scss"
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
	userType: string
	isPresent: boolean
}

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext<User>({
	name: "",
	avatar: "",
	id: "",
	userType: "",
	isPresent: false,
})

function App() {
	const [userInfo, setUserInfo] = useState<User>({
		name: "Fake User",
		avatar: "https://avatars.dicebear.com/api/avataaars/123.svg",
		id: "123",
		userType: "player",
		isPresent: false,
	})

	const signFakeUserInAndOut = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setUserInfo({
			...userInfo,
			userType: event.currentTarget.id,
			name: `Fake ${event.currentTarget.id}`,
			isPresent: !userInfo.isPresent,
		})
	}

	return (
		<userContext.Provider value={userInfo}>
			<TopNav />
			<div className="app-body">
				{userInfo.isPresent ? (
					<UsersIndex userInfo={userInfo} />
				) : (
					<HomePage />
				)}
			</div>
			<div className="sign-in-button-container">
				{!userInfo.isPresent ? (
					<>
						{" "}
						<Button
							className="sign-in-button"
							id="coach"
							onClick={signFakeUserInAndOut}
						>
							{userInfo.isPresent ? "Sign Out" : "Sign In Fake Coach"}
						</Button>
						<Button
							className="sign-in-button"
							id="player"
							onClick={signFakeUserInAndOut}
						>
							{userInfo.isPresent ? "Sign Out" : "Sign In Fake Player"}
						</Button>
					</>
				) : (
					<Button
						className="sign-in-button"
						id="undefined"
						onClick={signFakeUserInAndOut}
					>
						Sign Out
					</Button>
				)}
			</div>
		</userContext.Provider>
	)
}

export default App
