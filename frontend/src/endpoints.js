// Api Url set in the env file
const apiUrl = process.env.REACT_APP_API_URL;

// Endpoints for all the REST APIs
const endpoints = {
	images: {
		getImages: () => `${apiUrl}/`,
		getPaginatedImages: (page) => `${apiUrl}/${page}`,
		imageDetails: (imageId) => `${apiUrl}/show/${imageId}`,
		addImage: () => `${apiUrl}/`,
		updateImage: (imageId) => `${apiUrl}/${imageId}/edit`,
		deleteImage: (imageId) => `${apiUrl}/delete/${imageId}`,
		searchImage: (name) => `${apiUrl}/search/${name}`,
	},
};

export default endpoints;
