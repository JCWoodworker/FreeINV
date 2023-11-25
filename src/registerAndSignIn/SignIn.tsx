import { Form } from "react-bootstrap"
const SignIn = () => {
	return (
		<div>
			<h1>Sign In</h1>
			<Form >
        <Form.Label htmlFor="email">Email</Form.Label>
				<Form.Control type="email" placeholder="Email" required={true} />
        <Form.Label htmlFor="password">Password</Form.Label>
				<Form.Control type="password" placeholder="Password" required={true} />
			</Form>
		</div>
	)
}

export default SignIn
