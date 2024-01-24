import { useState } from "react"
import AWS from "aws-sdk"

function ImageUploader() {
	const [file, setFile] = useState<any>(null)
	const S3_BUCKET = import.meta.env.VITE_AWS_S3_BUCKET
	const REGION = import.meta.env.VITE_AWS_REGION

	const uploadFile = async () => {
		AWS.config.update({
			accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
			secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
		})
		const s3 = new AWS.S3({
			params: { Bucket: S3_BUCKET },
			region: REGION,
		})

		const params = {
			Bucket: S3_BUCKET,
			Key: file?.name,
			Body: file,
		}

		const upload = s3
			.putObject(params)
			.on("httpUploadProgress", () => {
				console.log("Uploading ...")
			})
			.promise()

		await upload.then((err, data) => {
			console.log(err)
			debugger
			alert("File uploaded successfully.")
		})
	}

	const handleFileChange = (
		event: React.ChangeEvent<HTMLInputElement> | any
	) => {
		const file = event.target.files[0]
		setFile(file)
	}
	return (
		<div className="Image Uploader">
			<div>
				<input type="file" onChange={handleFileChange} />
				<button onClick={uploadFile}>Upload</button>
			</div>
		</div>
	)
}

export default ImageUploader
