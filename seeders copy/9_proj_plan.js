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
		const pPlan_bulk = [
			{
				pp_id: 1,
				pro_id: 1,
				plan_type: '설계',
				start_date: '2015-01-01',
				end_date: '2016-02-22',
				period: '0001-02-20',
				dependency: null,
				status: '종료',
			},
			{
				pp_id: 2,
				pro_id: 1,
				plan_type: '개발',
				start_date: '2015-09-01',
				end_date: '2017-06-30',
				period: '0001-10-29',
				dependency: null,
				status: '종료',
			},
			{
				pp_id: 3,
				pro_id: 1,
				plan_type: '테스트',
				start_date: '2017-07-01',
				end_date: '2018-02-22',
				period: '0000-08-23',
				dependency: 2,
				status: '종료',
			},
			{
				pp_id: 4,
				pro_id: 2,
				plan_type: '설계',
				start_date: '2017-03-14',
				end_date: '2018-01-31',
				period: '0000-11-18',
				dependency: null,
				status: '종료',
			},
			{
				pp_id: 5,
				pro_id: 2,
				plan_type: '개발',
				start_date: '2018-01-31',
				end_date: '2019-04-30',
				period: '0001-03-29',
				dependency: 4,
				status: '종료',
			},
			{
				pp_id: 6,
				pro_id: 2,
				plan_type: '테스트',
				start_date: '2019-05-01',
				end_date: '2020-01-20',
				period: '0000-09-20',
				dependency: 5,
				status: '종료',
			},
			{
				pp_id: 7,
				pro_id: 3,
				plan_type: '설계',
				start_date: '2018-05-23',
				end_date: '2018-10-16',
				period: '0000-05-25',
				dependency: null,
				status: '종료',
			},
			{
				pp_id: 8,
				pro_id: 3,
				plan_type: '개발',
				start_date: '2018-10-17',
				end_date: '2019-04-02',
				period: '0000-06-15',
				dependency: 7,
				status: '종료',
			},
			{
				pp_id: 9,
				pro_id: 3,
				plan_type: '테스트',
				start_date: '2019-04-03',
				end_date: '2019-08-30',
				period: '0000-05-28',
				dependency: 8,
				status: '종료',
			},
			{
				pp_id: 10,
				pro_id: 4,
				plan_type: '설계',
				start_date: '2018-11-30',
				end_date: '2019-06-30',
				period: '0000-07-30',
				dependency: null,
				status: '종료',
			},
			{
				pp_id: 11,
				pro_id: 4,
				plan_type: '개발',
				start_date: '2019-07-01',
				end_date: '2019-12-23',
				period: '0000-06-23',
				dependency: 10,
				status: '종료',
			},
			{
				pp_id: 12,
				pro_id: 4,
				plan_type: '테스트',
				start_date: '2019-10-01',
				end_date: '2020-02-28',
				period: '0000-05-29',
				dependency: null,
				status: '종료',
			},
			{
				pp_id: 13,
				pro_id: 5,
				plan_type: '설계',
				start_date: '2019-12-30',
				end_date: '2020-12-31',
				period: '0001-01-01',
				dependency: null,
				status: '종료',
			},
			{
				pp_id: 14,
				pro_id: 5,
				plan_type: '개발',
				start_date: '2021-01-01',
				end_date: '2021-10-09',
				period: '0000-10-07',
				dependency: 13,
				status: '진행',
			},
			{
				pp_id: 15,
				pro_id: 5,
				plan_type: '테스트',
				start_date: '2021-06-04',
				end_date: '2022-03-02',
				period: '0000-09-27',
				dependency: null,
				status: '진행',
			},
			{
				pp_id: 16,
				pro_id: 6,
				plan_type: '설계',
				start_date: '2020-05-01',
				end_date: '2021-02-22',
				period: '0000-10-23',
				dependency: null,
				status: '종료',
			},
			{
				pp_id: 17,
				pro_id: 6,
				plan_type: '개발',
				start_date: '2021-02-23',
				end_date: '2022-05-16',
				period: '0001-03-22',
				dependency: 16,
				status: '종료',
			},
			{
				pp_id: 18,
				pro_id: 6,
				plan_type: '테스트',
				start_date: '2022-05-17',
				end_date: '2022-11-20',
				period: '0000-07-05',
				dependency: 17,
				status: '진행',
			},
		];
		await queryInterface.bulkInsert('proj_plan', pPlan_bulk, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('proj_plan', null, {});
	},
};