import React from 'react';
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

const Panel = (props) => {
	const handleClear = () => {
		props.setNameFilter("");
		props.setNameSort(nameOptions.keys().next().value);
		props.setCaratsSort(caratsPriceOptions.keys().next().value);
		props.setTypeFilter(typeOptions.keys().next().value);
		props.setPriceSort(caratsPriceOptions.keys().next().value);
	}

	return (
			<div className="panel">
				<div className="container">
					<div className="filters">
						<SelectSort
							value={props.nameSort}
							onChange={(e) => props.setNameSort(e.target.value)}
							labelText="Name sorting"
							sortName="name"
							options={nameOptions}
						/>
						<SelectSort
								value={props.caratsSort}
								onChange={(e) => props.setCaratsSort(e.target.value)}
								labelText="Carats sorting"
								sortName="carats"
								options={caratsPriceOptions}
						/>
						<SelectSort
								value={props.priceSort}
								onChange={(e) => props.setPriceSort(e.target.value)}
								labelText="Price sorting"
								sortName="price"
								options={caratsPriceOptions}
						/>
						<SelectSort
							value={props.typeFilter}
							onChange={(e) => props.setTypeFilter(e.target.value)}
							labelText="Type filter"
							sortName="type"
							options={typeOptions}
						/>
						<NameFind
							value={props.nameFilter}
							onChange={(e) => props.setNameFilter(e.target.value)}
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