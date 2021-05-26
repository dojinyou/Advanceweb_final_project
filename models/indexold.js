var DataTypes = require('sequelize').DataTypes;
var _carrer = require('./carrer');
var _cus_order = require('./cus_order');
var _cus_proj_eval = require('./cus_proj_eval');
var _customer = require('./customer');
var _dept = require('./dept');
var _emp_pe = require('./emp_pe');
var _emp_proj = require('./emp_proj');
var _emp_proj_eval = require('./emp_proj_eval');
var _emp_skill = require('./emp_skill');
var _employee = require('./employee');
var _manager = require('./manager');
var _proj_plan = require('./proj_plan');
var _project = require('./project');
var _role = require('./role');
var _skill = require('./skill');

function initModels(sequelize) {
	var carrer = _carrer(sequelize, DataTypes);
	var cus_order = _cus_order(sequelize, DataTypes);
	var cus_proj_eval = _cus_proj_eval(sequelize, DataTypes);
	var customer = _customer(sequelize, DataTypes);
	var dept = _dept(sequelize, DataTypes);
	var emp_pe = _emp_pe(sequelize, DataTypes);
	var emp_proj = _emp_proj(sequelize, DataTypes);
	var emp_proj_eval = _emp_proj_eval(sequelize, DataTypes);
	var emp_skill = _emp_skill(sequelize, DataTypes);
	var employee = _employee(sequelize, DataTypes);
	var manager = _manager(sequelize, DataTypes);
	var proj_plan = _proj_plan(sequelize, DataTypes);
	var project = _project(sequelize, DataTypes);
	var role = _role(sequelize, DataTypes);
	var skill = _skill(sequelize, DataTypes);

	employee.belongsToMany(skill, {
		as: 'SKILL_ID_skills',
		through: emp_skill,
		foreignKey: 'EMP_ID',
		otherKey: 'SKILL_ID',
	});
	skill.belongsToMany(employee, {
		as: 'EMP_ID_employees',
		through: emp_skill,
		foreignKey: 'SKILL_ID',
		otherKey: 'EMP_ID',
	});
	cus_proj_eval.belongsTo(cus_order, { as: 'ORDER', foreignKey: 'ORDER_ID' });
	cus_order.hasMany(cus_proj_eval, {
		as: 'cus_proj_evals',
		foreignKey: 'ORDER_ID',
	});
	project.belongsTo(cus_order, { as: 'ORDER', foreignKey: 'ORDER_ID' });
	cus_order.hasMany(project, { as: 'projects', foreignKey: 'ORDER_ID' });
	cus_order.belongsTo(customer, { as: 'CU', foreignKey: 'CUS_ID' });
	customer.hasMany(cus_order, { as: 'cus_orders', foreignKey: 'CUS_ID' });
	employee.belongsTo(dept, { as: 'DEPT', foreignKey: 'DEPT_ID' });
	dept.hasMany(employee, { as: 'employees', foreignKey: 'DEPT_ID' });
	cus_proj_eval.belongsTo(emp_proj, { as: 'EP', foreignKey: 'EP_ID' });
	emp_proj.hasMany(cus_proj_eval, {
		as: 'cus_proj_evals',
		foreignKey: 'EP_ID',
	});
	emp_proj_eval.belongsTo(emp_proj, { as: 'EP', foreignKey: 'EP_ID' });
	emp_proj.hasMany(emp_proj_eval, {
		as: 'emp_proj_evals',
		foreignKey: 'EP_ID',
	});
	emp_proj_eval.belongsTo(emp_proj, {
		as: 'EVALUATOR_emp_proj',
		foreignKey: 'EVALUATOR',
	});
	emp_proj.hasMany(emp_proj_eval, {
		as: 'EVALUATOR_emp_proj_evals',
		foreignKey: 'EVALUATOR',
	});
	carrer.belongsTo(employee, { as: 'EMP', foreignKey: 'EMP_ID' });
	employee.hasMany(carrer, { as: 'carrers', foreignKey: 'EMP_ID' });
	emp_pe.belongsTo(employee, { as: 'EMP', foreignKey: 'EMP_ID' });
	employee.hasMany(emp_pe, { as: 'emp_pes', foreignKey: 'EMP_ID' });
	emp_proj.belongsTo(employee, { as: 'EMP', foreignKey: 'EMP_ID' });
	employee.hasMany(emp_proj, { as: 'emp_projs', foreignKey: 'EMP_ID' });
	emp_skill.belongsTo(employee, { as: 'EMP', foreignKey: 'EMP_ID' });
	employee.hasMany(emp_skill, { as: 'emp_skills', foreignKey: 'EMP_ID' });
	manager.belongsTo(employee, { as: 'EMP', foreignKey: 'EMP_ID' });
	employee.hasOne(manager, { as: 'manager', foreignKey: 'EMP_ID' });
	proj_plan.belongsTo(proj_plan, {
		as: 'DEPENDENCY_proj_plan',
		foreignKey: 'DEPENDENCY',
	});
	proj_plan.hasMany(proj_plan, { as: 'proj_plans', foreignKey: 'DEPENDENCY' });
	emp_proj.belongsTo(project, { as: 'PRO', foreignKey: 'PRO_ID' });
	project.hasMany(emp_proj, { as: 'emp_projs', foreignKey: 'PRO_ID' });
	proj_plan.belongsTo(project, { as: 'PRO', foreignKey: 'PRO_ID' });
	project.hasMany(proj_plan, { as: 'proj_plans', foreignKey: 'PRO_ID' });
	emp_proj.belongsTo(role, { as: 'ROLE', foreignKey: 'ROLE_ID' });
	role.hasMany(emp_proj, { as: 'emp_projs', foreignKey: 'ROLE_ID' });
	emp_skill.belongsTo(skill, { as: 'SKILL', foreignKey: 'SKILL_ID' });
	skill.hasMany(emp_skill, { as: 'emp_skills', foreignKey: 'SKILL_ID' });

	return {
		carrer,
		cus_order,
		cus_proj_eval,
		customer,
		dept,
		emp_pe,
		emp_proj,
		emp_proj_eval,
		emp_skill,
		employee,
		manager,
		proj_plan,
		project,
		role,
		skill,
	};
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
