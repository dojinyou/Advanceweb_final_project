const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const DataTypes = require('sequelize').DataTypes;
const _career = require('./career');
const _cus_order = require('./cus_order');
const _cus_proj_eval = require('./cus_proj_eval');
const _customer = require('./customer');
const _dept = require('./dept');
const _emp_pe = require('./emp_pe');
const _emp_proj = require('./emp_proj');
const _emp_proj_eval = require('./emp_proj_eval');
const _emp_skill = require('./emp_skill');
const _employee = require('./employee');
const _manager = require('./manager');
const _proj_plan = require('./proj_plan');
const _project = require('./project');
const _role = require('./role');
const _skill = require('./skill');

const career = _career(sequelize, DataTypes);
const cus_order = _cus_order(sequelize, DataTypes);
const cus_proj_eval = _cus_proj_eval(sequelize, DataTypes);
const customer = _customer(sequelize, DataTypes);
const dept = _dept(sequelize, DataTypes);
const emp_pe = _emp_pe(sequelize, DataTypes);
const emp_proj = _emp_proj(sequelize, DataTypes);
const emp_proj_eval = _emp_proj_eval(sequelize, DataTypes);
const emp_skill = _emp_skill(sequelize, DataTypes);
const employee = _employee(sequelize, DataTypes);
const manager = _manager(sequelize, DataTypes);
const proj_plan = _proj_plan(sequelize, DataTypes);
const project = _project(sequelize, DataTypes);
const role = _role(sequelize, DataTypes);
const skill = _skill(sequelize, DataTypes);

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
emp_proj.hasMany(cus_proj_eval, { as: 'cus_proj_evals', foreignKey: 'EP_ID' });
emp_proj_eval.belongsTo(emp_proj, { as: 'EP', foreignKey: 'EP_ID' });
emp_proj.hasMany(emp_proj_eval, { as: 'emp_proj_evals', foreignKey: 'EP_ID' });
emp_proj_eval.belongsTo(emp_proj, {
	as: 'EVALUATOR_emp_proj',
	foreignKey: 'EVALUATOR',
});
emp_proj.hasMany(emp_proj_eval, {
	as: 'EVALUATOR_emp_proj_evals',
	foreignKey: 'EVALUATOR',
});
career.belongsTo(employee, { as: 'EMP', foreignKey: 'EMP_ID' });
employee.hasMany(career, { as: 'careers', foreignKey: 'EMP_ID' });
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
emp_proj.belongsTo(project, { foreignKey: 'PRO_ID' });
project.hasMany(emp_proj, { as: 'emp_projs', foreignKey: 'PRO_ID' });
proj_plan.belongsTo(project, { as: 'PRO', foreignKey: 'PRO_ID' });
project.hasMany(proj_plan, { as: 'proj_plans', foreignKey: 'PRO_ID' });
emp_proj.belongsTo(role, { as: 'ROLE', foreignKey: 'ROLE_ID' });
role.hasMany(emp_proj, { as: 'emp_projs', foreignKey: 'ROLE_ID' });
emp_skill.belongsTo(skill, { as: 'SKILL', foreignKey: 'SKILL_ID' });
skill.hasMany(emp_skill, { as: 'emp_skills', foreignKey: 'SKILL_ID' });

db.career = career;
db.cus_order = cus_order;
db.cus_proj_eval = cus_proj_eval;
db.customer = customer;
db.dept = dept;
db.emp_pe = emp_pe;
db.emp_proj = emp_proj;
db.emp_proj_eval = emp_proj_eval;
db.emp_skill = emp_skill;
db.employee = employee;
db.manager = manager;
db.proj_plan = proj_plan;
db.project = project;
db.role = role;
db.skill = skill;

module.exports = db;
