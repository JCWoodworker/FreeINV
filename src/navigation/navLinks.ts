export interface NavLink {
	name: string
	path: string
	icon: string
}

export const loggedOutLinks = [
	{
		name: "Sign Up",
		path: "/signup",
		icon: "👤",
	},
	{
		name: "Login",
		path: "/login",
		icon: "👤",
	},
]

export const loggedInLinks = [
	{
		name: "My Locations",
		path: "/my-inventory",
		icon: "📦",
	},
	{
		name: "Sign Out",
		path: "/logout",
		icon: "👤",
	},
]
