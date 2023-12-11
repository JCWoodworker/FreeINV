import { Container, Row } from "react-bootstrap"
import { ActiveUser } from "../App"

import LoactionsIndex from "../Inventory/Locations/LocationsIndex"

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
					<LoactionsIndex />
				</Row>
			</Container>
		</>
	)

	return <>{showUserInformation}</>
}

export default UsersIndex
