const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'career',
		{
			CAR_ID: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			EMP_ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'employee',
					key: 'EMP_ID',
				},
			},
			CAREER_NAME: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			CAREER_FROM_DATE: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			CAREER_TO_DATE: {
				type: DataTypes.DATEONLY,
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: 'career',
			timestamps: false,
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'CAR_ID' }],
				},
				{
					name: 'FK_CARRER_EMP',
					using: 'BTREE',
					fields: [{ name: 'EMP_ID' }],
				},
			],
		}
	);
};
