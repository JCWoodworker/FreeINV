import "./App.scss"
import { useEffect, useState } from "react"
import { Routes, Route, NavLink } from "react-router-dom"
import getBackendUrl from "./config/getBackendUrl.ts"

import { pageRoutingData } from "./pages/pageRoutingData"
import ElementRoutes from "./routes/ElementRoutes"

import Home from "./pages/home/Home"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
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

// const signedInNavLinks = [
// 	{
// 		name: "Locations",
// 		path: "/locations",
// 		icon: "📍",
// 	},
// 	{
// 		name: "Rooms",
// 		path: "/rooms",
// 		icon: "🛏",
// 	},
// 	{
// 		name: "Items",
// 		path: "/items",
// 		icon: "📦",
// 	},
// ]

function App() {
	const [backendUrl, setBackendUrl] = useState("")

	const getBaseBackendUrl = async () => {
		const url = await getBackendUrl()
		setBackendUrl(url)
	}

	useEffect(() => {
		getBaseBackendUrl()
	}, [])

	return (
		<>
			<nav>
				<ul className="nav-link-lists">
					{signedOutNavLinks.map((link) => (
						<li className = "nav-link" key={link.path}>
							<NavLink to={link.path}>
								{({ isActive }) => {
									return isActive ? `${link.name} - ${link.icon}` : link.name
								}}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			{/* <nav>
				<ul>
					{signedInNavLinks.map((link) => (
						<li key={link.path}>
							<NavLink
								to={link.path}
							>
								{({isActive}) => {
									return isActive ? `${link.name} - ${link.icon}` : link.name
								}}
							</NavLink>
						</li>
					))}
				</ul>
			</nav> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn backendUrl={backendUrl} />} />
				<Route path="/signup" element={<SignUp backendUrl={backendUrl} />} />

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
