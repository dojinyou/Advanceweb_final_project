const Sequelize = require('sequelize');
module.exports = class Cus_proj_eval extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				CPE_ID: {
					autoIncrement: true,
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					primaryKey: true,
				},
				ORDER_ID: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					references: {
						model: 'Cus_order',
						key: 'ORDER_ID',
					},
				},
				EP_ID: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					references: {
						model: 'Emp_proj',
						key: 'EMP_ID',
					},
				},
				PROJ_PE_SCORE: {
					type: Sequelize.TINYINT,
					allowNull: false,
				},
				PROJ_PE_COMMENT: {
					type: Sequelize.STRING(255),
					allowNull: true,
				},
				PROJ_COM_SCORE: {
					type: Sequelize.TINYINT,
					allowNull: false,
				},
				PROJ_COM_COMMENT: {
					type: Sequelize.STRING(255),
					allowNull: true,
				},
			},
			{
				sequelize,
				modelName: 'Cus_proj_eval',
				tableName: 'CUS_PROJ_EVAL',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
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
						fields: [{ name: 'ORDER_ID' }],
					},
					{
						name: 'FK_CUS_EVAL_EMP_PROJ',
						using: 'BTREE',
						fields: [{ name: 'EP_ID' }],
					},
				],
			}
		);
	}
	static associate(db) {
		db.Cus_proj_eval.belongsTo(db.Cus_order, {
			as: 'ORDER',
			foreignKey: 'ORDER_ID',
		});
		db.Cus_proj_eval.belongsTo(db.Emp_proj, { as: 'EP', foreignKey: 'EP_ID' });
	}
};
