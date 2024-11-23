import React, {useEffect, useState} from 'react';
import './cartPage.scss';
import CartItem from "../../cartPageComp/cartItem/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchCarts, updateCount, removeCart} from "../../../assets/store/cartSlice";
import Loader from "../../generalComp/loader/Loader";
import {images} from "../../../assets/data/imgTypes";
import NavButton from "../../generalComp/navButton/NavButton";
import Button from "../../generalComp/button/Button";

const CartPage = () => {
	const dispatch = useDispatch();
	const {carts, loading, error} = useSelector((state) => state.cart);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		dispatch(fetchCarts());
	}, [dispatch]);

	useEffect(() => {
		const totalPrice = carts.reduce((acc, cart) => acc + (cart.stone.price * cart.count), 0)
		setTotalPrice(totalPrice);
	}, [carts]);

	if (loading) return <div className="container" style={{display: "flex", justifyContent: "space-between"}}><Loader /></div>;
	if (error) return <div className="container">Something went wrong...</div>

	return (
			<main className="cartPage">
				<div className="container">
					<h1>Shopping Cart</h1>
					<div className="items-container">
						{carts.map(cart => (
								<CartItem
									img={images[cart.stone.type]}
									name={cart.stone.name}
									key={cart.id}
									price={cart.stone.price}
									count={cart.count}
									processing={cart.processing}
									updateCount={(newCount) => dispatch(updateCount({
										stone_id: cart.stone.id,
										processing: cart.processing,
										count: newCount,
									}))}
									deleteCart={() => dispatch(removeCart(cart.id))}
								/>
						))}
					</div>
					<p className="totalPrice">
						Total price: {+totalPrice}$
					</p>
					<div className="buttons">
						<NavButton to="/catalog" additionalClass="back">Back to catalog</NavButton>
						<Button onClick={() => alert("Coming soon...")} additionalClass="continue">Continue</Button>
					</div>
				</div>
			</main>
	);
};

export default CartPage;