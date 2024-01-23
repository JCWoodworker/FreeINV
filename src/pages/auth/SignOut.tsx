import { useNavigate } from "react-router-dom"

import SubmitButton from "../../components/SubmitButton"

interface Props {
	setUserIsLoggedIn: (value: boolean) => void
}

const SignOut: React.FC<Props> = ({ setUserIsLoggedIn }) => {
	const navigate = useNavigate()
	const submitSignOut = async (event: React.FormEvent) => {
		event.preventDefault()
		localStorage.clear()
		setUserIsLoggedIn(false)
		navigate("/")
	}

	return (
		<div className="mt-5">
			<form onSubmit={submitSignOut}>
				<SubmitButton buttonText="Click Here to Sign Out" />
			</form>
		</div>
	)
}

export default SignOut
