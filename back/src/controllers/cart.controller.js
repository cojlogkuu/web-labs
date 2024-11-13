import Cart from "../models/cart.model.js";
import Stone from "../models/stone.model.js";
import {Sequelize} from "sequelize";

class CartController {
	static async getCarts (req, res) {
		try {
			const carts = await Cart.findAll({
				attributes: ['id', 'count'], // Include both `id` and `count` fields from `Cart`
				where: {
					count: {
						[Sequelize.Op.gt]: 0, // Greater than 0
					},
				},
				include: [
					{
						model: Stone,
						as: 'stone', // Ensure this matches the association alias, if any
						required: true, // Ensures only Cart items with an associated Stone are returned
					},
				],
			});
			return res.json(carts);
		} catch (error) {
			console.error('Error fetching cart items:', error);
		}
	}

	static async changeCount (req, res) {
		const { count } = req.body;
		const { id } = req.params;

		// id = parseInt(id, 10);
		//
		// if (isNaN(id)) {
		// 	return res.status(400).json({ message: 'Invalid id format' });
		// }
		//
		// console.log(count, id, typeof count, typeof id);

		try {
			const [affectedRows] = await Cart.update(
					{ count }, // Setting 'count' field to 'newCount' value
					{ where: { id } } // Filtering by 'id' in params
			);

			if (affectedRows === 0) {
				return res.status(404).json({ message: `Cart with id=${id} not found.` });
			}

			return res.status(200).json({ message: `Cart with id=${id} was updated.` });
		} catch (error) {
			console.error('Error updating cart:', error);
			return res.status(500).json({ message: 'An error occurred while updating the cart.' });
		}
	}
}

export default CartController;