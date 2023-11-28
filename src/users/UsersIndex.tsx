import React, { useEffect } from "react"
import { useAppContext } from "../AppContext"
import { useLocalStorageState } from "../customHooks/useLocalStorageState"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

const UsersIndex: React.FC = () => {
	const { appState, setAppState } = useAppContext()
	const navigate = useNavigate()
	const [localStorageState, setLocalStorageState] = useLocalStorageState(
		"appState",
		appState
	)

	console.log(`Local Storage State: ${JSON.stringify(localStorageState)}`)

	const handleLogout = () => {
		const clearedAppState = {
			...appState,
			userIsLoaded: false,
			userInfo: {
				name: "",
				username: "",
				avatar: "",
				id: "",
			},
		}
		setAppState(clearedAppState)
		setLocalStorageState(clearedAppState)
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
