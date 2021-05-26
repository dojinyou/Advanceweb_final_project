const Sequelize = require('sequelize');
const Carrer = require('./CARRER');
const Customer = require('./CUSTOMER');
const Cus_order = require('./CUS_ORDER');
const Cus_proj_eval = require('./CUS_PROJ_EVAL');
const Dept = require('./DEPT');
const Employee = require('./EMPLOYEE');
const Emp_pe = require('./EMP_PE');
const Emp_proj = require('./EMP_PROJ');
const Emp_proj_eval = require('./EMP_PROJ_EVAL');
const Emp_skill = require('./EMP_SKILL');
const Manager = require('./MANAGER');
const Project = require('./PROJECT');
const Proj_plan = require('./PROJ_PLAN');
const Role = require('./ROLE');
const Skill = require('./SKILL');

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

db.Dept = Dept;
db.Carrer = Carrer;
db.Customer = Customer;
db.Cus_order = Cus_order;
db.Cus_proj_eval = Cus_proj_eval;
db.Dept = Dept;
db.Employee = Employee;
db.Emp_pe = Emp_pe;
db.Emp_proj = Emp_proj;
db.Emp_proj_eval = Emp_proj_eval;
db.Emp_skill = Emp_skill;
db.Manager = Manager;
db.Project = Project;
db.Proj_plan = Proj_plan;
db.Role = Role;
db.Skill = Skill;

Dept.init(sequelize);
Carrer.init(sequelize);
Customer.init(sequelize);
Cus_order.init(sequelize);
Cus_proj_eval.init(sequelize);
Dept.init(sequelize);
Employee.init(sequelize);
Emp_pe.init(sequelize);
Emp_proj.init(sequelize);
Emp_proj_eval.init(sequelize);
Emp_skill.init(sequelize);
Manager.init(sequelize);
Project.init(sequelize);
Proj_plan.init(sequelize);
Role.init(sequelize);
Skill.init(sequelize);

Dept.associate(db);
Carrer.associate(db);
Customer.associate(db);
Cus_order.associate(db);
Cus_proj_eval.associate(db);
Dept.associate(db);
Employee.associate(db);
Emp_pe.associate(db);
Emp_proj.associate(db);
Emp_proj_eval.associate(db);
Emp_skill.associate(db);
Manager.associate(db);
Project.associate(db);
Proj_plan.associate(db);
Role.associate(db);
Skill.associate(db);

module.exports = db;
