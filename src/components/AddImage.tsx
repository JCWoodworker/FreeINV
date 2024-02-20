import { useCallback, useState } from "react"
import { useDropzone, FileError } from "react-dropzone"
import { Request } from "../utils/requests/Request"
import { Button, Image } from "react-bootstrap"
import AddDeleteButton from "./AddDeleteButton"

interface Props {
	locationId?: number | undefined
	roomId?: number | undefined
	itemId?: number | undefined
}

interface InventoryId {
	inventoryId: string
	inventoryType: "location" | "room" | "item"
}

const AddImage: React.FC<Props> = ({
	locationId = undefined,
	roomId = undefined,
	itemId = undefined,
}) => {
	const [image, setImage] = useState<File | null>(null)

	let inventoryId: InventoryId = {} as InventoryId
	if (locationId) {
		inventoryId = {
			inventoryId: locationId.toString(),
			inventoryType: "location",
		}
	} else if (roomId) {
		inventoryId = { inventoryId: roomId.toString(), inventoryType: "room" }
	} else if (itemId) {
		inventoryId = { inventoryId: itemId.toString(), inventoryType: "item" }
	}

	const maxSize: number = 5 * 1024 * 1024
	const maxSizeValidator = (file: File): FileError | null => {
		if (file.size > maxSize) {
			alert("File is too large, must be less than 5MB")
			return {
				code: "file-too-large",
				message: "File is too large, must be less than 5MB",
			}
		} else {
			return null
		}
	}

	const onDrop = useCallback(async (acceptedFiles: File[]) => {
		setImage(acceptedFiles[0])
	}, [])
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		validator: maxSizeValidator,
		maxFiles: 1,
		accept: { "image/*": [".png", ".jpeg", ".jpg", ".webp"] },
	})

	const onUpload = async (file: File) => {
		try {
			const formData = new FormData()
			formData.append("image", file)
			formData.append("inventoryId", inventoryId.inventoryId)
			formData.append("inventoryType", inventoryId.inventoryType)
			const response = await Request.post(
				"/subapps/image-upload",
				formData,
				true
			)
			const data = await response
			alert(data.message)
			setImage(null)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className="image-upload-component m-2 p-2 d-flex flex-column justify-content-center align-items-center">
			<div {...getRootProps()}>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>Drop the files here ...</p>
				) : image ? (
					<></>
				) : (
					<div className="d-flex flex-column justify-content-center align-items-center gap-2">
						<AddDeleteButton buttonText="Upload Image" buttonAction="Add" />
						<em>
							Only .png, .jpeg, .jpg, .webp files under 5MB will be accepted
						</em>
					</div>
				)}
			</div>
			<div className="d-flex flex-column justify-content-center align-items-center gap-2">
				{image && (
					<>
						<Image
							src={`${URL.createObjectURL(image)}`}
							alt=""
							style={{ width: "200px", height: "auto" }}
						/>
						<p>Image loaded</p>
					</>
				)}
				<div className="d-flex flex-row justify-content-center align-items-center gap-2">
					{image && <Button onClick={() => onUpload(image)}>Upload</Button>}
					{image && <Button onClick={() => setImage(null)}>Cancel</Button>}
				</div>
			</div>
		</div>
	)
}

export default AddImage
