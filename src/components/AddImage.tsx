import { useCallback, useState } from "react"
import { useDropzone, FileError } from "react-dropzone"
import { Request } from "../utils/index"

const AddImage: React.FC = () => {
	const [image, setImage] = useState<File | null>(null)
	const maxSize: number = 5 * 1024 * 1024
	const maxSizeValidator = (file: File): FileError | null => {
		if (file.size > maxSize) {
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
			const response = await Request.post(
				"/freeinv/image-upload",
				formData,
				true
			)
			const data = await response
			console.log(data)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<>
			<div {...getRootProps()}>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>Drop the files here ...</p>
				) : (
					<p>Click here to select an image</p>
				)}
				<em>Only .png, .jpeg, .jpg, .webp files under 5MB will be accepted</em>
			</div>
			<div>
				{image && (
					<img
						src={`${URL.createObjectURL(image)}`}
						alt=""
						style={{ width: "200px", height: "auto" }}
					/>
				)}
				{image && <button onClick={() => onUpload(image)}>Upload</button>}
			</div>
		</>
	)
}

export default AddImage
