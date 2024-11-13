import React, {useCallback, useEffect, useState} from 'react';
import './catalogPage.scss';
import Panel from "../../catalogPageComp/panel/Panel";
import Card from "../../catalogPageComp/card/Card";
import Loader from "../../generalComp/loader/Loader";
import {getStones} from "../../../assets/api/api";
import {images} from "../../../assets/data/imgTypes";

const CatalogPage = () => {
	const [stones, setStones] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [nameSort, setNameSort] = useState('not');
	const [caratsSort, setCaratsSort] = useState('not');
	const [priceSort, setPriceSort] = useState('not');
	const [typeFilter, setTypeFilter] = useState('all');
	const [nameFilter, setNameFilter] = useState("");

	const fetchStones = useCallback(async () => {
		setIsLoading(true);
		const stones = await getStones({
			nameFilter,
			nameSort,
			caratsSort,
			priceSort,
			typeFilter,
		});
		setStones(stones);
		setIsLoading(false);
	}, [nameSort, caratsSort, priceSort, typeFilter, nameFilter])

	useEffect(() => {
		fetchStones().then()
	}, [fetchStones]);


	return (
			<main className="catalogPage">
				<Panel
						setStones={setStones}
						stones={stones}
						nameSort={nameSort}
						setNameSort={setNameSort}
						caratsSort={caratsSort}
						setCaratsSort={setCaratsSort}
						priceSort={priceSort}
						setPriceSort={setPriceSort}
						typeFilter={typeFilter}
						setTypeFilter={setTypeFilter}
						nameFilter={nameFilter}
						setNameFilter={setNameFilter}
				/>
				<div className="cardContainer container">

					{isLoading ? (
							<div className='container'>
								<Loader />
							</div>) :
							(stones.map((card) => (
							<Card
								key={card.id}
								id={card.id}
								name={card.name}
								description={card.description}
								img={images[card.type]}
								price={card.price}
								carats={card.carats}
							/>
					)))}
				</div>
			</main>
	);
};

export default CatalogPage;