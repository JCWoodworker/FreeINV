import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

interface FormPayload {
	name: string
	username: string
	password: string
}


const SignUp: React.FC = () => {
	const [successfulSignup, setSuccessfulSignup] = useState(false)
	const [formPayload, setFormPayload] = useState({
		name: "",
		username: "",
		password: "",
	})
	const [successMessage, setSuccessMessage] = useState<string>("")
	const [errorMessage, setErrorMessage] = useState<string>("")
	const navigate = useNavigate()

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormPayload(({
			...formPayload,
			[event.target.name]: event.target.value,
		}))
	}

	const addNewUser = (payload: FormPayload) => {
		const newUser = {
			name: payload.name,
			username: payload.username,
			password: payload.password,
			avatar: "https://i.pravatar.cc/300",
			id: payload.username,
			isPresent: true,
		}
		console.log(newUser)
		return true
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
		if (!addNewUser(formPayload)) {
			return
		}
		setErrorMessage("")
		setSuccessMessage("User created successfully")
		setSuccessfulSignup(true)
	}

	let showForm = (
		<>
			<h1>Sign Up</h1>
			<Form className="sign-in-up-form" onSubmit={handleSubmit}>
				<Form.Group className="text-input-group">
					<Form.Label className="input-label-class">Name</Form.Label>
					<Form.Control
						className="input-text-class"
						type="text"
						placeholder="Enter Name"
						name="name"
						onChange={handleInputChange}
						required={true}
						value={formPayload.name}
					/>
				</Form.Group>
				<Form.Group className="text-input-group">
					<Form.Label className="input-label-class">Username</Form.Label>
					<Form.Control
						className="input-text-class"
						type="text"
						placeholder="Enter Username"
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
						type="password"
						placeholder="Enter Password"
						name="password"
						onChange={handleInputChange}
						required={true}
						value={formPayload.password}
					/>
				</Form.Group>
				{errorMessage}
				{successMessage}
				<Button
					className="button"
					type="submit"
				>
					Submit
				</Button>
			</Form>
		</>
	)

	if (successfulSignup) {
		showForm = (
			<>
				<h1>Sign Up Successful</h1>
				<p>Redirecting you to the login page in 3 seconds</p>
			</>
		)
		setTimeout(() => {
			navigate("/signin")
		}, 3000)
	}

	return <div>{showForm}</div>
}

export default SignUp
