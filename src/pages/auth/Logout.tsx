import { useNavigate } from "react-router"
import useAuth from "../../hooks/useAuth"

const Logout = () => {
	const navigate = useNavigate()
	const { setAuth, setPersist } = useAuth()
	const onClick = () => {
		localStorage.removeItem("user")
		localStorage.removeItem("accessToken")
		localStorage.removeItem("refreshToken")
		setAuth({ user: "", accessToken: "" })
		setPersist(false)
		navigate("/")
	}

	return (
		<div>
			<h1>Logout</h1>
			<button onClick={() => onClick()}>Logout</button>
		</div>
	)
}

export default Logout
