import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import InventoryElementBox from "../../../layouts/InventoryElementBox"
import InventoryElementCard from "../../../layouts/InventoryElementCard"
import { Typography, CardMedia } from "@mui/material"

import NotFound from "../../not-found/NotFound"

import { UserInventoryDataContext } from "../../../App"
import AddDeleteButton from "../../../components/AddDeleteButton"
import InventoryShowBox from "../../../layouts/InventoryPageBox"
import AddImage from "../../../components/AddImage"
import ShowHideComponent from "../../../components/ShowHideComponent"

const LocationShow: React.FC = () => {
	const { userInventoryData } = useContext(UserInventoryDataContext)
	const { id } = useParams()
	const currentLocation = userInventoryData?.find(
		(location) => location.id === Number(id)
	)
	if (!currentLocation) {
		return <NotFound />
	}

	return (
		<InventoryShowBox>
			<div>
				<Typography variant="h3">{currentLocation?.name}</Typography>
				<Typography variant="caption">
					{currentLocation?.description}
				</Typography>
			</div>
			<InventoryElementBox>
				{currentLocation?.rooms?.map((room) => (
					<Link
						key={room.id}
						to={`/my-inventory/rooms/${room.id}`}
						state={{
							locationId: id,
							roomId: room.id,
							locationName: currentLocation?.name,
						}}
					>
						<InventoryElementCard key={room.id}>
							<CardMedia
								component="img"
								height="150"
								image={
									room.image_url ||
									"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
								}
								alt={room.name}
							></CardMedia>
							<strong>{room.name}</strong>
						</InventoryElementCard>
					</Link>
				))}
			</InventoryElementBox>
			<div>
				<AddDeleteButton
					buttonAction="add"
					buttonText="Add Room"
					linkTo="/my-inventory/rooms/new"
					locationName={currentLocation?.name}
					locationId={currentLocation?.id}
				/>
				<AddDeleteButton buttonAction="delete" buttonText="Delete Location" />
			</div>
			<ShowHideComponent
				showMessage="Add Image"
				hideMessage="Cancel Adding Image"
			>
				<AddImage locationId={currentLocation?.id} />
			</ShowHideComponent>
		</InventoryShowBox>
	)
}

export default LocationShow
