import Cart from "../models/cart.model.js";
import Stone from "../models/stone.model.js";
import {Sequelize} from "sequelize";

class CartController {
	static async getCarts (req, res) {
		try {
			const carts = await Cart.findAll({
				attributes: ['id', 'count', 'processing'],
				where: {
					count: {
						[Sequelize.Op.gt]: 0, // Greater than 0
					},
				},
				include: [
					{
						model: Stone,
						as: 'stone',
						required: true,
					},
				],
			});
			return res.json(carts);
		} catch (error) {
			console.error('Error fetching cart items:', error);
		}
	}

	static async deleteCart(req, res) {
		const {id} = req.params;
		try {
			const deleted = Cart.destroy({where: {id: id}});
			if (deleted) {
				return res.status(204).json({message: `Cart with id=${id} was deleted successfully`});
			}
		} catch (error) {
			console.log(`Error deleting cart ${id} - ${error}`);
		}
	}

	static async createOrUpdateCart(req, res) {
		const { stone_id, count, processing } = req.body;

		try {
			const existingCart = await Cart.findOne({
				where: {
					stone_id,
					processing,
				},
				include: [
					{
						model: Stone,
						as: 'stone',
					},
				],
			});

			if (existingCart) {
				existingCart.count = count;
				await existingCart.save();

				await existingCart.reload();

				return res.status(200).json({
					message: `Updated cart with stone_id=${stone_id} and processing='${processing}'.`,
					cart: {
						id: existingCart.id,
						count: existingCart.count,
						processing: existingCart.processing,
						stone: existingCart.stone,
					},
				});
			} else {
				const newCart = await Cart.create({
					stone_id,
					count,
					processing,
				});

				const cartWithStone = await Cart.findOne({
					where: { id: newCart.id },
					include: [
						{
							model: Stone,
							as: 'stone',
						},
					],
				});

				return res.status(201).json({
					message: "Created a new cart entry.",
					cart: {
						id: cartWithStone.id,
						count: cartWithStone.count,
						processing: cartWithStone.processing,
						stone: cartWithStone.stone,
					},
				});
			}
		} catch (error) {
			console.error("Error in createOrUpdateCart:", error);
			return res.status(500).json({ message: "Internal server error." });
		}
	}

}

export default CartController;