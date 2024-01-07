export interface UserLocationData {
	id: number
	name: string
	description: string
	type: "location"
	rooms: Room[]
}

export interface Room {
	id: number
	name: string
	description: string
	type: "room"
	locationId: number
	items: Item[]
}

export interface Item {
	id: number
	name: string
	description: string
	type: "item"
	roomId: number
}

