import { useState } from "react"
import { useNavigate, Link, useLocation } from "react-router-dom"
import Recaptcha from "./Recaptcha"
import axios from "axios"
import GoogleOAuth from "./GoogleOAuth"
import SubmitButton from "../../components/SubmitButton"

interface Props {
	backendUrl: string
}

const SignUp: React.FC<Props> = ({ backendUrl }) => {
	const [signupPayload, setSignupPayload] = useState({
		email: "",
		password: "",
	})
	const [recaptchaVerified, setRecaptchaVerified] = useState<boolean>(false)
	const { state } = useLocation()
	const [selectedCheckbox, setSelectedCheckbox] = useState<string>(state)
	const navigate = useNavigate()

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		if (recaptchaVerified) {
			const payload = signupPayload
			try {
				const response = await axios.post(
					`${backendUrl}/authentication/sign-up`,
					payload
				)
				if (response) {
					alert("Success! Click OK to continue to the login page")
					navigate("/signin")
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
		setSignupPayload({
			...signupPayload,
			[event.target.name]: event.target.value,
		})
	}

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedCheckbox(e.target.value)
	}

	return (
		<div>
			<h1>Sign Up</h1>
			<GoogleOAuth backendUrl={backendUrl} />
			<h2>Or</h2>
			<form onSubmit={handleSubmit}>
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
				{/* Show password rules with green and red markers if they are met or not in real time
					Password Rules: 👉 At Least: 👉 8 characters - 1 number - 1 special character 
					- 1	uppercase letter - 1 lowercase letter
				 */}
				<div>
					<p>
						Subscription -{" "}
						<Link to="/">
							<strong>See Options</strong>
						</Link>
					</p>
					<div>
						<div>
							<input
								type="checkbox"
								value="level1"
								checked={selectedCheckbox === "level1"}
								onChange={handleCheckboxChange}
							/>
							<label>Level 1</label>
						</div>
						<div>
							<input
								type="checkbox"
								value="level2"
								checked={selectedCheckbox === "level2"}
								onChange={handleCheckboxChange}
							/>
							<label>Level 2</label>
						</div>
						<div>
							<input
								type="checkbox"
								value="level3"
								checked={selectedCheckbox === "level3"}
								onChange={handleCheckboxChange}
							/>
							<label>Level 3</label>
						</div>
					</div>
				</div>
				<Recaptcha setRecaptchaVerified={setRecaptchaVerified} />
				<SubmitButton buttonText="Sign Up" />
			</form>
		</div>
	)
}

export default SignUp
