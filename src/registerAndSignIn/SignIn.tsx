import React, { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { ActiveUser } from "../App"
import { BackendUrlContext } from "../App"

interface Props {
	setActiveUser: React.Dispatch<React.SetStateAction<ActiveUser>>
	setUserIsLoaded: React.Dispatch<React.SetStateAction<boolean>>
}

const SignIn: React.FC<Props> = ({ setActiveUser, setUserIsLoaded }) => {
	const [formPayload, setFormPayload] = useState({
		username: "",
		password: "",
	})
	const [errorMessage, setErrorMessage] = useState<string>("")
	const backendUrl = useContext(BackendUrlContext)
	const [showPassword, setShowPassword] = useState(false)
	const navigate = useNavigate()

	const togglePasswordVisibility = () => {
		setShowPassword(() => !showPassword)
	}

	const handleSignIn = async () => {
		const { username, password } = formPayload
		try {
			const response = await axios.post(
				`${backendUrl}/auth/login`,
				{
					username: username,
					password: password,
				},
				{
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
						"Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Set-Cookie",
					},
					withCredentials: true,
				}
			)
			if (response.status === 200) {
				setUserIsLoaded(() => true)
				if (response.data.userIngestion) {
					window.localStorage.setItem(
						"HiManUserSession",
						JSON.stringify(response?.data?.userIngestion)
					)
					setActiveUser({
						username: response.data.userIngestion.username,
						avatar: "https://i.pravatar.cc/300",
					})
					navigate("/")
					return true
				}
				return false
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
			<Form className="sign-in-up-form" onSubmit={handleSubmit}>
				<h2>Sign In</h2>
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
					<Button
						variant="outline-secondary"
						onClick={togglePasswordVisibility}
					>
						{showPassword ? "Hide" : "Show"}
					</Button>
					<Form.Control
						className="input-text-class"
						type={showPassword ? "text" : "password"}
						placeholder="Password"
						name="password"
						onChange={handleInputChange}
						required={true}
						value={formPayload.password}
					/>
				</Form.Group>
				{errorMessage}
				<Button className="button" type="submit">
					<span>Submit</span>
				</Button>
			</Form>
		</div>
	)
}

export default SignIn
