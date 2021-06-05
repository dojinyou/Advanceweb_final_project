'use strict';

const { query } = require('express');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		const empPe_bulk = [
			{
				emp_id: 7,
				year: 2019,
				performance_evaluation: 'A',
			},
			{
				emp_id: 7,
				year: 2020,
				performance_evaluation: 'B',
			},
			{
				emp_id: 1,
				year: 2020,
				performance_evaluation: 'S',
			},
			{
				emp_id: 2,
				year: 2020,
				performance_evaluation: 'S',
			},
			{
				emp_id: 3,
				year: 2020,
				performance_evaluation: 'S',
			},
			{
				emp_id: 4,
				year: 2020,
				performance_evaluation: 'S',
			},
		]	
		await queryInterface.bulkInsert('emp_pe', empPe_bulk, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('emp_pe', null, {});
	},
};