import React, {useEffect, useState} from 'react';
import SelectSort from "./selectSort/SelectSort";
import NameFind from "./nameFind/NameFind";
import Button from "./button/Button";
import './panel.scss';

const nameOptions = new Map([
	['not', 'not sort'],
	['a-z', 'a-z'],
	['z-a', 'z-a'],
]);

const caratsPriceOptions = new Map([
		['not', 'not sort'],
		['ascending', 'ascending'],
		['descending', 'descending'],
]);

const typeOptions = new Map([
		['all', 'all types'],
		['diamond', 'diamond'],
		['emerald', 'emerald'],
		['ruby', 'ruby'],
]);

const Panel = ({setFilteredStones, stones}) => {
	const [nameSort, setNameSort] = useState(nameOptions.keys().next().value);
	const [caratsSort, setCaratsSort] = useState(caratsPriceOptions.keys().next().value);
	const [priceSort, setPriceSort] = useState(caratsPriceOptions.keys().next().value);
	const [typeFilter, setTypeFilter] = useState(typeOptions.keys().next().value);
	const [nameFilter, setNameFilter] = useState("");

	useEffect(() => {
		let filteredItems;

		filteredItems = stones.filter(stone => stone.name.toLowerCase().includes(nameFilter.toLowerCase().trim()));

		if (typeFilter !== 'all') {
			filteredItems = filteredItems.filter(stone => stone.type === typeFilter);
		}

		if (nameSort === 'a-z') {
			filteredItems.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
		} else if (nameSort === 'z-a') {
			filteredItems.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
		}

		if (caratsSort === 'ascending') {
			filteredItems.sort((a, b) => +a.carats - +b.carats);
		} else if (caratsSort === 'descending') {
			filteredItems.sort((a, b) => +b.carats - +a.carats);
		}

		if (priceSort === 'ascending') {
			filteredItems.sort((a, b) => +a.price - +b.price);
		} else if (priceSort === 'descending') {
			filteredItems.sort((a, b) => +b.price - +a.price);
		}

		setFilteredStones(filteredItems);

	}, [nameSort, caratsSort, priceSort, nameFilter, typeFilter]);

	const handleClear = () => {
		setNameFilter("");
		setNameSort(nameOptions.keys().next().value);
		setCaratsSort(caratsPriceOptions.keys().next().value);
		setTypeFilter(typeOptions.keys().next().value);
		setPriceSort(caratsPriceOptions.keys().next().value);
	}

	return (
			<div className="panel">
				<div className="container">
					<div className="filters">
						<SelectSort
							value={nameSort}
							onChange={(e) => setNameSort(e.target.value)}
							labelText="Name sorting"
							sortName="name"
							options={nameOptions}
						/>
						<SelectSort
								value={caratsSort}
								onChange={(e) => setCaratsSort(e.target.value)}
								labelText="Carats sorting"
								sortName="carats"
								options={caratsPriceOptions}
						/>
						<SelectSort
								value={priceSort}
								onChange={(e) => setPriceSort(e.target.value)}
								labelText="Price sorting"
								sortName="price"
								options={caratsPriceOptions}
						/>
						<SelectSort
							value={typeFilter}
							onChange={(e) => setTypeFilter(e.target.value)}
							labelText="Type filter"
							sortName="type"
							options={typeOptions}
						/>
						<NameFind
							value={nameFilter}
							onChange={(e) => setNameFilter(e.target.value)}
						>Type name to find</NameFind>
					</div>
					<Button
							onClick={handleClear}
					>Clear</Button>
				</div>
			</div>
	);
};

export default Panel;