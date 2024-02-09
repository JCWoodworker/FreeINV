import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { Request } from "../utils/Request"
interface Props {
	children: JSX.Element
}

export interface AuthInterface {
	user: string
	accessToken: string
}

export interface AuthContext {
	auth: AuthInterface
	setAuth: React.Dispatch<React.SetStateAction<AuthInterface>>
	persist: boolean
	setPersist: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContext>({
	auth: { user: "", accessToken: "" },
	setAuth: () => {},
	persist: false,
	setPersist: () => {},
})

export const AuthProvider: React.FC<Props> = ({ children }) => {
	const navigate = useNavigate()
	const persistedData = localStorage.getItem("persistUser")
	const initialPersistState = persistedData ? JSON.parse(persistedData) : false
	const [auth, setAuth] = useState<AuthInterface>({
		user: "",
		accessToken: "",
	})
	const [persist, setPersist] = useState(initialPersistState)

	const checkForPersistedUser = async (
		user: string | null,
		authToken: string | null,
		refreshToken: string | null
	) => {
		if (user !== "" && authToken !== "") {
			setAuth({ user: user || "", accessToken: authToken || "" })
		}
		if (refreshToken) {
			Request.refresh().then((response) => {
				if (response.status === 200) {
					setAuth({
						// This should actually set the user but we're using GOOGLE-USER-REFRESH for now
						// since nothing is being returned from the backend besides tokens.
						user: "GOOGLE-USER-REFRESH" || "",
						accessToken: authToken || "",
					})
				} else if (response.status === 401) {
					localStorage.removeItem("user")
					localStorage.removeItem("accessToken")
					localStorage.removeItem("refreshToken")
					localStorage.setItem("persistUser", "false")
					navigate("/")
				}
			})
		} else if (persist && !refreshToken) {
			localStorage.removeItem("user")
			localStorage.removeItem("accessToken")
			localStorage.removeItem("refreshToken")
			localStorage.setItem("persistUser", "false")
			navigate("/")
		}
	}

	useEffect(() => {
		localStorage.setItem("persistUser", JSON.stringify(persist))
	}, [persist])

	useEffect(() => {
		const user = localStorage.getItem("user")
		const authToken = localStorage.getItem("accessToken")
		const refreshToken = localStorage.getItem("refreshToken")
		checkForPersistedUser(user, authToken, refreshToken)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
