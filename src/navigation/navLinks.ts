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
		name: "All Locations",
		path: "/my-inventory",
		icon: "📦",
	},
	{
		name: "All Rooms",
		path: "/my-inventory/rooms",
		icon: "🚪",
	},
	{
		name: "All Items",
		path: "/my-inventory/items",
		icon: "🏷️",
	},
	{
		name: "Sign Out",
		path: "/logout",
		icon: "👤",
	},
]
