import { useState } from "react"
import GoogleOAuth from "./GoogleOAuth"
import axios from "axios"

const SignIn = () => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	})
	const [loginTokens, setLoginTokens] = useState({
		accessToken: "",
		refreshToken: "",
	})

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		const payload = credentials
		try {
			const response = await axios.post(
				"http://localhost:3000/authentication/sign-in",
				payload
			)
			if (response) {
				setLoginTokens(response.data)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		})
	}

	console.log(
		`loginTokens: ${loginTokens.accessToken}, ${loginTokens.refreshToken}`
	)

	return (
		<div className="GoogleOAuth">
			<h1>Sign In</h1>
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
				<button type="submit">Sign In</button>
			</form>
			<br />
			<h3>OR</h3>

			<GoogleOAuth />
		</div>
	)
}

export default SignIn
