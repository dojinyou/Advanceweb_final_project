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
		const dept_bulk = [
			{
				DEPT_ID: 1,
				DEPT_NAME: '경영진',
				DEPT_LEVEL: 1,
			},
			{
				DEPT_ID: 2,
				DEPT_NAME: '경영',
				DEPT_LEVEL: 1,
			},
			{
				DEPT_ID: 3,
				DEPT_NAME: '개발',
				DEPT_LEVEL: 1,
			},
			{
				DEPT_ID: 4,
				DEPT_NAME: '재무',
				DEPT_LEVEL: 2,
				DEPT_UPPER: 1,
			},
			{
				DEPT_ID: 5,
				DEPT_NAME: '인사',
				DEPT_LEVEL: 2,
				DEPT_UPPER: 1,
			},
			{
				DEPT_ID: 6,
				DEPT_NAME: '경영지원',
				DEPT_LEVEL: 2,
				DEPT_UPPER: 1,
			},
			{
				DEPT_ID: 7,
				DEPT_NAME: '기획',
				DEPT_LEVEL: 2,
				DEPT_UPPER: 1,
			},
			{
				DEPT_ID: 8,
				DEPT_NAME: '법무',
				DEPT_LEVEL: 2,
				DEPT_UPPER: 1,
			},
			{
				DEPT_ID: 9,
				DEPT_NAME: '마케팅',
				DEPT_LEVEL: 2,
				DEPT_UPPER: 1,
			},
			{
				DEPT_ID: 10,
				DEPT_NAME: '보안',
				DEPT_LEVEL: 2,
				DEPT_UPPER: 2,
			},
			{
				DEPT_ID: 11,
				DEPT_NAME: '디자인',
				DEPT_LEVEL: 2,
				DEPT_UPPER: 2,
			},
			{
				DEPT_ID: 12,
				DEPT_NAME: '모바일',
				DEPT_LEVEL: 2,
				DEPT_UPPER: 2,
			},
			{
				DEPT_ID: 13,
				DEPT_NAME: '웹',
				DEPT_LEVEL: 2,
				DEPT_UPPER: 2,
			},
			{
				DEPT_ID: 14,
				DEPT_NAME: '프론트엔드',
				DEPT_LEVEL: 3,
				DEPT_UPPER: 13,
			},
			{
				DEPT_ID: 15,
				DEPT_NAME: '백엔드',
				DEPT_LEVEL: 3,
				DEPT_UPPER: 13,
			},
			{
				DEPT_ID: 16,
				DEPT_NAME: '데이터분석',
				DEPT_LEVEL: 2,
				DEPT_UPPER: 2,
			},
			{
				DEPT_ID: 17,
				DEPT_NAME: '테스트',
				DEPT_LEVEL: 2,
				DEPT_UPPER: 2,
			},
		];
		await queryInterface.bulkInsert('dept', dept_bulk, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('dept', null, {});
	},
};
