import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import InventoryElementBox from "../../../layouts/InventoryElementBox"
import InventoryElementCard from "../../../layouts/InventoryElementCard"
import { Typography } from "@mui/material"

import NotFound from "../../not-found/NotFound"

import { UserInventoryDataContext } from "../../../App"
import AddDeleteButton from "../../../components/AddDeleteButton"
import InventoryShowBox from "../../../layouts/InventoryShowBox"
// import AddImage from "../../../components/AddImage"

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
			<Typography variant="h5">{currentLocation?.name}</Typography>
			<Typography variant="caption">{currentLocation?.description}</Typography>
			{/* <AddImage locationId={currentLocation?.id} /> */}
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
				<AddDeleteButton
					buttonAction="delete"
					buttonText="Delete Location"
					locationId={currentLocation?.id}
				/>
			</div>
		</InventoryShowBox>
	)
}

export default LocationShow
