import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Stone from './stone.model.js';

const Cart = sequelize.define('Cart', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	stone_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: 'stone',
			key: 'id',
		},
	},
	count: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	processing: {
		type: DataTypes.STRING(20),
		allowNull: false,
	},
}, {
	tableName: 'cart',
	timestamps: false,
});

Cart.belongsTo(Stone, { foreignKey: 'stone_id', as: 'stone' });

export default Cart;
