import {DataTypes} from "sequelize";
import sequelize from "../db.js";

const Stone = sequelize.define('Stone', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
	},
	type: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	carats: {
		type: DataTypes.DECIMAL(10, 4),
		allowNull: false,
	},
	price: {
		type: DataTypes.DECIMAL(10, 4),
		allowNull: false,
	},
}, {
	tableName: 'stone',
	timestamps: false,
});

export default Stone;
