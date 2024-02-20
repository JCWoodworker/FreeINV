export interface NewLocationDto {
	name: string
	description: string
	type: string
}

export interface NewRoomDto {
	name: string
	description: string
	type: string
	locationId: number
}

export interface NewItemDto {
	name: string
	description: string
	type: string
	roomId: number
}

export interface LoginDto {
	email: string
	password: string
}

export interface SignupDto {
	email: string
	password: string
	subappId: string
}

export interface GoogleOAuthDto {
	token: string
	signUpOrIn: string
	subappId?: string
	subscriptionTier?: string
}
