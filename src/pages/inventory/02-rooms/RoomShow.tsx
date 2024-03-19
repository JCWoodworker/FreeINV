import { useContext } from "react"
import { Room, Item } from "../inventoryTypes"
import { Link, useParams } from "react-router-dom"
import { Typography } from "@mui/material"

import NotFound from "../../not-found/NotFound"
import AddDeleteButton from "../../../components/AddDeleteButton"

import { UserInventoryDataContext } from "../../../App"
import InventoryElementBox from "../../../layouts/InventoryElementBox"
import InventoryElementCard from "../../../layouts/InventoryElementCard"
import InventoryShowBox from "../../../layouts/InventoryPageBox"
// import AddImage from "../../../components/AddImage"

const RoomShow: React.FC = () => {
	// const [locationName, setLocationName] = useState<string>("")
	const { userInventoryData } = useContext(UserInventoryDataContext)
	const { id } = useParams()
	// const { state } = useLocation()
	// setLocationName(state.locationName)

	const currentRoom: Room | undefined = userInventoryData
		?.flatMap((location) => location.rooms)
		.find((room) => room?.id === Number(id))
	const locationId = Number(currentRoom?.locationId)
	const itemsList: Item[] | undefined = currentRoom?.items

	if (!currentRoom) {
		return <NotFound />
	}

	return (
		<>
			<InventoryShowBox>
				<Typography variant="h4">{currentRoom?.name}</Typography>
				<Typography variant="caption">{currentRoom?.description}</Typography>
				{/* <AddImage roomId={currentRoom?.id} /> */}
				<InventoryElementBox>
					{itemsList?.map((item) => (
						<Link
							key={item.id}
							to={`/my-inventory/items/${item.id}`}
							state={{ locationId, roomId: id, itemId: item.id }}
						>
							<InventoryElementCard>
								{/* <CardMedia
									component="img"
									height="150"
									image={
										item.image_url ||
										"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
									}
									alt={item.name}
								></CardMedia> */}
								<strong>{item.name}</strong>
							</InventoryElementCard>
						</Link>
					))}
				</InventoryElementBox>
				<div>
					<AddDeleteButton
						buttonText="Add an Item"
						buttonAction="add"
						linkTo="/my-inventory/items/new"
						locationId={locationId}
						roomId={Number(id)}
						roomName={currentRoom?.name}
					/>
				</div>
			</InventoryShowBox>
		</>
	)
}

export default RoomShow
