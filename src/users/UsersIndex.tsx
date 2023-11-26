import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
import { User } from "../App"
interface Props {
	userInfo: {
		name: string
		avatar: string
		id: string
		isPresent: boolean
	},
	setUserInfo: React.Dispatch<React.SetStateAction<User>>,
	userLoaded: boolean
	setUserLoaded: React.Dispatch<React.SetStateAction<boolean>>
}

const UsersIndex: React.FC<Props> = ({
	userInfo,
	setUserInfo,
	userLoaded,
	setUserLoaded,
}) => {
	const navigate = useNavigate()

	const handleLogout = () => {
		setUserLoaded(() => false)
		setUserInfo({
			name: "",
			username: "",
			avatar: "",
			id: "",
			isPresent: false,
		})
		navigate("/")
	}

	useEffect (() => {
		if (!userLoaded) {
			navigate("/")
		}
	}, [navigate, userLoaded])

	const showUserInformation = (
		<div className="users-index-container">
			<div className="users-index-header">
				<img id="avatar" src={userInfo.avatar} alt="avatar" />
				<h2>{userInfo.name}</h2>
			</div>
			<Button className="button sign-out" onClick={handleLogout}>
				Sign Out
			</Button>
		</div>
	)

	return <>{showUserInformation}</>
}

export default UsersIndex
