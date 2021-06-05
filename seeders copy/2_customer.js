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
		const cus_bulk = [
			{
				cus_id: 1,
				cus_name: '명지대학교',
			},
			{
				cus_id: 2,
				cus_name: '서대문구청',
			},
		];
		await queryInterface.bulkInsert('customer', cus_bulk, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('customer', null, {});
	},
};
