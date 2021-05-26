const Sequelize = require('sequelize');
module.exports = class Proj_plan extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				PP_ID: {
					autoIncrement: true,
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					primaryKey: true,
				},
				PRO_ID: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					references: {
						model: 'Project',
						key: 'PRO_ID',
					},
				},
				PLAN_TYPE: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
				START_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: false,
				},
				END_DATE: {
					type: Sequelize.DATEONLY,
					allowNull: false,
				},
				PERIOD: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				DEPENDENCY: {
					type: Sequelize.INTEGER,
					allowNull: true,
					references: {
						model: 'Proj_plan',
						key: 'PP_ID',
					},
				},
				STATUS: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
			},
			{
				sequelize,
				modelName: 'Proj_plan',
				tableName: 'PROJ_PLAN',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'PP_ID' }],
					},
					{
						name: 'FK_PROJ_PLAN_PROJ',
						using: 'BTREE',
						fields: [{ name: 'PRO_ID' }],
					},
					{
						name: 'FK_SELF_PROJ_PLAN',
						using: 'BTREE',
						fields: [{ name: 'DEPENDENCY' }],
					},
				],
			}
		);
	}
	static associate(db) {
		db.Proj_plan.belongsTo(db.Project, { as: 'PRO', foreignKey: 'PRO_ID' });
		db.Proj_plan.belongsTo(db.Proj_plan, {
			as: 'DEPENDENCY_PROJ_PLAN',
			foreignKey: 'DEPENDENCY',
		});
		db.Proj_plan.hasMany(db.Proj_plan, {
			as: 'PROJ_PLANs',
			foreignKey: 'DEPENDENCY',
		});
	}
};
