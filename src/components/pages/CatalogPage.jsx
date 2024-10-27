import React from 'react';
import './catalogPage.scss';
import Panel from "../catalogPageComp/panel/Panel";
import Card from "../catalogPageComp/card/Card";
import diamondImg from "../../assets/imgs/diamond-removebg-preview.png";
import emeraldImg from "../../assets/imgs/emerald-removebg-preview.png";
import rubyImg from "../../assets/imgs/ruby-removebg-preview.png";

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
	{
		id: 4,
		name: 'diamond 2',
		type: 'diamond',
		carats: 5,
		price: 500,
		description: 'This diamond is small but very precious, perfect for unique jewelry pieces.'
	},
	{
		id: 5,
		name: 'emerald 2',
		type: 'emerald',
		carats: 10,
		price: 800,
		description: 'An exquisite emerald with a bright green glow and flawless clarity.'
	},
	{
		id: 6,
		name: 'ruby 2',
		type: 'ruby',
		carats: 3,
		price: 2500,
		description: 'A rare ruby with a deep red color and excellent transparency.'
	},
	{
		id: 7,
		name: 'diamond 3',
		type: 'diamond',
		carats: 20,
		price: 1200,
		description: 'A large diamond with impeccable brilliance, ideal for an extravagant piece.'
	},
	{
		id: 8,
		name: 'emerald 3',
		type: 'emerald',
		carats: 15,
		price: 900,
		description: 'A high-quality emerald with stunning depth and a rich green hue.'
	},
	{
		id: 9,
		name: 'ruby 3',
		type: 'ruby',
		carats: 5,
		price: 4000,
		description: 'A stunning ruby with a vibrant red color, perfect for luxurious jewelry.'
	},
	{
		id: 10,
		name: 'diamond 4',
		type: 'diamond',
		carats: 25,
		price: 2000,
		description: 'A magnificent diamond with extraordinary brilliance and a large size.'
	},
];

const images = {
	diamond: diamondImg,
	emerald: emeraldImg,
	ruby: rubyImg,
};

const CatalogPage = () => {
	return (
			<main>
				<Panel></Panel>
				<div className="cardContainer container">
					{cards.map((card) => (
							<Card
								key={card.id}
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