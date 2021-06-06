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
		const role_bulk = [
			{
				role_id: 1,
				role_name: '프로젝트 매니저',
			},
			{
				role_id: 2,
				role_name: '주 개발자',
			},
			{
				role_id: 3,
				role_name: '보조 개발자',
			},
		];
		await queryInterface.bulkInsert('role', role_bulk, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('role', null, {});
	},
};
