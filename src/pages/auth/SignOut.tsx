import { useNavigate } from "react-router-dom"

import SubmitButton from "../../components/SubmitButton"
import useAuth from "../../hooks/useAuth"

const SignOut: React.FC = () => {
	const { setAuth, setPersist } = useAuth()
	const navigate = useNavigate()
	const submitSignOut = async (event: React.FormEvent) => {
		event.preventDefault()
		setPersist && setPersist(false)
		setAuth &&
			setAuth({ user: "", accessToken: "", apps: [] })
			
		// JUST FOR TESTING UNTIL I SET UP HTTP ONLY COOKIES
		localStorage.removeItem("refreshToken")
		// END OF TEST

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
