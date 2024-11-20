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

export async function updateCartCount({stone_id, count, processing}) {
	try {
		const response = await cartApi.post(`/`, {count, stone_id, processing});
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

export async function deleteCart(id) {
	try {
		await cartApi.delete(`/${id}`);
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