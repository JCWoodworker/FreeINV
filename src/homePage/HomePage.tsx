import { Container, Row, Col } from "react-bootstrap"
import SignUpInButtons from "../registerAndSignIn/SignUpInButtons"

const HomeIndex = () => {
	
	return (
		<Container>
			<Row>
				<Col className="home-page-list">
					<h2>Do you keep losing track of stuff?</h2>
					<h2>Wouldn't it be nice<br />to have it all in one place?</h2>
					<h2>
						Welcome to the inventory app
						<br />
						you've been waiting for!!
					</h2>
					<p>
						Now sign the fuck up
						<br />
						or sign the fuck in ...
					</p>
				</Col>
			</Row>
			<Row>
				<SignUpInButtons />
			</Row>
		</Container>
	)
}

export default HomeIndex
