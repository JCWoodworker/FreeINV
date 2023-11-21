import "./App.scss"
import { Container, Row, Col } from "react-bootstrap"

import TopNav from "./topNav/TopNav"

function App() {
	return (
		<>
			<TopNav />
			<Container>
				<Row>
					<Col>
						<p>Need to find your next needle in a haystack?</p>
						<p>Are you the needle that's lost in the shuffle?</p>
						<p>NextRecruiter is here to connect you!!</p>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default App
