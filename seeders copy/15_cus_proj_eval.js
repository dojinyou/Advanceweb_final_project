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
		const cProjEval_bulk = [
			{
				order_id: 1,
				ep_id: 4,
				proj_pe_score: 10,
				proj_com_score: 10,
			},
		];
		await queryInterface.bulkInsert('cus_proj_eval', cProjEval_bulk, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('cus_proj_eval', null, {});
	},
};