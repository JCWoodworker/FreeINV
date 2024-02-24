import { useState } from "react"
import { Request } from "../../utils/requests/Request"

interface Props {
	subscriptionTier: string
}

const SignUpManual: React.FC<Props> = ({ subscriptionTier }) => {
	const [formState, setFormState] = useState({
		email: "",
		password: "",
		subappId: "FREEINV",
		subscriptionTier,
	})
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const payload = formState
		try {
			const response = await Request.post(
				"/authentication/sign-up",
				payload,
				false
			)
			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<h1>Signup</h1>
			<form onSubmit={onSubmit}>
				<label>
					email-
					<input
						type="text"
						onChange={(e) =>
							setFormState({ ...formState, email: e.target.value })
						}
					></input>
				</label>
				<label>
					password-
					<input
						type="text"
						onChange={(e) =>
							setFormState({ ...formState, password: e.target.value })
						}
					></input>
				</label>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default SignUpManual
