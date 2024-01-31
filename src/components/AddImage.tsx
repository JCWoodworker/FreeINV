import { useCallback } from "react"
import { useDropzone, FileError } from "react-dropzone"
// import axios from "axios"

const AddImage: React.FC = () => {
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
	const onDrop = useCallback((acceptedFiles: File[]) => {
		console.log(acceptedFiles[0])
		// try {
		// 	axios.post(
		// 		"http://localhost:3000/api/v1/freeinv/image-upload",
		// 		acceptedFiles[0]
		// 	)
		// } catch (err) {
		// 	console.log(err)
		// }
	}, [])
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		validator: maxSizeValidator,
		maxFiles: 1,
		accept: { "image/*": [".png", ".jpeg", ".jpg", ".webp"] },
	})

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the files here ...</p>
			) : (
				<p>Click here to select an image</p>
			)}
			<em>Only .png, .jpeg, .jpg, .webp files under 5MB will be accepted</em>
		</div>
	)
}

export default AddImage
