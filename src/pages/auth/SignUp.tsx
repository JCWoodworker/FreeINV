import { useState } from "react"
import { useNavigate, Link, useLocation } from "react-router-dom"
import { Stack, Form } from "react-bootstrap"

import Recaptcha from "./Recaptcha"
import GoogleOAuth from "./GoogleOAuth"
import SubmitButton from "../../components/SubmitButton"

import { Request, SignInSignUpDto } from "../../utils/index"

interface Props {
	setUserIsLoggedIn: (value: boolean) => void
}

const SignUp: React.FC<Props> = ({ setUserIsLoggedIn }) => {
	const [signupPayload, setSignupPayload] = useState<SignInSignUpDto>({
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
				const response = await Request.post(
					"/authentication/sign-up",
					payload,
					false
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
		<Stack className="m-2 d-flex justify-content-center align-items-center">
			<h1>Sign Up</h1>
			<GoogleOAuth
				setUserIsLoggedIn={setUserIsLoggedIn}
			/>
			<h2>Or</h2>

			<Form
				onSubmit={handleSubmit}
				className="d-flex flex-column justify-content-center align-items-center gap-3"
			>
				<Form.Group>
					<input
						type="text"
						placeholder="Email"
						name="email"
						value={signupPayload.email}
						onChange={handleOnChange}
					/>
				</Form.Group>
				<Form.Group>
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={signupPayload.password}
						onChange={handleOnChange}
					/>
				</Form.Group>

				<Link to="/">View Subscription Levels</Link>
				<p>Select a subscription:</p>

				<div className="d-flex flex-row justify-content-center align-items-center gap-3">
					<Form.Group controlId="checkbox">
						<input
							type="checkbox"
							value="basic"
							checked={selectedCheckbox === "basic"}
							onChange={handleCheckboxChange}
						/>
						<Form.Label>Basic</Form.Label>
					</Form.Group>
					<Form.Group controlId="checkbox">
						<input
							type="checkbox"
							value="mid"
							checked={selectedCheckbox === "mid"}
							onChange={handleCheckboxChange}
						/>
						<Form.Label>Mid</Form.Label>
					</Form.Group>
					<Form.Group controlId="checkbox">
						<input
							type="checkbox"
							value="high"
							checked={selectedCheckbox === "high"}
							onChange={handleCheckboxChange}
						/>
						<Form.Label>High</Form.Label>
					</Form.Group>
					<Form.Group controlId="checkbox">
						<input
							type="checkbox"
							value="unlimited"
							checked={selectedCheckbox === "unlimited"}
							onChange={handleCheckboxChange}
						/>
						<Form.Label>Unlimited</Form.Label>
					</Form.Group>
				</div>

				<Recaptcha setRecaptchaVerified={setRecaptchaVerified} />
				<SubmitButton buttonText="Sign Up" />
			</Form>
		</Stack>
	)
}

export default SignUp
