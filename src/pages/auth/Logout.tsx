import { useEffect } from "react"
import { useNavigate } from "react-router"
import useAuth from "../../hooks/useAuth"

const Logout = () => {
	const navigate = useNavigate()
	const { setAuth, persist, setPersist } = useAuth()
	const logout = () => {
		localStorage.removeItem("user")
		localStorage.removeItem("accessToken")
		localStorage.removeItem("refreshToken")
		setAuth({ user: "", accessToken: "" })
		setPersist(false)
	}

	logout()
	useEffect(() => {
		navigate("/")
	}, [navigate, persist])

	return (
		<div>
			<h1>Logout</h1>
		</div>
	)
}

export default Logout
