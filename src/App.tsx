import "./App.scss"
import { useEffect, useState } from "react"
import { Routes, Route, NavLink } from "react-router-dom"
import getBackendUrl from "./config/getBackendUrl.ts"

import { pageRoutingData } from "./pages/pageRoutingData"
import ElementRoutes from "./routes/ElementRoutes"

import Home from "./pages/home/Home"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import SignOut from "./pages/auth/SignOut.tsx"
import NotFoundPage from "./pages/not-found/NotFound"

const signedOutNavLinks = [
	{
		name: "Home",
		path: "/",
		icon: "🏠",
	},
	{
		name: "Sign In",
		path: "/signin",
		icon: "👤",
	},
	{
		name: "Sign Up",
		path: "/signup",
		icon: "👤",
	},
]

const signedInNavLinks = [
	{
		name: "Locations",
		path: "/locations",
		icon: "📍",
	},
	{
		name: "Rooms",
		path: "/rooms",
		icon: "🛏",
	},
	{
		name: "Items",
		path: "/items",
		icon: "📦",
	},
	{
		name: "Sign Out",
		path: "/signout",
		icon: "👤",
	},
]

function App() {
	const [backendUrl, setBackendUrl] = useState("")
	const [user, setUser] = useState<unknown>(null)
	const [showUserNavLinks, setShowUserNavLinks] = useState(false)

	const checkForLoggedInUser = async () => {
		const loggedInUser = await localStorage.getItem("user")
		if (!loggedInUser) {
			setShowUserNavLinks(false)
			setUser(null)
		} else {
			setUser(loggedInUser)
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
		console.log(`Checking for logged in user...`)
		checkForLoggedInUser()
	}, [])

	return (
		<>
			{showUserNavLinks ? (
				<nav>
					<ul>
						{signedInNavLinks.map((link) => (
							<li key={link.path}>
								<NavLink to={link.path}>
									{({ isActive }) => {
										return isActive ? `${link.name} ${link.icon}` : link.name
									}}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			) : (
				<nav>
					<ul className="nav-link-lists">
						{signedOutNavLinks.map((link) => (
							<li className="nav-link" key={link.path}>
								<NavLink to={link.path}>
									{({ isActive }) => {
										return isActive ? `${link.name} ${link.icon}` : link.name
									}}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
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
