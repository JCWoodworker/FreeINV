enum EmailFrequency {
	DAILY = "daily",
	WEEKLY = "weekly",
	TWICEWEEKLY = "twiceWeekly",
	MONTHLY = "monthly",
	TWICEMONTHLY = "twiceMonthly",
}

enum Tier {
	BASIC = "basic",
	MID = "mid",
	HIGH = "high",
	UNLIMITED = "unlimited",
}

export interface ProductSpec {
	title: string
	tier: Tier
	allowedLocations: number | string
	allowedRoomsPerLocation: number | string
	allowedItemsPerRoom: number | string
	monthlyFees: number
	inAppAds: boolean
	emailFrequency: EmailFrequency
}

export const productList: ProductSpec[] = [
	{
		title: "Basic (Free)",
		tier: Tier.BASIC,
		allowedLocations: 2,
		allowedRoomsPerLocation: 2,
		allowedItemsPerRoom: 20,
		monthlyFees: 0,
		inAppAds: false,
		emailFrequency: EmailFrequency.WEEKLY,
	},
	{
		title: "Mid Tier (Free)",
		tier: Tier.MID,
		allowedLocations: 5,
		allowedRoomsPerLocation: 5,
		allowedItemsPerRoom: 30,
		monthlyFees: 0,
		inAppAds: false,
		emailFrequency: EmailFrequency.TWICEWEEKLY,
	},
	{
		title: "High Tier (Free)",
		tier: Tier.HIGH,
		allowedLocations: 10,
		allowedRoomsPerLocation: 10,
		allowedItemsPerRoom: 100,
		monthlyFees: 0,
		inAppAds: false,
		emailFrequency: EmailFrequency.DAILY,
	},
	{
		title: "Unlimited (Not Free)",
		tier: Tier.UNLIMITED,
		allowedLocations: "unlimited",
		allowedRoomsPerLocation: "unlimited",
		allowedItemsPerRoom: "unlimited",
		monthlyFees: 5,
		inAppAds: false,
		emailFrequency: EmailFrequency.TWICEMONTHLY,
	},
]
