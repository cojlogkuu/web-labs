import React, {createContext, useContext, useState} from 'react';

const StonesContext = createContext(null);

const cards = [
	{
		id: 1,
		name: 'Classic Diamond',
		type: 'diamond',
		carats: 12,
		price: 20,
		description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi molestie at amet praesent tortor. Maecenas non tempus at consequat ac '
	},
	{
		id: 2,
		name: 'Emerald Dream',
		type: 'emerald',
		carats: 7,
		price: 100,
		description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi molestie at amet praesent tortor. Maecenas non tempus at consequat ac '
	},
	{
		id: 3,
		name: 'Royal Ruby',
		type: 'ruby',
		carats: 2,
		price: 3000,
		description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin morbi molestie at amet praesent tortor. Maecenas non tempus at consequat ac '
	},
	{
		id: 4,
		name: 'Elegant Diamond',
		type: 'diamond',
		carats: 5,
		price: 500,
		description: 'This diamond is small but very precious, perfect for unique jewelry pieces.'
	},
	{
		id: 5,
		name: 'Vivid Emerald',
		type: 'emerald',
		carats: 10,
		price: 800,
		description: 'An exquisite emerald with a bright green glow and flawless clarity.'
	},
	{
		id: 6,
		name: 'Passionate Ruby',
		type: 'ruby',
		carats: 3,
		price: 2500,
		description: 'A rare ruby with a deep red color and excellent transparency.'
	},
	{
		id: 7,
		name: 'Majestic Diamond',
		type: 'diamond',
		carats: 20,
		price: 1200,
		description: 'A large diamond with impeccable brilliance, ideal for an extravagant piece.'
	},
	{
		id: 8,
		name: 'Lush Emerald',
		type: 'emerald',
		carats: 15,
		price: 900,
		description: 'A high-quality emerald with stunning depth and a rich green hue.'
	},
	{
		id: 9,
		name: 'Exquisite Ruby',
		type: 'ruby',
		carats: 5,
		price: 4000,
		description: 'A stunning ruby with a vibrant red color, perfect for luxurious jewelry.'
	},
	{
		id: 10,
		name: 'Giant Diamond',
		type: 'diamond',
		carats: 25,
		price: 2000,
		description: 'A magnificent diamond with extraordinary brilliance and a large size.'
	},
];

export const useStones = () => useContext(StonesContext);

const StonesProvider = ({children}) => {
	const [stones, setStones] = useState(cards);

	return (
			<StonesContext.Provider value={{stones, setStones}}>
				{children}
			</StonesContext.Provider>
	);
};

export default StonesProvider;