import axios from "axios"
import { useAppContext } from "../AppContext"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

const SignUpInButtons: React.FC = () => {
	const { appState, setAppState } = useAppContext()
	const navigate = useNavigate()
	const checkForRefreshToken = async () => {
		try {
			const response = await axios.post(`${appState.backendUrl}/auth/refresh`, {
				headers: {
					withCredentials: true,
				},
			})
			if (response.status === 200) {
				setAppState({
					...appState,
					userIsLoaded: true,
					userInfo: {
						name: response.data.name,
						username: response.data.username,
						avatar: "https://i.pravatar.cc/300",
						id: response.data.id,
					},
				})
				navigate("/users")
				return true
			}
			console.log(`Refresh Status: ${response.status}`)
			return false
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="app-body">
			<Form className="sign-in-up-container">
				<Link to="/signup" className="react-router-Link">
					<Button className="button">Sign Up</Button>
				</Link>
				<Link to="/signin" className="react-router-Link">
					<Button className="button" onClick={checkForRefreshToken}>
						Sign In
					</Button>
				</Link>
			</Form>
		</div>
	)
}

export default SignUpInButtons
