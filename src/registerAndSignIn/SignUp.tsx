import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { fakeUserList } from "../utils/fakeUserList"

interface FormPayload {
	name: string
	username: string
	password: string
}

const SignUp = () => {
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
		event.preventDefault()
		const { name, value } = event.target
		setFormPayload((prevPayload) => ({
			...prevPayload,
			[name]: value,
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
		if (fakeUserList.find((user) => user.username === payload.username)) {
			setErrorMessage("Username already exists")
			return
		}
		fakeUserList.push(newUser)
		setErrorMessage("")
		setSuccessMessage("User created successfully")
		setSuccessfulSignup(true)
	}

	const handleSubmit = () => {
		addNewUser(formPayload)
		alert("Clicked Submit - nothing happened")
	}

	let showForm = (
		<>
			<h1>Sign Up</h1>
			<Form className="sign-in-up-form">
				<Form.Group className="text-input-group">
					<Form.Label className="input-label-class">Name</Form.Label>
					<Form.Control
						className="input-text-class"
						type="text"
						placeholder="Enter Name"
						name="name"
						value={formPayload.name}
						onChange={() => {
							handleInputChange
						}}
					/>
				</Form.Group>
				<Form.Group className="text-input-group">
					<Form.Label className="input-label-class">Username</Form.Label>
					<Form.Control
						className="input-text-class"
						type="text"
						placeholder="Enter Username"
						name="username"
						value={formPayload.username}
						onChange={() => {
							handleInputChange
						}}
					/>
				</Form.Group>
				<Form.Group className="text-input-group">
					<Form.Label className="input-label-class">Password</Form.Label>
					<Form.Control
						className="input-text-class"
						type="password"
						placeholder="Enter Password"
						name="password"
						value={formPayload.password}
						onChange={() => {
							handleInputChange
						}}
					/>
				</Form.Group>
				{errorMessage}
				{successMessage}
				<Button
					className="button"
					type="submit"
					onClick={() => {
						handleSubmit()
					}}
				>
					Submit
				</Button>
			</Form>
		</>
	)

	return <div>{showForm}</div>
}

export default SignUp
