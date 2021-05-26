const Sequelize = require('sequelize');
module.exports = class Customer extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				CUS_ID: {
					autoIncrement: true,
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					primaryKey: true,
				},
				CUS_NAME: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
			},
			{
				sequelize,
				tableName: 'Customer',
				tableName: 'CUSTOMER',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'CUS_ID' }],
					},
				],
			}
		);
	}
	static associate(db) {
		db.Customer.hasMany(db.Cus_order, {
			as: 'CUS_ORDERs',
			foreignKey: 'CUS_ID',
		});
	}
};
