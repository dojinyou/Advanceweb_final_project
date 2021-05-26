const Sequelize = require('sequelize');
module.exports = class Employee extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				EMP_ID: {
					autoIncrement: true,
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					primaryKey: true,
				},
				DEPT_ID: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					references: {
						model: 'Dept',
						key: 'DEPT_ID',
					},
				},
				EMP_NAME: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
				EMP_R_NUM: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				EMP_EDU: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
				EMP_BIRTH_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: false,
				},
				EMP_STATUS: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				EMP_HIRE_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: false,
				},
				EMP_RETIRE_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: true,
				},
				EMP_WORK_YEAR: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				EMP_WEB_ID: {
					type: Sequelize.STRING(20),
					allowNull: true,
				},
				EMP_WEB_PW: {
					type: Sequelize.STRING(20),
					allowNull: true,
				},
			},
			{
				sequelize,
				modelName: 'Employee',
				tableName: 'EMPLOYEE',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'EMP_ID' }],
					},
					{
						name: 'FK_DEPT_EMPLOYEE',
						using: 'BTREE',
						fields: [{ name: 'DEPT_ID' }],
					},
				],
			}
		);
	}
	static associate(db) {
		db.Employee.belongsTo(db.Dept, { as: 'DEPT', foreignKey: 'DEPT_ID' });
		db.Employee.hasMany(db.Carrer, { as: 'CARRERs', foreignKey: 'EMP_ID' });
		db.Employee.hasMany(db.Emp_pe, { as: 'EMP_PEs', foreignKey: 'EMP_ID' });
		db.Employee.hasMany(db.Emp_proj, { as: 'EMP_PROJs', foreignKey: 'EMP_ID' });
		db.Employee.hasMany(db.Emp_skill, {
			as: 'EMP_SKILLs',
			foreignKey: 'EMP_ID',
		});
		db.Employee.hasOne(db.Manager, { as: 'MANAGER', foreignKey: 'EMP_ID' });
		db.Employee.belongsToMany(db.Skill, {
			as: 'SKILL_ID_SKILLs',
			through: EMP_SKILL,
			foreignKey: 'EMP_ID',
			otherKey: 'SKILL_ID',
		});
	}
};
