import CoachHome from "./coaches/CoachHome"
import PlayerHome from "./players/PlayerHome"

interface Props {
	userInfo: {
		name: string
		avatar: string
		id: string
		userType: string
	}
}

const UsersIndex: React.FC<Props> = ({ userInfo }) => {
	let userTypeComponent = null
	userInfo.userType === "player"
		? (userTypeComponent = <PlayerHome />)
		: userInfo.userType === "coach"
		? (userTypeComponent = <CoachHome />)
		: null

	return (
		<div className="users-index-container">
			<div className="users-index-header">
				<img id="avatar" src={userInfo.avatar} alt="avatar" />
				<h2>{userInfo.name}</h2>
			</div>
			{userTypeComponent}
		</div>
	)
}

export default UsersIndex
