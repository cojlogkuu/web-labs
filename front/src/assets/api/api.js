import axios from "axios";

const api = axios.create({baseURL: 'http://localhost:5000/api/stones'});

export async function getStones({
																	caratsSort = 'not',
																	priceSort = 'not',
																	nameSort = 'not',
																	typeFilter = 'all',
																	nameFilter = '',
																}) {
	try {
		const response = await api.get('/', {
			params: {
				caratsSort,
				priceSort,
				nameSort,
				typeFilter,
				nameFilter,
			}
		})
		return response.data
	} catch (error) {
		if (error.response) {
			console.log(error.response.data);
			console.log(error.response.status);
			console.log(error.response.headers);
		} else {
			console.log(`Error: ${error.message}`);
		}
	}
}

export async function getStoneById(id) {
	try {
		const response = await api.get(`/${id}`);
		return response.data
	} catch (error) {
		if (error.response) {
			console.log(error.response.data);
			console.log(error.response.status);
			console.log(error.response.headers);
		} else {
			console.log(`Error: ${error.message}`);
		}
	}
}