import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getStoneById} from "../../../assets/api/api";
import {images} from "../../../assets/data/imgTypes";
import Button from "../../generalComp/button/Button";
import NavButton from "../../generalComp/navButton/NavButton";
import './itemPage.scss';
import {useNavigate} from "react-router-dom";
import {updateCount} from "../../../assets/store/cartSlice";
import {useDispatch} from "react-redux";

const ItemPage = () => {
	const {id} = useParams();
	const [stone, setStone] = useState({});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		getStoneById(id).then((stone) => setStone(stone));
	})

	return (
		<main className="itemPage">
			<div className="container">
				<div className="itemContainer">
					<div className="img">
						<img src={images[stone.type]} alt=""/>
					</div>
					<div className="text">
							<span className="type">Type: {stone.type}</span>
							<span className="carats">Carats: {+stone.carats}</span>
						<h2 className="name">{stone.name}</h2>
						<p className="description">{stone.description}</p>
					</div>
				</div>
				<div className="itemFooter">
					<span className="price">Price: {+stone.price}$</span>
					<div className="buttons">
						<Button
								onClick={async () => {
							await dispatch(updateCount({id, count: 1}));
							navigate("/cart");
						}}
								additionalClass="itemButton">Add to cart</Button>
						<NavButton to="/catalog">Go back</NavButton>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ItemPage;