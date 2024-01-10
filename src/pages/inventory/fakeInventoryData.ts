import { UserLocationData } from "./types"

export const fakeInventoryData: UserLocationData[] = [
	{
		id: 1,
		name: "Location A",
		description: "This is location A",
		type: "location",
		rooms: [
			{
				id: 1,
				name: "Room AA",
				description: "This is room AA",
				type: "room",
				locationId: 1,
				items: [
					{
						id: 1,
						name: "Item AAA",
						description: "This is item AAA",
						type: "item",
						roomId: 1,
					},
					{
						id: 2,
						name: "Item BBB",
						description: "This is item BBB",
						type: "item",
						roomId: 1,
					},
				],
			},
			{
				id: 3,
				name: "Room CCC",
				description: "This is room CCC",
				type: "room",
				locationId: 1,
				items: [
					{
						id: 5,
						name: "Item AAA",
						description: "This is item AAA",
						type: "item",
						roomId: 3,
					},
					{
						id: 6,
						name: "Item BBB",
						description: "This is item BBB",
						type: "item",
						roomId: 3,
					},
				],
			},
		],
	},
	{
		id: 2,
		name: "Location B",
		description: "This is location B",
		type: "location",
		rooms: [
			{
				id: 2,
				name: "Room BB",
				description: "This is room BB",
				type: "room",
				locationId: 1,
				items: [
					{
						id: 3,
						name: "Item BBB",
						description: "This is item BBB",
						type: "item",
						roomId: 1,
					},
					{
						id: 4,
						name: "Item CCC",
						description: "This is item CCC",
						type: "item",
						roomId: 1,
					},
				],
			},
		],
	},
]
