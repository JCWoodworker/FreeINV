import { useCallback, useState } from "react"
import { useDropzone, FileError } from "react-dropzone"
import { Request } from "../utils/requests/Request"
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
		<div>
			<div {...getRootProps()}>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>Drop the files here ...</p>
				) : image ? (
					<></>
				) : (
					<div>
						<AddDeleteButton buttonText="Upload Image" buttonAction="Add" />
						<em>
							Only .png, .jpeg, .jpg, .webp files under 5MB will be accepted
						</em>
					</div>
				)}
			</div>
			<div>
				{image && (
					<>
						<image
							href={`${URL.createObjectURL(image)}`}
							style={{ width: "200px", height: "auto" }}
						/>
						<p>Image loaded</p>
					</>
				)}
				<div>
					{image && <button onClick={() => onUpload(image)}>Upload</button>}
					{image && <button onClick={() => setImage(null)}>Cancel</button>}
				</div>
			</div>
		</div>
	)
}

export default AddImage
