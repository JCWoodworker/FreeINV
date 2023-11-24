interface Props {
	userInfo: {
		name: string
		avatar: string
		id: string
	}
}

const UsersIndex: React.FC<Props> = ({ userInfo }) => {
	return (
		<div className="users-index-container">
			<div className="users-index-header">
				<img id="avatar" src={userInfo.avatar} alt="avatar" />
				<h2>{userInfo.name}</h2>
			</div>
		</div>
	)
}

export default UsersIndex
