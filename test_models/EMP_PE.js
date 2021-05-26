const Sequelize = require('sequelize');
module.exports = class Emp_pe extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				EMP_ID: {
					autoIncrement: true,
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					references: {
						model: 'Employee',
						key: 'EMP_ID',
					},
				},
				YEAR: {
					type: 'YEAR(4)',
					allowNull: false,
					primaryKey: true,
				},
				PERFORMANCE_EVALUATION: {
					type: Sequelize.CHAR(1),
					allowNull: false,
				},
				COMMENT: {
					type: Sequelize.STRING(255),
					allowNull: true,
				},
			},
			{
				sequelize,
				modelName: 'Emp_pe',
				tableName: 'EMP_PE',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'EMP_ID' }, { name: 'YEAR' }],
					},
				],
			}
		);
	}
	static associate(db) {
		db.Emp_pe.belongsTo(db.Employee, { as: 'EMP', foreignKey: 'EMP_ID' });
	}
};
