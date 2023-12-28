import "./App.scss"
import { Routes, Route, NavLink } from "react-router-dom"

import { pageRoutingData } from "./pages/pageRoutingData"

import ElementRoutes from "./routes/ElementRoutes"
import NotFoundPage from "./pages/NotFoundPage"
import Home from "./pages/home/Home"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"

const signedOutNavLinks = [
	{
		name: "Home",
		path: "/",
		icon: "🏠"
	},
	{
		name: "Sign In",
		path: "/signin",
		icon: "👤"
	},
	{
		name: "Sign Up",
		path: "/signup",
		icon: "👤"
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
]

function App() {
	return (
		<>
			<nav>
				<ul>
					{signedOutNavLinks.map((link) => (
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
			</nav>
			<nav>
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
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />

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
