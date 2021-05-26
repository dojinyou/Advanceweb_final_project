const Sequelize = require('sequelize');
module.exports = class Project extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				PRO_ID: {
					autoIncrement: true,
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					primaryKey: true,
				},
				ORDER_ID: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					references: {
						model: 'Cus_order',
						key: 'ORDER_ID',
					},
				},
				PRO_TITLE: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
				PRO_TYPE: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
				PRO_START_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: false,
				},
				PRO_END_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: false,
				},
			},
			{
				sequelize,
				modelName: 'Project',
				tableName: 'PROJECT',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'PRO_ID' }],
					},
					{
						name: 'FK_PROJ_ORDER',
						using: 'BTREE',
						fields: [{ name: 'ORDER_ID' }],
					},
				],
			}
		);
	}
	static associate(db) {
		db.Project.belongsTo(db.Cus_order, { as: 'ORDER', foreignKey: 'ORDER_ID' });
		db.Project.hasMany(db.Emp_proj, { as: 'EMP_PROJs', foreignKey: 'PRO_ID' });
		db.Project.hasMany(db.Proj_plan, {
			as: 'PROJ_PLANs',
			foreignKey: 'PRO_ID',
		});
	}
};
