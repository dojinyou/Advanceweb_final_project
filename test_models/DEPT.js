const Sequelize = require('sequelize');
module.exports = class Dept extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				DEPT_ID: {
					autoIncrement: true,
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					primaryKey: true,
				},
				DEPT_NAME: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
			},
			{
				sequelize,
				tableName: 'DEPT',
				modelName: 'Dept',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
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
	}

	static associate(db) {
		db.Dept.hasMany(db.Employee, { as: 'EMPLOYEEs', foreignKey: 'DEPT_ID' });
	}
};
