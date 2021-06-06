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
		const eProjEval_bulk = [
			{
				EPE_ID: 1,
				evaluator: 8,
				ep_id: 7,
				proj_pe_score: 10,
				proj_com_score: 10,
			},
			{
				EPE_ID: 2,
				evaluator: 7,
				ep_id: 8,
				proj_pe_score: 10,
				proj_com_score: 10,
			},
		];
		await queryInterface.bulkInsert('emp_proj_eval', eProjEval_bulk, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('emp_proj_eval', null, {});
	},
};
