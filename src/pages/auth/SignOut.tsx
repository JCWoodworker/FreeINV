import { useNavigate } from "react-router-dom"
import { LoggedInUser } from "../../App"

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
		<div>
			<form onSubmit={submitSignOut}>
				<button type="submit">Sign Out</button>
			</form>
		</div>
	)
}

export default SignOut
