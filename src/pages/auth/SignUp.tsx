import { useState } from "react"
import Recaptcha from "./Recaptcha"
import axios from "axios"
import GoogleOAuth from "./GoogleOAuth"

interface Props {
	backendUrl: string
}

const SignUp: React.FC<Props> = ({ backendUrl }) => {
	const [signupPayload, setSignupPayload] = useState({
		email: "",
		password: "",
	})
	const [recaptchaVerified, setRecaptchaVerified] = useState(false)

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		if (recaptchaVerified) {
			const payload = signupPayload
			try {
				const response = await axios.post(
					`${backendUrl}/authentication/sign-up`,
					payload
				)
				console.log(response)
			} catch (error) {
				console.log(error)
			}
		} else {
			alert("Please verify that you are not a robot")
		}
	}

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		setSignupPayload({
			...signupPayload,
			[event.target.name]: event.target.value,
		})
	}

	return (
		<div>
			<h1>Sign Up</h1>
			<form className="sign-in-form" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Email"
					name="email"
					value={signupPayload.email}
					onChange={handleOnChange}
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					value={signupPayload.password}
					onChange={handleOnChange}
				/>
				<Recaptcha setRecaptchaVerified={setRecaptchaVerified} />
				<button type="submit">Sign Up</button>
				<p>
					{`Password Rules: 👉 At Least: 👉 8 characters - 1 number - 1 special character - 1
					uppercase letter - 1 lowercase letter`}
				</p>

				<br />

				<GoogleOAuth backendUrl={backendUrl} />
			</form>
		</div>
	)
}

export default SignUp
