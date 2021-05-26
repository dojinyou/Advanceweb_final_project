const Sequelize = require('sequelize');
module.exports = class Emp_skill extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				SKILL_ID: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					primaryKey: true,
					references: {
						model: 'Skill',
						key: 'SKILL_ID',
					},
				},
				EMP_ID: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					primaryKey: true,
					references: {
						model: 'Employee',
						key: 'EMP_ID',
					},
				},
				ACQUIRE_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: false,
				},
			},
			{
				sequelize,
				modelName: 'Emp_skill',
				tableName: 'EMP_SKILL',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'SKILL_ID' }, { name: 'EMP_ID' }],
					},
					{
						name: 'FK_EMP_EMPSKILL',
						using: 'BTREE',
						fields: [{ name: 'EMP_ID' }],
					},
				],
			}
		);
	}
	static associate(db) {
		db.Emp_skill.belongsTo(db.Employee, { as: 'EMP', foreignKey: 'EMP_ID' });
		db.Emp_skill.belongsTo(db.Skill, { as: 'SKILL', foreignKey: 'SKILL_ID' });
	}
};
