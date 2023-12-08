import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomeIndex = () => {
	return (
		<Container>
			<Row>
				<Col className="home-page-list">
					<h2>Do you keep losing track of your stuff?</h2>
					<h2>Can't remember what's in all those boxes in the basement?</h2>
					<h2>Can't even remember which room those boxes were stored in?</h2>
					<Link to="signup" className="sign-up-bottom-link">
						<h2>Welcome to HI Man --- Sign up to get started managing your stuff</h2>
					</Link>
				</Col>
			</Row>
		</Container>
	)
}

export default HomeIndex
