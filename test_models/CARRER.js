const Sequelize = require('sequelize');
module.exports = class Carrer extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				CAR_ID: {
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
				},
				CAREER_NAME: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
				CAREER_FROM_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: false,
				},
				CAREER_TO_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: true,
				},
			},
			{
				sequelize,
				tableName: 'CARRER',
				modelName: 'Carrer',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
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
	}

	static associate(db) {
		db.Carrer.belongsTo(db.Employee, { as: 'EMP', foreignKey: 'EMP_ID' });
	}
};
