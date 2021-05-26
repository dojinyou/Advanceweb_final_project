const Sequelize = require('sequelize');
module.exports = class Emp_proj extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				EP_ID: {
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
				PRO_ID: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					references: {
						model: 'Project',
						key: 'PRO_ID',
					},
				},
				ROLE_ID: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					references: {
						model: 'Role',
						key: 'ROLE_ID',
					},
				},
				EP_START_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: false,
				},
				EP_END_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: true,
				},
			},
			{
				sequelize,
				modelName: 'Emp_proj',
				tableName: 'EMP_PROJ',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'EP_ID' }],
					},
					{
						name: 'FK_EMP_PROJ_EMP',
						using: 'BTREE',
						fields: [{ name: 'EMP_ID' }],
					},
					{
						name: 'FK_EMP_PROJ_PROJ',
						using: 'BTREE',
						fields: [{ name: 'PRO_ID' }],
					},
					{
						name: 'FK_EMP_PROJ_ROLE',
						using: 'BTREE',
						fields: [{ name: 'ROLE_ID' }],
					},
				],
			}
		);
	}
	static associate(db) {
		db.Emp_proj.belongsTo(db.Employee, { as: 'EMP', foreignKey: 'EMP_ID' });
		db.Emp_proj.hasMany(db.Cus_proj_eval, {
			as: 'CUS_PROJ_EVALs',
			foreignKey: 'EP_ID',
		});
		db.Emp_proj.hasMany(db.Emp_proj_eval, {
			as: 'EMP_PROJ_EVALs',
			foreignKey: 'EVALUATOR',
		});
		db.Emp_proj.hasMany(db.Emp_proj_eval, {
			as: 'EP_EMP_PROJ_EVALs',
			foreignKey: 'EP_ID',
		});
		db.Emp_proj.belongsTo(db.Project, { as: 'PRO', foreignKey: 'PRO_ID' });
		db.Emp_proj.belongsTo(db.Role, { as: 'ROLE', foreignKey: 'ROLE_ID' });
	}
};
