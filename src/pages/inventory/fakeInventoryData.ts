import { UserLocationData } from "./inventoryTypes"

export const fakeInventoryData: UserLocationData[] = [
	{
		id: 1,
		name: "House",
		description: "Home on Black Plain Rd",
		type: "location",
		rooms: [
			{
				id: 1,
				name: "Garage",
				description: "The garage",
				type: "room",
				locationId: 1,
				items: [
					{
						id: 1,
						name: "Table Saw",
						description: "Grizzley cabinet saw",
						type: "item",
						roomId: 1,
					},
					{
						id: 2,
						name: "Hammer",
						description: "Cheap Home Depot Hammer",
						type: "item",
						roomId: 1,
					},
				],
			},
			{
				id: 3,
				name: "Basement",
				description: "The unfinished side of the basement",
				type: "room",
				locationId: 1,
				items: [
					{
						id: 5,
						name: "Treadmill",
						description: "Nordictrack treadmill",
						type: "item",
						roomId: 3,
					},
					{
						id: 6,
						name: "Photo Albums",
						description: "Box of old pictures",
						type: "item",
						roomId: 3,
					},
				],
			},
		],
	},
	{
		id: 2,
		name: "Storage Unit",
		description: "Storage Unit in Exeter",
		type: "location",
		rooms: [
			{
				id: 2,
				name: "The Only Room",
				description: "There is only one room in the storage unit",
				type: "room",
				locationId: 1,
				items: [
					{
						id: 3,
						name: "Exercise Bike",
						description: "Cheap Gold's Gym Bike from Walmart",
						type: "item",
						roomId: 1,
					},
					{
						id: 4,
						name: "Yoga Ball",
						description: "Orange yoga ball from Target",
						type: "item",
						roomId: 1,
					},
				],
			},
		],
	},
]
