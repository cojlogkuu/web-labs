import React, {useState} from 'react';
import './catalogPage.scss';
import Panel from "../catalogPageComp/panel/Panel";
import Card from "../catalogPageComp/card/Card";
import {useStones} from "../context/StonesContext";
import {images} from "../../assets/data/imgTypes";

const CatalogPage = () => {
	const {stones} = useStones();
	const [filteredStones, setFilteredStones] = useState(stones)

	return (
			<main className="catalogPage">
				<Panel
						stones={stones}
						setFilteredStones={setFilteredStones}
				/>
				<div className="cardContainer container">
					{filteredStones.map((card) => (
							<Card
								key={card.id}
								id={card.id}
								name={card.name}
								description={card.description}
								img={images[card.type]}
								price={card.price}
								carats={card.carats}
							/>
					))}
				</div>
			</main>
	);
};

export default CatalogPage;