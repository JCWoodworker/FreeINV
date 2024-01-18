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
						Select Your Subscription -{" "}
						<Link to="/">
							<strong>See Option Level Details</strong>
						</Link>
					</p>
					<div>
						<div>
							<input
								type="checkbox"
								value="basic"
								checked={selectedCheckbox === "basic"}
								onChange={handleCheckboxChange}
							/>
							<label>Basic</label>
						</div>
						<div>
							<input
								type="checkbox"
								value="mid"
								checked={selectedCheckbox === "mid"}
								onChange={handleCheckboxChange}
							/>
							<label>Mid</label>
						</div>
						<div>
							<input
								type="checkbox"
								value="high"
								checked={selectedCheckbox === "high"}
								onChange={handleCheckboxChange}
							/>
							<label>High</label>
						</div>
						<div>
							<input
								type="checkbox"
								value="unlimited"
								checked={selectedCheckbox === "unlimited"}
								onChange={handleCheckboxChange}
							/>
							<label>Unlimited</label>
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
