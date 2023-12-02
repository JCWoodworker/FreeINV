import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

const SignUpInButtons: React.FC = () => {

	return (
		<div className="app-body">
			<Form className="sign-in-up-container">
				<Link to="/signup" className="react-router-Link">
					<Button className="button">Sign Up</Button>
				</Link>
				<Link to="/signin" className="react-router-Link">
					<Button className="button">
						Sign In
					</Button>
				</Link>
			</Form>
		</div>
	)
}

export default SignUpInButtons
