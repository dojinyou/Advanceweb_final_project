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
		const salary_bulk = [
			{
				sal_id: 1,
				sal_rank: '경영진',
				sal_year: 1,
				salary: 10000,
			},
			{
				sal_id: 2,
				sal_rank: '사원',
				sal_year: 1,
				salary: 280,
			},
			{
				sal_id: 3,
				sal_rank: '사원',
				sal_year: 2,
				salary: 290,
			},
			{
				sal_id: 4,
				sal_rank: '사원',
				sal_year: 3,
				salary: 300,
			},
			{
				sal_id: 5,
				sal_rank: '사원',
				sal_year: 4,
				salary: 310,
			},
			{
				sal_id: 6,
				sal_rank: '사원',
				sal_year: 5,
				salary: 320,
			},
			{
				sal_id: 7,
				sal_rank: '사원',
				sal_year: 6,
				salary: 330,
			},
			{
				sal_id: 8,
				sal_rank: '대리',
				sal_year: 1,
				salary: 380,
			},
			{
				sal_id: 9,
				sal_rank: '대리',
				sal_year: 2,
				salary: 390,
			},
			{
				sal_id: 10,
				sal_rank: '대리',
				sal_year: 3,
				salary: 400,
			},
			{
				sal_id: 11,
				sal_rank: '대리',
				sal_year: 4,
				salary: 410,
			},
			{
				sal_id: 12,
				sal_rank: '대리',
				sal_year: 5,
				salary: 420,
			},
			{
				sal_id: 13,
				sal_rank: '대리',
				sal_year: 6,
				salary: 430,
			},
			{
				sal_id: 14,
				sal_rank: '대리',
				sal_year: 7,
				salary: 440,
			},
			{
				sal_id: 15,
				sal_rank: '대리',
				sal_year: 8,
				salary: 450,
			},
			{
				sal_id: 16,
				sal_rank: '과장',
				sal_year: 1,
				salary: 430,
			},
			{
				sal_id: 17,
				sal_rank: '과장',
				sal_year: 2,
				salary: 440,
			},
			{
				sal_id: 18,
				sal_rank: '과장',
				sal_year: 3,
				salary: 450,
			},
			{
				sal_id: 19,
				sal_rank: '과장',
				sal_year: 4,
				salary: 460,
			},
			{
				sal_id: 20,
				sal_rank: '과장',
				sal_year: 5,
				salary: 470,
			},
			{
				sal_id: 21,
				sal_rank: '과장',
				sal_year: 6,
				salary: 480,
			},
			{
				sal_id: 22,
				sal_rank: '과장',
				sal_year: 7,
				salary: 490,
			},
			{
				sal_id: 23,
				sal_rank: '과장',
				sal_year: 8,
				salary: 500,
			},
			{
				sal_id: 24,
				sal_rank: '과장',
				sal_year: 9,
				salary: 510,
			},
			{
				sal_id: 25,
				sal_rank: '과장',
				sal_year: 10,
				salary: 520,
			},
			{
				sal_id: 26,
				sal_rank: '차장',
				sal_year: 1,
				salary: 530,
			},
			{
				sal_id: 27,
				sal_rank: '차장',
				sal_year: 2,
				salary: 540,
			},
			{
				sal_id: 28,
				sal_rank: '차장',
				sal_year: 3,
				salary: 550,
			},
			{
				sal_id: 29,
				sal_rank: '차장',
				sal_year: 4,
				salary: 560,
			},
			{
				sal_id: 30,
				sal_rank: '차장',
				sal_year: 5,
				salary: 570,
			},
			{
				sal_id: 31,
				sal_rank: '차장',
				sal_year: 6,
				salary: 580,
			},
			{
				sal_id: 32,
				sal_rank: '차장',
				sal_year: 7,
				salary: 590,
			},
			{
				sal_id: 33,
				sal_rank: '차장',
				sal_year: 8,
				salary: 600,
			},
			{
				sal_id: 34,
				sal_rank: '차장',
				sal_year: 9,
				salary: 610,
			},
			{
				sal_id: 35,
				sal_rank: '차장',
				sal_year: 10,
				salary: 620,
			},
			{
				sal_id: 36,
				sal_rank: '부장',
				sal_year: 1,
				salary: 650,
			},
			{
				sal_id: 37,
				sal_rank: '부장',
				sal_year: 2,
				salary: 660,
			},
			{
				sal_id: 38,
				sal_rank: '부장',
				sal_year: 3,
				salary: 670,
			},
			{
				sal_id: 39,
				sal_rank: '부장',
				sal_year: 4,
				salary: 680,
			},
			{
				sal_id: 40,
				sal_rank: '부장',
				sal_year: 5,
				salary: 690,
			},
			{
				sal_id: 41,
				sal_rank: '부장',
				sal_year: 6,
				salary: 700,
			},
			{
				sal_id: 42,
				sal_rank: '부장',
				sal_year: 7,
				salary: 710,
			},
			{
				sal_id: 43,
				sal_rank: '부장',
				sal_year: 8,
				salary: 720,
			},
			{
				sal_id: 44,
				sal_rank: '부장',
				sal_year: 9,
				salary: 730,
			},
			{
				sal_id: 45,
				sal_rank: '부장',
				sal_year: 10,
				salary: 740,
			},
			{
				sal_id: 46,
				sal_rank: '부장',
				sal_year: 11,
				salary: 750,
			},
			{
				sal_id: 47,
				sal_rank: '부장',
				sal_year: 12,
				salary: 760,
			},
		];
		await queryInterface.bulkInsert('salary', salary_bulk, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('salary', null, {});
	},
};
