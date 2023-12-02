import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from "axios"

interface Props {
	setActiveUser: unknown
	setUserIsLoaded: unknown
}

const SignIn: React.FC<Props> = ({ setActiveUser, setUserIsLoaded }) => {
	const [formPayload, setFormPayload] = useState({
		username: "",
		password: "",
	})
	const [errorMessage, setErrorMessage] = useState<string>("")
	const navigate = useNavigate()

	const handleSignIn = async () => {
		const { username, password } = formPayload
		try {
			const response = await axios.post(
				`http://localhost:3000/auth/login`,
				{
					username: username,
					password: password,
				},
				{
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				}
			)
			if (response.status === 200) {
				setUserIsLoaded(() => true)
				setActiveUser({ username: username, avatar: "myavatarurl" })
				navigate("/")
				return true
			}
		} catch (error) {
			setErrorMessage("Incorrect credentials")
			return false
		}
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		setFormPayload({
			...formPayload,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		await handleSignIn()
	}

	return (
		<div>
			<h1>Sign In</h1>
			<Form className="sign-in-up-form" onSubmit={handleSubmit}>
				<Form.Group className="text-input-group">
					<Form.Label className="input-label-class">Username</Form.Label>
					<Form.Control
						className="input-text-class"
						type="text"
						placeholder="Username"
						name="username"
						onChange={handleInputChange}
						required={true}
						value={formPayload.username}
					/>
				</Form.Group>
				<Form.Group className="text-input-group">
					<Form.Label className="input-label-class">Password</Form.Label>
					<Form.Control
						className="input-text-class"
						type="text"
						placeholder="Password"
						name="password"
						onChange={handleInputChange}
						required={true}
						value={formPayload.password}
					/>
				</Form.Group>
				{errorMessage}
				<Button className="button" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default SignIn
