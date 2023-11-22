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
		<div>
			<h1>{userInfo.name}</h1>
			<img id="avatar" src={userInfo.avatar} alt="avatar" />
			<p>ID: {userInfo.id}</p>
			<p>Type: {userInfo.userType}</p>
      {userTypeComponent}
		</div>
	)
}

export default UsersIndex
