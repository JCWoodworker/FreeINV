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
				{/* Show password rules with green and red markers if they are met or not in real time
					Password Rules: 👉 At Least: 👉 8 characters - 1 number - 1 special character 
					- 1	uppercase letter - 1 lowercase letter
				 */}
				<div className="subscription-container">
					<p>
						Subscription -{" "}
						<Link to="/">
							<strong className="strong-highlight">See Options</strong>
						</Link>
					</p>
					<div className="checkbox-container">
						<div className="checkbox-and-label">
							<input
								type="checkbox"
								className="checkbox"
								value="level1"
								checked={selectedCheckbox === "level1"}
								onChange={handleCheckboxChange}
							/>
							<label>Level 1</label>
						</div>
						<div className="checkbox-and-label">
							<input
								type="checkbox"
								className="checkbox"
								value="level2"
								checked={selectedCheckbox === "level2"}
								onChange={handleCheckboxChange}
							/>
							<label>Level 2</label>
						</div>
						<div className="checkbox-and-label">
							<input
								type="checkbox"
								className="checkbox"
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

				<br />

				<h3>Or use Google to sign up/in</h3>
				<GoogleOAuth backendUrl={backendUrl} />
			</form>
		</div>
	)
}

export default SignUp
