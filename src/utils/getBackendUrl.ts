export const getBackendUrl = async () => {
	try {
		const environment: string = import.meta.env.VITE_ENVIRONMENT
		switch (environment) {
			case "dev":
				return import.meta.env.VITE_BACKEND_URL_DEV
			case "preprod":
				return import.meta.env.VITE_BACKEND_URL_PREPROD
			case "prod":
				return import.meta.env.VITE_BACKEND_URL_PROD
			default:
				return "http://localhost:3000/api/v1"
		}
	} catch (error) {
		console.log(error)
		return "http://localhost:3000/api/v1"
	}
}
