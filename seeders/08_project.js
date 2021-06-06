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
		const project_bulk = [
			{
				pro_id: 1,
				cus_id: 1,
				pro_title: '명지대학교 홈페이지 리뉴얼',
				pro_type: '웹 서비스',
				pro_contact_date: '2015-01-01',
				pro_end_date: '2018-02-22',
				contract_amount: 1500,
				balance: 0,
			},
			{
				pro_id: 2,
				cus_id: 2,
				pro_title: '서대문구청 홈페이지 리뉴얼',
				pro_type: '웹 서비스',
				pro_contact_date: '2017-03-14',
				pro_end_date: '2020-02-03',
				contract_amount: 800,
				balance: 0,
			},
			{
				pro_id: 3,
				cus_id: 1,
				pro_title: '명지대학교 uCheck service 개발',
				pro_type: '안드로이드',
				pro_contact_date: '2018-05-23',
				pro_end_date: '2019-12-30',
				contract_amount: 500,
				balance: 0,
			},
			{
				pro_id: 4,
				cus_id: 1,
				pro_title: '도서관 홈페이지 개발',
				pro_type: '웹 서비스',
				pro_contact_date: '2018-11-30',
				pro_end_date: '2020-03-05',
				contract_amount: 1000,
				balance: 0,
			},
			{
				pro_id: 5,
				cus_id: 1,
				pro_title: '데이터베이스 최적화 솔루션',
				pro_type: '데이터베이스',
				pro_contact_date: '19-12-30',
				pro_end_date: '22-03-05',
				contract_amount: 2200,
				balance: 1500,
			},
			{
				pro_id: 6,
				cus_id: 1,
				pro_title: '도서관 어플리케이션 개발',
				pro_type: '안드로이드',
				pro_contact_date: '2020-05-01',
				pro_end_date: '2022-11-20',
				contract_amount: 500,
				balance: 400,
			},
		];
		await queryInterface.bulkInsert('project', project_bulk, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('project', null, {});
	},
};
