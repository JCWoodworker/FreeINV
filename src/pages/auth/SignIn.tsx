import { useState } from "react"
import GoogleOAuth from "./GoogleOAuth"
import axios from "axios"
import Recaptcha from "./Recaptcha"
import { useNavigate } from "react-router-dom"

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
		<div className="GoogleOAuth">
			<h1>Sign In</h1>
			<GoogleOAuth backendUrl={backendUrl} />
			<h2>Or</h2>
			<form className="sign-in-form" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Email"
					name="email"
					value={credentials.email}
					onChange={handleOnChange}
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					value={credentials.password}
					onChange={handleOnChange}
				/>
				<Recaptcha setRecaptchaVerified={setRecaptchaVerified} />
				<SubmitButton buttonText="Sign In" />
			</form>
		</div>
	)
}

export default SignIn
