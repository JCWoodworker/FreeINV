import { useNavigate } from "react-router-dom"

interface Props {
	setUser: (value: unknown) => void
	setShowUserNavLinks: (value: boolean) => void
}

const SignOut: React.FC<Props> = ({ setUser, setShowUserNavLinks }) => {
	const navigate = useNavigate()
	const submitSignOut = async (event: React.FormEvent) => {
		event.preventDefault()
		localStorage.removeItem("user")
		setUser(null)
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
