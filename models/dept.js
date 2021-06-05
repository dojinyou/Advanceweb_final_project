const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'dept',
		{
			DEPT_ID: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			DEPT_NAME: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			DEPT_LEVEL: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			DEPT_UPPER: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					model: 'dept',
					key: 'DEPT_ID',
				},
			},
		},
		{
			sequelize,
			tableName: 'dept',
			timestamps: false,
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'DEPT_ID' }],
				},
			],
		}
	);
};
