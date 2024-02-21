import { Request } from "./requests/Request"
import { UserLocationData } from "../pages/inventory/inventoryTypes"

export const hydrateUserData = async (
	accessToken: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setUserInventoryData: React.SetStateAction<any>
) => {
	const response: UserLocationData[] = await Request.get(
		"/all-user-data",
		true,
		accessToken
	)
  setUserInventoryData(response)
}
