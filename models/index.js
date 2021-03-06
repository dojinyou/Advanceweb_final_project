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
const _salary = require('./salary');
const _skill = require('./skill');

const career = _career(sequelize, DataTypes);
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
const salary = _salary(sequelize, DataTypes);
const skill = _skill(sequelize, DataTypes);

employee.belongsToMany(skill, {
	through: emp_skill,
	foreignKey: 'EMP_ID',
	otherKey: 'SKILL_ID',
});
skill.belongsToMany(employee, {
	through: emp_skill,
	foreignKey: 'SKILL_ID',
	otherKey: 'EMP_ID',
});
cus_proj_eval.belongsTo(customer, { foreignKey: 'CUS_ID' });
customer.hasMany(cus_proj_eval, {
	foreignKey: 'CUS_ID',
});
project.belongsTo(customer, { foreignKey: 'CUS_ID' });
customer.hasMany(project, { foreignKey: 'CUS_ID' });
employee.belongsTo(dept, { foreignKey: 'DEPT_ID' });
dept.hasMany(employee, { foreignKey: 'DEPT_ID' });
dept.belongsTo(dept, {
	foreignKey: 'DEPT_UPPER',
});
dept.hasMany(dept, { foreignKey: 'DEPT_UPPER' });
cus_proj_eval.belongsTo(emp_proj, { foreignKey: 'EP_ID' });
emp_proj.hasMany(cus_proj_eval, { foreignKey: 'EP_ID' });
emp_proj_eval.belongsTo(emp_proj, { foreignKey: 'EP_ID' });
emp_proj.hasMany(emp_proj_eval, { foreignKey: 'EP_ID' });
emp_proj_eval.belongsTo(emp_proj, {
	foreignKey: 'EVALUATOR',
});
emp_proj.hasMany(emp_proj_eval, {
	foreignKey: 'EVALUATOR',
});
career.belongsTo(employee, { foreignKey: 'EMP_ID' });
employee.hasMany(career, { foreignKey: 'EMP_ID' });
emp_pe.belongsTo(employee, { foreignKey: 'EMP_ID' });
employee.hasMany(emp_pe, { foreignKey: 'EMP_ID' });
emp_proj.belongsTo(employee, { foreignKey: 'EMP_ID' });
employee.hasMany(emp_proj, { foreignKey: 'EMP_ID' });
emp_skill.belongsTo(employee, { foreignKey: 'EMP_ID' });
employee.hasMany(emp_skill, { foreignKey: 'EMP_ID' });
manager.belongsTo(employee, { foreignKey: 'EMP_ID' });
employee.hasOne(manager, { foreignKey: 'EMP_ID' });
proj_plan.belongsTo(proj_plan, {
	foreignKey: 'DEPENDENCY',
});
proj_plan.hasMany(proj_plan, { foreignKey: 'DEPENDENCY' });
emp_proj.belongsTo(project, { foreignKey: 'PRO_ID' });
project.hasMany(emp_proj, { foreignKey: 'PRO_ID' });
proj_plan.belongsTo(project, { foreignKey: 'PRO_ID' });
project.hasMany(proj_plan, { foreignKey: 'PRO_ID' });
emp_proj.belongsTo(role, { foreignKey: 'ROLE_ID' });
role.hasMany(emp_proj, { foreignKey: 'ROLE_ID' });
employee.belongsTo(salary, { foreignKey: 'SAL_ID' });
salary.hasMany(employee, { foreignKey: 'SAL_ID' });
emp_skill.belongsTo(skill, { foreignKey: 'SKILL_ID' });
skill.hasMany(emp_skill, { foreignKey: 'SKILL_ID' });

db.career = career;
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
db.salary = salary;
db.skill = skill;

module.exports = db;
