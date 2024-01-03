// Location IDs start at 101
// Room IDs start at 201
// Item IDs start at 301

// Make sure to follow some sort of pattern in the backend when persisting these to the database.
// Sort of like a consistent SKU prefix for each of the locations, rooms, and items.

export interface InventoryRecord {
	name: string
	description: string
	id: number
	parentId: number
	parentType: ParentType
	elementType: ElementType
}

export enum ParentType {
	USER = "user",
	LOCATION = "locations",
	ROOM = "rooms",
	ITEM = "items",
}

export enum ElementType {
	LOCATION = "locations",
	ROOM = "rooms",
	ITEM = "items",
}

export const userData = {
	userId: 1,
	userEmail: "tester@test.com",
	allLocations: <InventoryRecord[]>[
		{
			name: "Storage Unit",
			description: "Storage unit for items",
			id: 101,
			parentId: 1,
			parentType: ParentType.USER,
			elementType: ElementType.LOCATION,
		},
		{
			name: "Home",
			description: "Home on Azalea Dr",
			id: 102,
			parentId: 1,
			parentType: ParentType.USER,
			elementType: ElementType.LOCATION,
		},
	],
	allRooms: <InventoryRecord[]>[
		{
			name: "Storage Room",
			description: "The only room in the storage unit",
			id: 201,
			parentId: 101,
			parentType: ParentType.LOCATION,
			elementType: ElementType.ROOM,
		},
		{
			name: "Garage",
			description: "Two car attached garage with wall shelving",
			id: 202,
			parentId: 102,
			parentType: ParentType.LOCATION,
			elementType: ElementType.ROOM,
		},
		{
			name: "Basement",
			description: "The one-room basement of the house",
			id: 203,
			parentId: 102,
			parentType: ParentType.LOCATION,
			elementType: ElementType.ROOM,
		},
	],
	allItems: <InventoryRecord[]>[
		{
			name: "Exercise Bike",
			description: "Gold's Gym Exercise Bike",
			id: 301,
			parentId: 201,
			parentType: ParentType.ROOM,
			elementType: ElementType.ITEM,
		},
		{
			name: "Yoga Ball",
			description: "Deflated orange yoga ball",
			id: 302,
			parentId: 201,
			parentType: ParentType.ROOM,
			elementType: ElementType.ITEM,
		},
		{
			name: "Baby Dome",
			description: "Wooden climbing dome for babies and toddlers",
			id: 303,
			parentId: 202,
			parentType: ParentType.ROOM,
			elementType: ElementType.ITEM,
		},
		{
			name: "Christmas Ornaments",
			description: "A box full of Christmas ornaments",
			id: 304,
			parentId: 203,
			parentType: ParentType.ROOM,
			elementType: ElementType.ITEM,
		},
	],
}
