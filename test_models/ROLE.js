const Sequelize = require('sequelize');
module.exports = class Role extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				ROLE_ID: {
					autoIncrement: true,
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					primaryKey: true,
				},
				ROLE_NAME: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
			},
			{
				sequelize,
				modelName: 'Role',
				tableName: 'ROLE',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'ROLE_ID' }],
					},
				],
			}
		);
	}
	static associate(db) {
		db.Role.hasMany(db.Emp_proj, { as: 'EMP_PROJs', foreignKey: 'ROLE_ID' });
	}
};
