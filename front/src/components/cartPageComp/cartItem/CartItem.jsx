import React from 'react';
import './cartItem.scss';
import CountInput from "../countInput/CountInput";

const CartItem = ({img, name, count, price, updateCount, processing, deleteCart}) => {
	return (
			<div className="cartItem">
				<div className="img">
					<img src={img} alt=""/>
				</div>
				<h2>{name}</h2>
				<span className="processing">{processing}</span>
				<CountInput
					startCount={count}
					price={price}
					updateCount={updateCount}
					deleteCart={deleteCart}
				/>
				<span className="price">{+price}$</span>
			</div>
	);
};

export default CartItem;