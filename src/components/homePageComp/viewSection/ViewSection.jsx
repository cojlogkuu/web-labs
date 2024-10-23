import React from 'react';
import './viewSection.scss';
import Card from '../viewCard/ViewCard';
import ViewMore from "../../generalComp/viewMore/ViewMore";
import diamondImg from '../../../assets/imgs/diamond-removebg-preview.png';
import emeraldImg from '../../../assets/imgs/emerald-removebg-preview.png';
import rubyImg from '../../../assets/imgs/ruby-removebg-preview.png';

const cards = [
	{
		id: 1,
		name: 'diamond 1',
		type: 'diamond',
		carats: 12,
		price: 20,
		description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi molestie at amet praesent tortor. Maecenas non tempus at consequat ac '
	},
	{
		id: 2,
		name: 'emerald 1',
		type: 'emerald',
		carats: 7,
		price: 100,
		description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi molestie at amet praesent tortor. Maecenas non tempus at consequat ac '
	},
	{
		id: 3,
		name: 'ruby 1',
		type: 'ruby',
		carats: 2,
		price: 3000,
		description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi molestie at amet praesent tortor. Maecenas non tempus at consequat ac '
	},
];

const images = {
	diamond: diamondImg,
	emerald: emeraldImg,
	ruby: rubyImg,
};

const ViewSection = () => {
	return (
			<section className="view">
				<div className="container">
					<h1>Our stones</h1>
					<div className="cardContainer">
						{cards.map(({id, name, price, description, type}) => {
							return (
									<Card
										img={images[type]}
										name={name}
										key={id}
										price={price}
									>{description}</Card>
							)
						})}
					</div>
					<div className="buttonContainer">
						<ViewMore
								onClick={() => null}
						/>
					</div>
				</div>
			</section>
	);
};

export default ViewSection;