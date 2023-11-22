import "./App.scss"
import { useState } from "react"
import { Button } from "react-bootstrap"

import TopNav from "./topNav/TopNav"
import PlayerIndex from "./users/players/PlayerIndex"
import CoachIndex from "./users/coaches/coachIndex"
import HomeIndex from "./HomeIndex"

function App() {
	const [userIsPresent, setUserIsPresent] = useState(false)
	const [userInfo, setUserInfo] = useState({
		name: "Fake User",
		avatar: "https://avatars.dicebear.com/api/avataaars/123.svg",
		id: "123",
		userType: "player",
	})

	const signFakeUserInAndOut = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setUserInfo({
			...userInfo,
			userType: event.currentTarget.id,
			name: `Fake ${event.currentTarget.id}`
		})
		setUserIsPresent(!userIsPresent)
	}

	return (
		<>
			<TopNav />
			<div className="app-body">
				{userIsPresent && userInfo.userType === "coach" ? (
					<CoachIndex userInfo={userInfo} />
				) : userIsPresent && userInfo.userType === "player" ? (
					<PlayerIndex userInfo={userInfo} />
				) : (
					<HomeIndex />
				)}
			</div>
			<div className="sign-in-button-container">
				{!userIsPresent ? (
					<>
						{" "}
						<Button
							className="sign-in-button"
							id="coach"
							onClick={signFakeUserInAndOut}
						>
							{userIsPresent ? "Sign Out" : "Sign In Coach"}
						</Button>
						<Button
							className="sign-in-button"
							id="player"
							onClick={signFakeUserInAndOut}
						>
							{userIsPresent ? "Sign Out" : "Sign In Player"}
						</Button>
					</>
				) : (
					<Button
						className="sign-in-button"
						onClick={signFakeUserInAndOut}
					>Sign Out</Button>
				)}
			</div>
		</>
	)
}

export default App
