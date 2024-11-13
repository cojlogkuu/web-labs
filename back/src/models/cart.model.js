import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Stone from './stone.model.js';

const Cart = sequelize.define("Cart", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		references: {
			model: Stone,
			key: 'id',
		}
	},
	count: {
		type: DataTypes.INTEGER,
		allowNull: false,
	}
}, {
	tableName: 'cart',
	timestamps: false,
});

Cart.belongsTo(Stone, { foreignKey: 'id', as: 'stone' });

export default Cart;
