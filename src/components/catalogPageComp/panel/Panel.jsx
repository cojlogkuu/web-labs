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

const Panel = () => {
	return (
			<div className="panel">
				<div className="container">
					<div className="filters">
						<SelectSort
							labelText="Name sorting"
							sortName="name"
							options={nameOptions}
						/>
						<SelectSort
								labelText="Carats sorting"
								sortName="carats"
								options={caratsPriceOptions}
						/>
						<SelectSort
								labelText="Price sorting"
								sortName="price"
								options={caratsPriceOptions}
						/>
						<NameFind>Type name to find</NameFind>
						<Button additionalClass="apply">Apply</Button>
					</div>
					<Button additionalClass="create">Create</Button>
				</div>
			</div>
	);
};

export default Panel;