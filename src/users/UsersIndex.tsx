import { ActiveUser } from "../App"

interface Props {
	activeUser: ActiveUser
}

const UsersIndex: React.FC<Props> = ({ activeUser }) => {
	const showUserInformation = (
		<>
			<div className="users-index-container">
				<div className="users-index-header">
					<img id="avatar" src={activeUser.avatar} alt="avatar" />
					<h2>{activeUser.username}</h2>
				</div>
			</div>
		</>
	)
	return <>{showUserInformation}</>
}

export default UsersIndex
