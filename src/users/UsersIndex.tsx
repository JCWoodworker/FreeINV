import { Container, Row } from "react-bootstrap"
import { ActiveUser } from "../App"

import LoactionsIndex from "../Inventory/Locations/LocationsIndex"
import SignOut from "../SignOut/SignOut"

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
				<Row>
					<SignOut />
				</Row>
			</Container>
		</>
	)

	return <>{showUserInformation}</>
}

export default UsersIndex
