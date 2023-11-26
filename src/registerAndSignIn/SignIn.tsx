import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

interface Props {
	handleSignIn: () => void
}
const SignIn: React.FC<Props> = ({ handleSignIn }) => {
	const navigate = useNavigate()
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		handleSignIn()
		navigate("/users")
	}
	return (
		<div>
			<h1>Sign In</h1>
			<Form className="sign-in-form" onSubmit={handleSubmit}>
				<Form.Group className="text-input-group" controlId="signInForm">
					<Form.Label className="input-label-class">Username</Form.Label>
					<Form.Control
						className="input-text-class"
						placeholder="Username"
						required={true}
					/>
				</Form.Group>
				<Form.Group className="text-input-group" controlId="signInForm">
					<Form.Label className="input-label-class">Password</Form.Label>
					<Form.Control
						className="input-text-class"
						placeholder="Password"
						required={true}
					/>
				</Form.Group>
				<Button className="button" type="submit">Submit</Button>
			</Form>
		</div>
	)
}

export default SignIn
