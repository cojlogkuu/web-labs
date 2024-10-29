import React from 'react';
import {useParams} from "react-router-dom";

const ItemPage = () => {
	const {id} = useParams();
	return (
			<div>
				<p>ItemPage {id}</p>
			</div>
	);
};

export default ItemPage;