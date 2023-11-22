interface Props {
	userInfo: {
		name: string
		avatar: string
		id: string
		userType: string
	}
}

const CoachIndex: React.FC<Props> = ({ userInfo }) => {
	return (
		<div>
			<h1>{userInfo.name}</h1>
			<img src={userInfo.avatar} alt="avatar" />
			<p>ID: {userInfo.id}</p>
			<p>Type: {userInfo.userType}</p>
		</div>
	)
}

export default CoachIndex
