const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'salary',
		{
			SAL_ID: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			SAL_RANK: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			SAL_YEAR: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			SALARY: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: 'salary',
			timestamps: false,
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'SAL_ID' }],
				},
			],
		}
	);
};
