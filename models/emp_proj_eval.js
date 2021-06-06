const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'emp_proj_eval',
		{
			EPE_ID: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			EVALUATOR: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'emp_proj',
					key: 'EP_ID',
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
			tableName: 'emp_proj_eval',
			timestamps: false,
			indexes: [
				{
					name: 'PRIMARY',
					unique: true,
					using: 'BTREE',
					fields: [{ name: 'EPE_ID' }],
				},
				{
					name: 'FK_EVAL_EMP_PROJ',
					using: 'BTREE',
					fields: [{ name: 'EP_ID' }],
				},
				{
					name: 'FK_EVAL_EVALUATOR',
					using: 'BTREE',
					fields: [{ name: 'EVALUATOR' }],
				},
			],
		}
	);
};
