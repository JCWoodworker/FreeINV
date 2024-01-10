export interface TopNavLink {
	name: string
	path: string
	icon: string
}

export const signedOutTopNavLinks = [
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

export const signedInTopNavLinks = [
	{
		name: "Home",
		path: "/",
		icon: "🏠",
	},
	{
		name: "My Inventory",
		path: "/my-inventory",
		icon: "📦",
	},
	{
		name: "Sign Out",
		path: "/signout",
		icon: "👤",
	},
]
