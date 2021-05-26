const Sequelize = require('sequelize');
module.exports = class Skill extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				SKILL_ID: {
					autoIncrement: true,
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					primaryKey: true,
				},
				SKILL_NAME: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
				SKILL_GRADE: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
			},
			{
				sequelize,
				tableName: 'Skill',
				tableName: 'SKILL',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'SKILL_ID' }],
					},
				],
			}
		);
	}
	static associate(db) {
		db.Skill.hasMany(db.Emp_skill, {
			as: 'EMP_SKILLs',
			foreignKey: 'SKILL_ID',
		});
		db.Skill.belongsToMany(db.Employee, {
			as: 'EMP_ID_EMPLOYEEs',
			through: EMP_SKILL,
			foreignKey: 'SKILL_ID',
			otherKey: 'EMP_ID',
		});
	}
};
