import {
	useState,
	createContext,
	useContext,
	ReactNode,
	Dispatch,
	SetStateAction,
} from "react"

interface UserInfo {
	name: string
	username: string
	avatar: string
	id: string
}

interface AppContextType {
	userIsLoaded: boolean
	userInfo: UserInfo
	backendUrl: string
}

const AppContext = createContext<
	| {
			appState: AppContextType
			setAppState: Dispatch<SetStateAction<AppContextType>>
    }
	| undefined
>(undefined)

interface AppContextProviderProps {
	children: ReactNode
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
	children,
}) => {
	const backendUrl = import.meta.env.VITE_ENVIRONMENT === "development"
	? import.meta.env.VITE_BACKEND_URL_DEV
	: import.meta.env.VITE_ENVIRONMENT === "preprod"
	? import.meta.env.VITE_BACKEND_URL_PREPROD
	: import.meta.env.VITE_ENVIRONMENT === "prod"
	? import.meta.env.VITE_BACKEND_URL_PROD
	: 'mistakes were made'
	
	const [appState, setAppState] = useState<AppContextType>({
		userIsLoaded: false,
		userInfo: {
			name: "",
			username: "",
			avatar: "",
			id: "",
		},
		backendUrl: backendUrl,
	})

	return (
		<AppContext.Provider value={{ appState, setAppState }}>
			{children}
		</AppContext.Provider>
	)
}

const useAppContext = () => {
	const context = useContext(AppContext)
	if (!context) {
		throw new Error("useAppContext must be used within an AppContextProvider")
	}
	return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { AppContextProvider, useAppContext }