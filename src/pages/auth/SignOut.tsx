import { useNavigate } from "react-router-dom"
import { LoggedInUser } from "../../App"

import SubmitButton from "../../components/SubmitButton"

interface Props {
	setUser: (value: LoggedInUser) => void
	setShowUserNavLinks: (value: boolean) => void
}

const SignOut: React.FC<Props> = ({ setUser, setShowUserNavLinks }) => {
	const navigate = useNavigate()
	const submitSignOut = async (event: React.FormEvent) => {
		event.preventDefault()
		localStorage.removeItem("user")
		setUser({
			id: undefined,
			email: undefined
		})
		setShowUserNavLinks(false)
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
