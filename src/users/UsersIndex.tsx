import React, { useEffect } from "react"
import { useAppContext } from "../AppContext"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

const UsersIndex: React.FC = () => {
	const { appState, setAppState } = useAppContext()
	const navigate = useNavigate()

	console.log(`${JSON.stringify(appState)} ${setAppState}`)


	const handleLogout = () => {
		alert("This shit does not work yet!!")
	}

	useEffect(() => {
		if (!appState.userIsLoaded) {
			navigate("/")
		}
	}, [navigate, appState.userIsLoaded])

	const showUserInformation = (
		<div className="users-index-container">
			<div className="users-index-header">
				<img id="avatar" src={appState.userInfo.avatar} alt="avatar" />
				<h2>{appState.userInfo.name}</h2>
			</div>
			<Button className="button sign-out" onClick={handleLogout}>
				Sign Out
			</Button>
		</div>
	)

	return <>{showUserInformation}</>
}

export default UsersIndex
