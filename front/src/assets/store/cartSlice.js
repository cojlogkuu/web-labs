import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCarts, updateCartCount} from "../api/api";

export const fetchCarts = createAsyncThunk('carts/fetchCarts', async () => {
	return await getCarts();
});

export const updateCount = createAsyncThunk('carts/updateCount', async ({id, count}) => {
	await updateCartCount(id, count);
	return {id, count};
});

const initialCartState = {
	carts: [],
	loading: false,
	error: null,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialCartState,
	reducers: {},
	extraReducers: (builder) => {
		builder
				.addCase(fetchCarts.pending, (state) => {
					state.loading = true;
				})
				.addCase(fetchCarts.fulfilled, (state, action) => {
					state.loading = false;
					state.carts = action.payload;
				})
				.addCase(fetchCarts.rejected, (state, action) => {
					state.loading = false;
					state.error = action.error.message;
				})
				.addCase(updateCount.fulfilled, (state, action) => {
					const {id, count} = action.payload;
					const cart = state.carts.find((cart) => cart.id === id);
					if (cart) {cart.count = count}
				})
				.addCase(updateCount.rejected, (state, action) => {
					state.error = action.error.message
				});
	},
});

export default cartSlice.reducer;