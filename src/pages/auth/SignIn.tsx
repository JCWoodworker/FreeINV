import { useState } from "react"
import GoogleOAuth from "./GoogleOAuth"
import axios from "axios"
import Recaptcha from "./Recaptcha"
import { useNavigate } from "react-router-dom"
import { Form, Stack } from "react-bootstrap"

import SubmitButton from "../../components/SubmitButton"

interface Props {
	backendUrl: string
}

const SignIn: React.FC<Props> = ({ backendUrl }) => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	})
	const [recaptchaVerified, setRecaptchaVerified] = useState(false)
	const navigate = useNavigate()

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		if (recaptchaVerified) {
			const payload = credentials
			try {
				const response = await axios.post(
					`${backendUrl}/authentication/sign-in`,
					payload
				)
				if (response) {
					localStorage.setItem("user", JSON.stringify(response.data.user))
					localStorage.setItem(
						"loginTokens",
						JSON.stringify(response.data.tokens)
					)
					navigate("/")
					window.location.reload()
				}
			} catch (error) {
				console.log(error)
			}
		} else {
			alert("Please verify that you are not a robot")
		}
	}

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		})
	}

	return (
		<Stack className="m-2 d-flex justify-content-center align-items-center">
			<h1>Sign In</h1>
			<GoogleOAuth backendUrl={backendUrl} />
			<h3>Or</h3>
			<Form
				onSubmit={handleSubmit}
				className="d-flex flex-column justify-content-center align-items-center gap-3"
			>
					<Form.Group controlId="formBasicEmail">
						<input
							type="text"
							placeholder="Email"
							name="email"
							value={credentials.email}
							onChange={handleOnChange}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={credentials.password}
							onChange={handleOnChange}
						/>
					</Form.Group>

				<Recaptcha setRecaptchaVerified={setRecaptchaVerified} />
				<SubmitButton buttonText="Sign In" />
			</Form>
		</Stack>
	)
}

export default SignIn
