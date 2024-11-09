import Stone from "../models/stone.model.js";

class StoneController {
	static async getStones(req, res) {
		const {caratsSort, priceSort, nameSort, typeFilter, nameFilter} = req.query;
		console.log(nameSort, priceSort, caratsSort, typeFilter, nameFilter);
			try {
				let stones = await Stone.findAll()

				stones = stones.filter(stone => stone.name.toLowerCase().includes(nameFilter.toLowerCase().trim()));


				if (typeFilter && typeFilter !== 'all') {
					stones = stones.filter(stone => stone.type === typeFilter);
				}

				if (nameSort) {
					if (nameSort === 'a-z') {
						stones.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
					} else if (nameSort === 'z-a') {
						stones.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
					}
				}

				if (caratsSort) {
					if (caratsSort === 'ascending') {
						stones.sort((a, b) => +a.carats - +b.carats);
					} else if (caratsSort === 'descending') {
						stones.sort((a, b) => +b.carats - +a.carats);
					}
				}

				if (priceSort) {
					if (priceSort === 'ascending') {
						stones.sort((a, b) => +a.price - +b.price);
					} else if (priceSort === 'descending') {
						stones.sort((a, b) => +b.price - +a.price);
					}
				}

				return res.status(200).json(stones);
			}
			catch(err) {
				console.log(err);
			}
	}

	static async getStoneById(req, res) {
		const {id} = req.params;

		try {
			const stone = await Stone.findByPk(id)
			if (stone) {
				return res.status(200).json(stone);
			} else {
				return res.status(404).json({error: 'Not Found'});
			}
		} catch (error) {
			console.log(error);
		}
	}
}

export default StoneController;