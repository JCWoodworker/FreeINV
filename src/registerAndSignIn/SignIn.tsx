import { Form } from "react-bootstrap"
import InputText from "../components/InputText"
import InvButton from "../components/InvButton"
import { useNavigate } from "react-router-dom"

interface Props {
	handleSignIn: () => void
}
const SignIn: React.FC<Props> = ({ handleSignIn }) => {
	const navigate = useNavigate()
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		handleSignIn()
		navigate("/users")
	}
	return (
		<div>
			<h1>Sign In</h1>
			<Form className="sign-in-form">
				<InputText
					labelClassName="input-label-class"
					inputClassName="input-text-class"
					label="Username"
					placeholder="Username"
					required={true}
				/>
				<InputText
					labelClassName="input-label-class"
					inputClassName="input-text-class"
					label="Password"
					placeholder="Password"
					required={true}
				/>
				<InvButton
					label="Sign In"
					classNames="button"
					onClick={() => handleSubmit}
				/>
			</Form>
		</div>
	)
}

export default SignIn
