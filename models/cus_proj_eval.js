const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'cus_proj_eval',
		{
			CPE_ID: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			CUS_ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'customer',
					key: 'CUS_ID',
				},
			},
			EP_ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'emp_proj',
					key: 'EP_ID',
				},
			},
			PROJ_PE_SCORE: {
				type: DataTypes.TINYINT,
				allowNull: false,
			},
			PROJ_PE_COMMENT: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			PROJ_COM_SCORE: {
				type: DataTypes.TINYINT,
				allowNull: false,
			},
			PROJ_COM_COMMENT: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: 'cus_proj_eval',
			timestamps: false,
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'CPE_ID' }],
				},
				{
					name: 'FK_CUS_EVAL_CUS_ORDER',
					using: 'BTREE',
					fields: [{ name: 'CUS_ID' }],
				},
				{
					name: 'FK_CUS_EVAL_EMP_PROJ',
					using: 'BTREE',
					fields: [{ name: 'EP_ID' }],
				},
			],
		}
	);
};
