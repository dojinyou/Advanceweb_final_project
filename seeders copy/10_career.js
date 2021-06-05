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
		const career_bulk = [
			{
				car_id: 1,
				emp_id: 1,
				career_name: 'Career',
				career_from_date: '2021-02-01',
				career_to_date: '2021-03-01',
			},
		];
		await queryInterface.bulkInsert('career', career_bulk, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('career', null, {});
	},
};
