import "./App.scss"
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import getBackendUrl from "./config/getBackendUrl.ts"

import { pageRoutingData } from "./pages/pageRoutingData"
import ElementRoutes from "./routes/ElementRoutes"

import TopNavLinks from "./pages/navigation/TopNavLinks.tsx"
import Home from "./pages/home/Home"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import SignOut from "./pages/auth/SignOut.tsx"
import NotFoundPage from "./pages/not-found/NotFound"

import {
	signedOutTopNavLinks,
	signedInTopNavLinks,
} from "./pages/navigation/links.ts"

export interface LoggedInUser {
	id: number | undefined
	email: string | undefined
}

function App() {
	const [backendUrl, setBackendUrl] = useState("")
	const [user, setUser] = useState<LoggedInUser>({
		id: undefined,
		email: undefined,
	})
	const [showUserNavLinks, setShowUserNavLinks] = useState(false)

	const checkForLoggedInUser = async () => {
		const loggedInUser = await localStorage.getItem("user")
		if (!loggedInUser) {
			setShowUserNavLinks(false)
			setUser({
				id: undefined,
				email: undefined,
			})
		} else {
			const parsedUser = JSON.parse(loggedInUser)
			setUser(parsedUser)
			setShowUserNavLinks(true)
		}
	}

	const getBaseBackendUrl = async () => {
		const url = await getBackendUrl()
		setBackendUrl(url)
	}

	useEffect(() => {
		getBaseBackendUrl()
	}, [])

	useEffect(() => {
		checkForLoggedInUser()
	}, [])

	return (
		<>
			{showUserNavLinks ? (
				<TopNavLinks navLinkList={signedInTopNavLinks} />
			) : (
				<TopNavLinks navLinkList={signedOutTopNavLinks} />
			)}
			<Routes>
				<Route path="/" element={<Home loggedInUser={user} />} />
				<Route path="/signin" element={<SignIn backendUrl={backendUrl} />} />
				<Route path="/signup" element={<SignUp backendUrl={backendUrl} />} />
				{/* Need logic to make sure user can't go to /signout if not logged in */}
				<Route
					path="/signout"
					element={
						<SignOut
							setUser={setUser}
							setShowUserNavLinks={setShowUserNavLinks}
						/>
					}
				/>

				{pageRoutingData.map((page) => (
					<Route
						key={page.path}
						path={`/${page.path}/*`}
						element={
							<ElementRoutes elementName={page.name} elementPath={page.path} />
						}
					/>
				))}

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
