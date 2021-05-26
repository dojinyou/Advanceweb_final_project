const Sequelize = require('sequelize');
module.exports = class Manager extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				MGR_ID: {
					autoIncrement: true,
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					primaryKey: true,
				},
				EMP_ID: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					references: {
						model: 'Employee',
						key: 'EMP_ID',
					},
					unique: 'FK_MGR_EMP',
				},
				START_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: false,
				},
			},
			{
				sequelize,
				tableName: 'Manager',
				tableName: 'MANAGER',
				charset: 'utf8',
				collate: 'utf8_general_ci',
				timestamps: false,
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'MGR_ID' }],
					},
					{
						name: 'EMP_ID',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'EMP_ID' }],
					},
				],
			}
		);
	}
	static associate(db) {
		db.Manager.belongsTo(db.Employee, { as: 'EMP', foreignKey: 'EMP_ID' });
	}
};
