export interface UserLocationData {
	id: number
	name: string
	description: string
	type: "location"
	rooms: Room[]
	image_url: string
	orphan_location: boolean
}

export interface Room {
	id: number
	name: string
	description: string
	type: "room"
	locationId: number
	items: Item[]
	image_url: string
}

export interface Item {
	id: number
	name: string
	description: string
	type: "item"
	roomId: number
	image_url: string
}

