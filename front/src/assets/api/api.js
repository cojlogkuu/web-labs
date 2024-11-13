import axios from "axios";

const stonesApi = axios.create({baseURL: 'http://localhost:5000/api/stones'});
const cartApi = axios.create({baseURL: 'http://localhost:5000/api/carts'});

export async function getStones({
																	caratsSort = 'not',
																	priceSort = 'not',
																	nameSort = 'not',
																	typeFilter = 'all',
																	nameFilter = '',
																}) {
	try {
		const response = await stonesApi.get('/', {
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
		const response = await stonesApi.get(`/${id}`);
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

export async function getCarts() {
	try {
		const response = await cartApi.get('/');
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

export async function updateCartCount(id, count) {
	try {
		await cartApi.put(`/${id}`, {count});
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