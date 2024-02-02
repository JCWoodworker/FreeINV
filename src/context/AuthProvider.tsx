import { createContext, useState, useEffect } from "react"

interface Props {
	children: JSX.Element
}

export interface AuthInterface {
	user: string
	accessToken: string
	apps: string[]
}

export interface AuthContextInterface {
	auth: AuthInterface
	setAuth: React.Dispatch<React.SetStateAction<AuthInterface>>
	persist: boolean
	setPersist: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextInterface | null>(null)

export const AuthProvider: React.FC<Props> = ({ children }) => {
	const persistedData = localStorage.getItem("persist")
	const initialPersistState = persistedData ? JSON.parse(persistedData) : false
	const [auth, setAuth] = useState<AuthInterface>({
		user: "",
		accessToken: "",
		apps: [],
	})
	const [persist, setPersist] = useState(initialPersistState)

	useEffect(() => {
		localStorage.setItem("persist", JSON.stringify(persist))
	}, [persist])

	useEffect(() => {
		console.log(`auth: ${JSON.stringify(auth)}`)
	}, [auth])

	return (
		<AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
