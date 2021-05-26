const Sequelize = require('sequelize');
module.exports = class Emp_proj_eval extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				EPE_ID: {
					autoIncrement: true,
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
					primaryKey: true,
				},
				EVALUATOR: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'Emp_proj',
						key: 'EMP_ID',
					},
				},
				EP_ID: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'EMp_proj',
						key: 'EMP_ID',
					},
				},
				PROJ_PE_SCORE: {
					type: Sequelize.TINYINT,
					allowNull: false,
				},
				PROJ_PE_COMMENT: {
					type: Sequelize.STRING(255),
					allowNull: true,
				},
				PROJ_COM_SCORE: {
					type: Sequelize.TINYINT,
					allowNull: false,
				},
				PROJ_COM_COMMENT: {
					type: Sequelize.STRING(255),
					allowNull: true,
				},
			},
			{
				sequelize,
				modelName: 'Emp_proj_eval',
				tableName: 'EMP_PROJ_EVAL',
				timestamps: false,
				charset: 'utf8',
				collate: 'utf8_general_ci',
				indexes: [
					{
						name: 'PRIMARY',
						unique: true,
						using: 'BTREE',
						fields: [{ name: 'EPE_ID' }],
					},
					{
						name: 'FK_EVAL_EMP_PROJ',
						using: 'BTREE',
						fields: [{ name: 'EP_ID' }],
					},
					{
						name: 'FK_EVAL_EVALUATOR',
						using: 'BTREE',
						fields: [{ name: 'EVALUATOR' }],
					},
				],
			}
		);
	}
	static associate(db) {
		db.EMP_proj_eval.belongsTo(db.Emp_proj, {
			as: 'EVALUATOR_EMP_PROJ',
			foreignKey: 'EVALUATOR',
		});
		db.EMP_proj_eval.belongsTo(db.Emp_proj, { as: 'EP', foreignKey: 'EP_ID' });
	}
};
