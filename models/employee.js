const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'employee',
		{
			EMP_ID: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			SAL_ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'salary',
					key: 'SAL_ID',
				},
			},
			DEPT_ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'dept',
					key: 'DEPT_ID',
				},
			},
			EMP_NAME: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			EMP_R_NUM: {
				type: DataTypes.STRING(14),
				allowNull: false,
			},
			EMP_EDU: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			EMP_BIRTH_DATE: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			EMP_STATUS: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			EMP_HIRE_DATE: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			EMP_RETIRE_DATE: {
				type: DataTypes.DATEONLY,
				allowNull: true,
			},
			EMP_RANK: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			EMP_SENIORITY: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			EMP_SAL_RATE: {
				type: DataTypes.DECIMAL(10, 4),
				allowNull: false,
				defaultValue: 1.0,
			},
			EMP_WEB_ID: {
				type: DataTypes.STRING(20),
				allowNull: true,
			},
			EMP_WEB_PW: {
				type: DataTypes.STRING(20),
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: 'employee',
			timestamps: false,
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
};
