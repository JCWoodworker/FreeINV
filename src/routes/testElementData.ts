// Location IDs start at 101
// Room IDs start at 201
// Item IDs start at 301

// Make sure to follow some sort of patter in the backend when persisting these to the database.
// Sort of like a consistent SKU prefix for each of the locations, rooms, and items.

export const locations = [
	{
		name: "Storage Unit",
    description: "Storage unit for items",
		id: "101",
	},
	{
		name: "Home",
    description: "Home on Azalea Dr",
		id: "102",
	},
]

export const rooms = [
	{
		name: "Storage Room",
    description: "The only room in the storage unit",
		id: "201",
		locationId: "101",
	},
	{
		name: "Garage",
    description: "Two car attached garage with wall shelving",
		id: "202",
		locationId: "102",
	},
	{
		name: "Basement",
    description: "The one-room basement of the house",
		id: "203",
		locationId: "102",
	},
]

export const items = [
	{
		name: "Exercise Bike",
    description: "Gold's Gym Exercise Bike",
		id: "301",
		roomId: "201",
	},
	{
		name: "Yoga Ball",
    description: "Deflated orange yoga ball",
		id: "302",
		roomId: "201",
	},
	{
		name: "Baby Dome",
    description: "Wooden climbing dome for babies and toddlers",
		id: "303",
		roomId: "202",
	},
	{
		name: "Christmas Ornaments",
    description: "A box full of Christmas ornaments",
		id: "304",
		roomId: "203",
	},
]
