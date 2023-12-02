import { Button } from "react-bootstrap"
import { ActiveUser } from "../App"

interface Props {
	activeUser: ActiveUser
	setUserIsLoaded: unknown
}

const UsersIndex: React.FC<Props> = ({ activeUser, setUserIsLoaded }) => {

	const handleLogout = () => {
		setUserIsLoaded(() => false)
	}

	const showUserInformation = (
		<div className="users-index-container">
			<div className="users-index-header">
				<img id="avatar" src={activeUser.avatar} alt="avatar" />
				<h2>{activeUser.username}</h2>
			</div>
			<Button className="button sign-out" onClick={handleLogout}>
				Sign Out
			</Button>
		</div>
	)

	return <>{showUserInformation}</>
}

export default UsersIndex
