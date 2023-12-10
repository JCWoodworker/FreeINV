import { Container, Row } from "react-bootstrap"
import { ActiveUser } from "../App"

interface Props {
	activeUser: ActiveUser
}

const UsersIndex: React.FC<Props> = ({ activeUser }) => {
	const showUserInformation = (
		<>
			<Container className="users-index-container">
				<Row className="users-index-header">
					<img id="avatar" src={activeUser.avatar} alt="avatar" />
					<h2>{activeUser.username}</h2>
				</Row>
				<Row>
					All Locations:
				</Row>
				<Row>
					All Rooms:
				</Row>
				<Row>
					All Items:
				</Row>
			</Container>
		</>
	)
	return <>{showUserInformation}</>
}

export default UsersIndex
