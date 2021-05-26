const Sequelize = require('sequelize');
module.exports = class Cus_order extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				ORDER_ID: {
					autoIncrement: true,
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					primaryKey: true,
				},
				CUS_ID: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					references: {
						model: 'Customer',
						key: 'CUS_ID',
					},
				},
				ORDER_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: false,
				},
				ORDER_COMMENT: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
			},
			{
				sequelize,
				modelName: 'Cus_order',
				tableName: 'CUS_ORDER',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'ORDER_ID' }],
					},
					{
						name: 'FK_ORDER_CUSTOMER',
						using: 'BTREE',
						fields: [{ name: 'CUS_ID' }],
					},
				],
			}
		);
	}
	static associate(db) {
		db.Cus_order.belongsTo(db.Customder, { as: 'CU', foreignKey: 'CUS_ID' });
		db.Cus_order.hasMany(db.Cus_proj_eval, {
			as: 'CUS_PROJ_EVALs',
			foreignKey: 'ORDER_ID',
		});
		db.Cus_order.hasMany(db.Project, {
			as: 'PROJECTs',
			foreignKey: 'ORDER_ID',
		});
	}
};
