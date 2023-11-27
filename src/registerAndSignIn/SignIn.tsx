import React, { useState } from "react"
import { useAppContext } from "../AppContext"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const SignIn: React.FC = () => {
	const { appState, setAppState } = useAppContext()
	const [formPayload, setFormPayload] = useState({
		username: "",
		password: "",
	})
	const [errorMessage, setErrorMessage] = useState<string>("")
	const navigate = useNavigate()

	const handleSignIn = async (username: string, password: string) => {
		try {
			const response = await axios.post(
				appState.backendUrl,
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
				setAppState({
					...appState,
					userIsLoaded: true,
					userInfo: {
						// name: response.data.name,
						name: "No Names Yet",
						username: response.data.username,
						avatar: "https://i.pravatar.cc/300",
						id: response.data.id,
					},
				})

				console.log(`Status Message: ${response.data.statusMessage}`)

				navigate("/users")
				return true
			}
			if (response.status === 401) {
				return setErrorMessage("Incorrect username or password")
			}
			return setErrorMessage("Something went wrong")
		} catch (error) {
			console.log(`Sign in error caught: ${error}`)
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
		await handleSignIn(formPayload.username, formPayload.password)
	}

	console.log(`App State From SignIn: ${JSON.stringify(appState)}`)
	console.log(`Form Payload From SignIn: ${JSON.stringify(formPayload)}`)

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
