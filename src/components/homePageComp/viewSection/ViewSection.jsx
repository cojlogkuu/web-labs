import React from 'react';
import './viewSection.scss';
import Card from '../viewCard/ViewCard';
import ViewMore from "../viewMore/ViewMore";
import {images} from "../../../assets/data/imgTypes";
import {useStones} from "../../context/StonesContext";

const ViewSection = () => {
	const {stones} = useStones()
	const [itemsCounter, setItemsCounter] = React.useState(3);
	return (
			<section className="view">
				<div className="container">
					<h1>Our stones</h1>
					<div className="cardContainer">
						{stones.slice(0, itemsCounter).map(({id, name, carats, description, type}) => {
							return (
									<Card
										img={images[type]}
										name={name}
										key={id}
										carats={carats}
									>{description}</Card>
							)
						})}
					</div>
					<div className="buttonContainer">
						{itemsCounter < stones.length && (
								<ViewMore
								onClick={() => setItemsCounter(prevState => prevState + 3)}
						/>
						)}
					</div>
				</div>
			</section>
	);
};

export default ViewSection;