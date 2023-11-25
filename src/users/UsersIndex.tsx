interface Props {
	userInfo: {
		name: string
		avatar: string
		id: string
	}
	userLoaded: boolean
}

const UsersIndex: React.FC<Props> = ({ userInfo, userLoaded }) => {
	let showUserInformation = <div>No User</div>
	userLoaded ? (
		(showUserInformation = (
			<div className="users-index-container">
				<div className="users-index-header">
					<img id="avatar" src={userInfo.avatar} alt="avatar" />
					<h2>{userInfo.name}</h2>
				</div>
			</div>
		))
	) : (
		<div>No User</div>
	)

	return <>{showUserInformation}</>
}

export default UsersIndex
