import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { fakeUserList } from "../utils/fakeUserList"
import { User } from "../App"

interface FormPayload {
	username: string
	password: string
}

interface Props {
	setUserInfo: React.Dispatch<React.SetStateAction<User>>
	setUserLoaded: React.Dispatch<React.SetStateAction<boolean>>
	fakeUserListState: typeof fakeUserList
}
const SignIn: React.FC<Props> = ({ setUserInfo, setUserLoaded, fakeUserListState }) => {
	const [formPayload, setFormPayload] = useState({
		username: "",
		password: "",
	})
	const [errorMessage, setErrorMessage] = useState<string>("")
	const navigate = useNavigate()

	const handleSignIn = (
		payload: FormPayload & {
			username: string
			password: string
		}
	) => {
		try {
			const response = fakeUserListState.find((user) => {
				if (
					user.username === payload.username &&
					user.password === payload.password
				) {
					return user
				}
				return false
			})
			if (!response) {
				setErrorMessage("Incorrect username or password")
				return
			}
			if (response) {
				setUserInfo({
					name: response.name,
					username: response.username,
					avatar: response.avatar,
					id: response.id,
					isPresent: true,
				})
				setUserLoaded(true)
				navigate("/users")
			}
		} catch (error) {
			console.log(`Sign in error: ${error}`)
		}
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormPayload({
			...formPayload,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		handleSignIn(formPayload)
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
