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
		const employee_bulk = [
			{
				emp_id: 1, 
				sal_id: 5,
				dept_id: 4,
				emp_name: "김지우",
				emp_r_num: "980604-1234567",
				emp_edu: "명지대학교",
				emp_birth_date: "1998-06-04",
				emp_status: 1,
				emp_hire_date: "2021-01-01",
				emp_rank: "사원",
				emp_seniority: 1,
				emp_sal_rate: 0,
				emp_retire_date: null,
				emp_work_year: 1,
				emp_web_id: "jiu10",
				emp_web_pw: 1234
			},
			{
				emp_id: 2, 
				sal_id: 1,
				dept_id: 6,
				emp_name: "김서연",
				emp_r_num: "980604-1234568",
				emp_edu: "명지대학교",
				emp_birth_date: "1998-06-04",
				emp_status: 1,
				emp_hire_date: "2021-01-01",
				emp_rank: "경영진",
				emp_seniority: 1,
				emp_sal_rate: 0,
				emp_retire_date: null,
				emp_work_year: 1,
				emp_web_id: "sy10",
				emp_web_pw: 1234
			},
			{
				emp_id: 3, 
				sal_id: 1,
				dept_id: 10,
				emp_name: "김서윤",
				emp_r_num: "980604-1234569",
				emp_edu: "명지대학교",
				emp_birth_date: "1998-06-04",
				emp_status: 1,
				emp_hire_date: "2021-01-01",
				emp_rank: "경영진",
				emp_seniority: 1,
				emp_sal_rate: 0,
				emp_retire_date: null,
				emp_work_year: 1,
				emp_web_id: "syu10",
				emp_web_pw: 1234
			},
			{
				emp_id: 4, 
				sal_id: 1,
				dept_id: 12,
				emp_name: "김민준",
				emp_r_num: "980604-1234570",
				emp_edu: "명지대학교",
				emp_birth_date: "1998-06-04",
				emp_status: 1,
				emp_hire_date: "2021-01-01",
				emp_rank: "경영진",
				emp_seniority: 1,
				emp_sal_rate: 0,
				emp_retire_date: null,
				emp_work_year: 1,
				emp_web_id: "minjun10",
				emp_web_pw: 1234
			},
			{
				emp_id: 5, 
				sal_id: 1,
				dept_id: 14,
				emp_name: "김민서",
				emp_r_num: "980604-1234571",
				emp_edu: "성균관대학교",
				emp_birth_date: "1998-06-04",
				emp_status: 1,
				emp_hire_date: "2021-01-01",
				emp_rank: "경영진",
				emp_seniority: 1,
				emp_sal_rate: 0,
				emp_retire_date: null,
				emp_work_year: 1,
				emp_web_id: "minsu10",
				emp_web_pw: 1234
			},
			{
				emp_id: 93, 
				sal_id: 21,
				dept_id: 17,
				emp_name: "김채윤",
				emp_r_num: "821229-1111111",
				emp_edu: "명지대학교",
				emp_birth_date: "1965-12-27",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 25,
				emp_web_id: "cheaun",
				emp_web_pw: 1234
			},
			{
				emp_id: 97, 
				sal_id: 25,
				dept_id: 12,
				emp_name: "김다인",
				emp_r_num: "0712311-111111",
				emp_edu: "광운대학교",
				emp_birth_date: "1966-03-21",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 24,
				emp_web_id: "dain123",
				emp_web_pw: 1234
			},
			{
				emp_id: 73, 
				sal_id: 40,
				dept_id: 2,
				emp_name: "김도연",
				emp_r_num: "080524-1111111",
				emp_edu: "명지대학교",
				emp_birth_date: "1966-05-04",
				emp_status: 1,
				emp_hire_date: "2012-01-01",
				emp_rank: "과장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 25,
				emp_web_id: "doyun",
				emp_web_pw: 1234
			},
			{
				emp_id: 81, 
				sal_id: 2,
				dept_id: 7,
				emp_name: "김연서",
				emp_r_num: "080524-1111111",
				emp_edu: "연세대학교",
				emp_birth_date: "1966-05-04",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 28,
				emp_web_id: "wyojnlsd1",
				emp_web_pw: 1234
			},
			{
				emp_id: 78, 
				sal_id: 5,
				dept_id: 4,
				emp_name: "김정원",
				emp_r_num: "091101-0111111",
				emp_edu: "서울대학교",
				emp_birth_date: "1966-10-30",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 27,
				emp_web_id: "jonwon",
				emp_web_pw: 1234
			},
			{
				emp_id: 86, 
				sal_id: 7,
				dept_id: 12,
				emp_name: "김진우",
				emp_r_num: "091101-0111111",
				emp_edu: "상명대학교",
				emp_birth_date: "1966-10-30",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 30,
				emp_web_id: "jinu12",
				emp_web_pw: 1234
			},
			{
				emp_id: 99, 
				sal_id: 2,
				dept_id: 2,
				emp_name: "김윤우",
				emp_r_num: "910129-1111111",
				emp_edu: "연세대학교",
				emp_birth_date: "1969-07-04",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 26,
				emp_web_id: "younu123",
				emp_web_pw: 1234
			},
			{
				emp_id: 96, 
				sal_id: 24,
				dept_id: 8,
				emp_name: "김지수",
				emp_r_num: "911221-1111111",
				emp_edu: "서울대학교",
				emp_birth_date: "1969-10-30",
				emp_status: 1,
				emp_hire_date: "2012-01-01",
				emp_rank: "과장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 23,
				emp_web_id: "jisu123",
				emp_web_pw: 1234
			},
			{
				emp_id: 98, 
				sal_id: 63,
				dept_id: 11,
				emp_name: "김소연",
				emp_r_num: "190124-1111111",
				emp_edu: "서울대학교",
				emp_birth_date: "1970-11-06",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 25,
				emp_web_id: "soyun123",
				emp_web_pw: 1234
			},
			{
				emp_id: 87, 
				sal_id: 2,
				dept_id: 13,
				emp_name: "김서아",
				emp_r_num: "720830-1111111",
				emp_edu: "충남대학교",
				emp_birth_date: "1972-05-02",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 30,
				emp_web_id: "dayun12",
				emp_web_pw: 1234
			},
			{
				emp_id: 94, 
				sal_id: 22,
				dept_id: 10,
				emp_name: "김서은",
				emp_r_num: "721219-1111111",
				emp_edu: "명지대학교",
				emp_birth_date: "1972-06-13",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 26,
				emp_web_id: "seoun123",
				emp_web_pw: 1234
			},
			{
				emp_id: 76, 
				sal_id: 3,
				dept_id: 2,
				emp_name: "김지환",
				emp_r_num: "260510-1111111",
				emp_edu: "명지대학교",
				emp_birth_date: "1974-01-12",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 27,
				emp_web_id: "jihwan",
				emp_web_pw: 1234
			},
			{
				emp_id: 84, 
				sal_id: 5,
				dept_id: 10,
				emp_name: "김주아",
				emp_r_num: "260510-1111111",
				emp_edu: "아주대학교",
				emp_birth_date: "1974-01-12",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 29,
				emp_web_id: "jua123",
				emp_web_pw: 1234
			},
			{
				emp_id: 92, 
				sal_id: 7,
				dept_id: 17,
				emp_name: "김유찬",
				emp_r_num: "261210-1111111",
				emp_edu: "명지대학교",
				emp_birth_date: "1974-03-26",
				emp_status: 1,
				emp_hire_date: "1998-01-01",
				emp_rank: "사원",
				emp_seniority: 1,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 24,
				emp_web_id: "yuchan",
				emp_web_pw: 1234
			},
			{
				emp_id: 89, 
				sal_id: 4,
				dept_id: 15,
				emp_name: "김지은",
				emp_r_num: "281022-1111111",
				emp_edu: "한양대학교",
				emp_birth_date: "1974-10-08",
				emp_status: 1,
				emp_hire_date: "1995-01-01",
				emp_rank: "사원",
				emp_seniority: 1,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 31,
				emp_web_id: "jiun12",
				emp_web_pw: 1234
			},
			{
				emp_id: 79, 
				sal_id: 6,
				dept_id: 5,
				emp_name: "김민성",
				emp_r_num: "101201-1111111",
				emp_edu: "광운대학교",
				emp_birth_date: "1977-10-01",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 27,
				emp_web_id: "minsong1",
				emp_web_pw: 1234
			},
			{
				emp_id: 88, 
				sal_id: 3,
				dept_id: 14,
				emp_name: "김다연",
				emp_r_num: "370701-1111111",
				emp_edu: "한경대학교",
				emp_birth_date: "1978-07-07",
				emp_status: 1,
				emp_hire_date: "1995-01-01",
				emp_rank: "사원",
				emp_seniority: 1,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 30,
				emp_web_id: "sea123",
				emp_web_pw: 1234
			},
			{
				emp_id: 91, 
				sal_id: 6,
				dept_id: 17,
				emp_name: "김예서",
				emp_r_num: "920113-1111111",
				emp_edu: "명지대학교",
				emp_birth_date: "1980-06-26",
				emp_status: 1,
				emp_hire_date: "1995-01-01",
				emp_rank: "사원",
				emp_seniority: 1,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 23,
				emp_web_id: "yesu123",
				emp_web_pw: 1234
			},
			{
				emp_id: 75, 
				sal_id: 2,
				dept_id: 15,
				emp_name: "김준혁",
				emp_r_num: "180728-1111111",
				emp_edu: "명지대학교",
				emp_birth_date: "1981-03-18",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 26,
				emp_web_id: "junhuk",
				emp_web_pw: 1234
			},
			{
				emp_id: 83, 
				sal_id: 4,
				dept_id: 10,
				emp_name: "김유빈",
				emp_r_num: "180728-1111112",
				emp_edu: "경기대학교",
				emp_birth_date: "1981-03-18",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 29,
				emp_web_id: "yubin1",
				emp_web_pw: 1234
			},
			{
				emp_id: 90, 
				sal_id: 5,
				dept_id: 17,
				emp_name: "김예나",
				emp_r_num: "191212-1111111",
				emp_edu: "서강대학교",
				emp_birth_date: "1981-08-20",
				emp_status: 1,
				emp_hire_date: "1995-01-01",
				emp_rank: "사원",
				emp_seniority: 1,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 31,
				emp_web_id: "yena12",
				emp_web_pw: 1234
			},
			{
				emp_id: 80, 
				sal_id: 7,
				dept_id: 7,
				emp_name: "김정민",
				emp_r_num: "731105-1111111",
				emp_edu: "서울대학교",
				emp_birth_date: "1983-05-07",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 28,
				emp_web_id: "jongmin1",
				emp_web_pw: 1234
			},
			{
				emp_id: 95, 
				sal_id: 23,
				dept_id: 7,
				emp_name: "김나윤",
				emp_r_num: "740612-1111111",
				emp_edu: "성균관대학교",
				emp_birth_date: "1983-07-26",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 27,
				emp_web_id: "nayoun12",
				emp_web_pw: 1234
			},
			{
				emp_id: 77, 
				sal_id: 4,
				dept_id: 3,
				emp_name: "김민주",
				emp_r_num: "750410-1111111",
				emp_edu: "성균관대학교",
				emp_birth_date: "1983-10-28",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 27,
				emp_web_id: "wongwon",
				emp_web_pw: 1234
			},
			{
				emp_id: 85, 
				sal_id: 6,
				dept_id: 10,
				emp_name: "김아인",
				emp_r_num: "750410-1111112",
				emp_edu: "서울대학교",
				emp_birth_date: "1983-10-28",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 29,
				emp_web_id: "ain123",
				emp_web_pw: 1234
			},
			{
				emp_id: 100, 
				sal_id: 23,
				dept_id: 3,
				emp_name: "김시후",
				emp_r_num: "020503-1111111",
				emp_edu: "서강대학교",
				emp_birth_date: "1984-09-12",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 27,
				emp_web_id: "sihu",
				emp_web_pw: 1234
			},
			{
				emp_id: 74, 
				sal_id: 40,
				dept_id: 3,
				emp_name: "김승민",
				emp_r_num: "020806-1111111",
				emp_edu: "명지대학교",
				emp_birth_date: "1984-10-07",
				emp_status: 1,
				emp_hire_date: "2012-01-01",
				emp_rank: "과장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 26,
				emp_web_id: "sonmin",
				emp_web_pw: 1234
			},
			{
				emp_id: 82, 
				sal_id: 3,
				dept_id: 8,
				emp_name: "김준영",
				emp_r_num: "020806-1111112",
				emp_edu: "서강대학교",
				emp_birth_date: "1984-10-07",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 28,
				emp_web_id: "jonyoung1",
				emp_web_pw: 1234
			},
			{
				emp_id: 23, 
				sal_id: 5,
				dept_id: 2,
				emp_name: "김수현",
				emp_r_num: "290626-1111111",
				emp_edu: "성균관대학교",
				emp_birth_date: "1985-08-28",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 8,
				emp_web_id: "kuyuuu",
				emp_web_pw: 1234
			},
			{
				emp_id: 36, 
				sal_id: 12,
				dept_id: 11,
				emp_name: "김건우",
				emp_r_num: "291006-1111111",
				emp_edu: "서강대학교",
				emp_birth_date: "1985-09-30",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 13,
				emp_web_id: "kuyuuu100",
				emp_web_pw: 1234
			},
			{
				emp_id: 43, 
				sal_id: 19,
				dept_id: 14,
				emp_name: "김서영",
				emp_r_num: "291006-1111112",
				emp_edu: "광운대학교",
				emp_birth_date: "1985-09-30",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 15,
				emp_web_id: "heart13",
				emp_web_pw: 1234
			},
			{
				emp_id: 50, 
				sal_id: 26,
				dept_id: 12,
				emp_name: "김소윤",
				emp_r_num: "291006-1111113",
				emp_edu: "상명대학교",
				emp_birth_date: "1985-09-30",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 18,
				emp_web_id: "jian1",
				emp_web_pw: 1234
			},
			{
				emp_id: 57, 
				sal_id: 45,
				dept_id: 10,
				emp_name: "김지율",
				emp_r_num: "291006-1111114",
				emp_edu: "명지대학교",
				emp_birth_date: "1985-09-30",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 20,
				emp_web_id: "skswldb",
				emp_web_pw: 1234
			},
			{
				emp_id: 64, 
				sal_id: 40,
				dept_id: 9,
				emp_name: "김예진",
				emp_r_num: "291006-1111115",
				emp_edu: "서강대학교",
				emp_birth_date: "1985-09-30",
				emp_status: 1,
				emp_hire_date: "2012-01-01",
				emp_rank: "과장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 22,
				emp_web_id: "youna1234",
				emp_web_pw: 1234
			},
			{
				emp_id: 71, 
				sal_id: 47,
				dept_id: 9,
				emp_name: "김승우",
				emp_r_num: "291006-1111116",
				emp_edu: "한양대학교",
				emp_birth_date: "1985-09-30",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 25,
				emp_web_id: "suuuu1004",
				emp_web_pw: 1234
			},
			{
				emp_id: 11, 
				sal_id: 7,
				dept_id: 3,
				emp_name: "김연우",
				emp_r_num: "300113-1111111",
				emp_edu: "경기대학교",
				emp_birth_date: "1985-10-29",
				emp_status: 1,
				emp_hire_date: "2019-01-01",
				emp_rank: "사원",
				emp_seniority: 3,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 3,
				emp_web_id: "juwon",
				emp_web_pw: 1234
			},
			{
				emp_id: 15, 
				sal_id: 11,
				dept_id: 2,
				emp_name: "김시우",
				emp_r_num: "541129-1111111",
				emp_edu: "충남대학교",
				emp_birth_date: "1986-01-15",
				emp_status: 1,
				emp_hire_date: "2017-01-01",
				emp_rank: "대리",
				emp_seniority: 5,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 5,
				emp_web_id: "hayun",
				emp_web_pw: 1234
			},
			{
				emp_id: 6, 
				sal_id: 2,
				dept_id: 11,
				emp_name: "김서현",
				emp_r_num: "570812-1111111",
				emp_edu: "서울대학교",
				emp_birth_date: "1986-11-02",
				emp_status: 0,
				emp_hire_date: "2020-01-01",
				emp_rank: "사원",
				emp_seniority: 2,
				emp_sal_rate: 1,
				emp_retire_date: "2021-01-01",
				emp_work_year: 2,
				emp_web_id: "suhyun10",
				emp_web_pw: 1234
			},
			{
				emp_id: 10, 
				sal_id: 6,
				dept_id: 2,
				emp_name: "김주원",
				emp_r_num: "821105-1111111",
				emp_edu: "서강대학교",
				emp_birth_date: "1987-03-18",
				emp_status: 1,
				emp_hire_date: "2019-01-01",
				emp_rank: "사원",
				emp_seniority: 3,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 3,
				emp_web_id: "juwon1",
				emp_web_pw: 1234
			},
			{
				emp_id: 34, 
				sal_id: 10,
				dept_id: 5,
				emp_name: "김준우",
				emp_r_num: "830605-1111111",
				emp_edu: "한경대학교",
				emp_birth_date: "1987-05-30",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 12,
				emp_web_id: "nice100",
				emp_web_pw: 1234
			},
			{
				emp_id: 41, 
				sal_id: 17,
				dept_id: 12,
				emp_name: "김다은",
				emp_r_num: "830605-1111112",
				emp_edu: "성균관대학교",
				emp_birth_date: "1987-05-30",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 14,
				emp_web_id: "daeun",
				emp_web_pw: 1234
			},
			{
				emp_id: 48, 
				sal_id: 24,
				dept_id: 6,
				emp_name: "김예원",
				emp_r_num: "830605-1111113",
				emp_edu: "아주대학교",
				emp_birth_date: "1987-05-30",
				emp_status: 1,
				emp_hire_date: "2012-01-01",
				emp_rank: "과장",
				emp_seniority: 10,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 17,
				emp_web_id: "uuu123",
				emp_web_pw: 1234
			},
			{
				emp_id: 55, 
				sal_id: 31,
				dept_id: 7,
				emp_name: "김예린",
				emp_r_num: "830605-1111114",
				emp_edu: "명지대학교",
				emp_birth_date: "1987-05-30",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 19,
				emp_web_id: "heart199",
				emp_web_pw: 1234
			},
			{
				emp_id: 62, 
				sal_id: 38,
				dept_id: 14,
				emp_name: "김민지",
				emp_r_num: "830605-1111115",
				emp_edu: "서울대학교",
				emp_birth_date: "1987-05-30",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 22,
				emp_web_id: "yuna10",
				emp_web_pw: 1234
			},
			{
				emp_id: 69, 
				sal_id: 7,
				dept_id: 7,
				emp_name: "김지현",
				emp_r_num: "830605-1111116",
				emp_edu: "충남대학교",
				emp_birth_date: "1987-05-30",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 24,
				emp_web_id: "jihyun1243",
				emp_web_pw: 1234
			},
			{
				emp_id: 32, 
				sal_id: 8,
				dept_id: 2,
				emp_name: "김은서",
				emp_r_num: "090918-1111111",
				emp_edu: "상명대학교",
				emp_birth_date: "1988-01-31",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 11,
				emp_web_id: "angel100",
				emp_web_pw: 1234
			},
			{
				emp_id: 39, 
				sal_id: 15,
				dept_id: 11,
				emp_name: "김수연",
				emp_r_num: "090918-1111112",
				emp_edu: "명지대학교",
				emp_birth_date: "1988-01-31",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 14,
				emp_web_id: "hellohi123",
				emp_web_pw: 1234
			},
			{
				emp_id: 46, 
				sal_id: 22,
				dept_id: 17,
				emp_name: "김예은",
				emp_r_num: "090918-1111113",
				emp_edu: "서강대학교",
				emp_birth_date: "1988-01-31",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 16,
				emp_web_id: "nice123",
				emp_web_pw: 1234
			},
			{
				emp_id: 53, 
				sal_id: 23,
				dept_id: 4,
				emp_name: "김승현",
				emp_r_num: "090918-1111114",
				emp_edu: "한양대학교",
				emp_birth_date: "1988-01-31",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 19,
				emp_web_id: "daeun",
				emp_web_pw: 1234
			},
			{
				emp_id: 60, 
				sal_id: 36,
				dept_id: 12,
				emp_name: "김은우",
				emp_r_num: "090918-1111115",
				emp_edu: "서울대학교",
				emp_birth_date: "1988-01-31",
				emp_status: 1,
				emp_hire_date: "2012-01-01",
				emp_rank: "과장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 21,
				emp_web_id: "qwe",
				emp_web_pw: 1234
			},
			{
				emp_id: 67, 
				sal_id: 43,
				dept_id: 12,
				emp_name: "김하린",
				emp_r_num: "090918-1111116",
				emp_edu: "서울대학교",
				emp_birth_date: "1988-01-31",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 23,
				emp_web_id: "haaa12",
				emp_web_pw: 1234
			},
			{
				emp_id: 21, 
				sal_id: 3,
				dept_id: 9,
				emp_name: "김채원",
				emp_r_num: "380609-1111111",
				emp_edu: "명지대학교",
				emp_birth_date: "1989-06-22",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 7,
				emp_web_id: "nice",
				emp_web_pw: 1234
			},
			{
				emp_id: 17, 
				sal_id: 13,
				dept_id: 4,
				emp_name: "김지윤",
				emp_r_num: "641220-1111111",
				emp_edu: "한양대학교",
				emp_birth_date: "1990-03-03",
				emp_status: 1,
				emp_hire_date: "2017-01-01",
				emp_rank: "대리",
				emp_seniority: 5,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 5,
				emp_web_id: "siwun",
				emp_web_pw: 1234
			},
			{
				emp_id: 7, 
				sal_id: 3,
				dept_id: 11,
				emp_name: "김지원",
				emp_r_num: "661120-1111111",
				emp_edu: "광운대학교",
				emp_birth_date: "1990-10-13",
				emp_status: 0,
				emp_hire_date: "2020-01-01",
				emp_rank: "사원",
				emp_seniority: 2,
				emp_sal_rate: 1,
				emp_retire_date: "2021-01-01",
				emp_work_year: 2,
				emp_web_id: "juwon10",
				emp_web_pw: 1234
			},
			{
				emp_id: 35, 
				sal_id: 11,
				dept_id: 6,
				emp_name: "김수아",
				emp_r_num: "670220-1111111",
				emp_edu: "한양대학교",
				emp_birth_date: "1990-11-05",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 12,
				emp_web_id: "sugyun100",
				emp_web_pw: 1234
			},
			{
				emp_id: 42, 
				sal_id: 18,
				dept_id: 13,
				emp_name: "김시윤",
				emp_r_num: "670220-1111112",
				emp_edu: "서울대학교",
				emp_birth_date: "1990-11-05",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 15,
				emp_web_id: "heart10",
				emp_web_pw: 1234
			},
			{
				emp_id: 49, 
				sal_id: 25,
				dept_id: 8,
				emp_name: "김지아",
				emp_r_num: "670220-1111113",
				emp_edu: "서울대학교",
				emp_birth_date: "1990-11-05",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 17,
				emp_web_id: "love1",
				emp_web_pw: 1234
			},
			{
				emp_id: 56, 
				sal_id: 32,
				dept_id: 9,
				emp_name: "김서우",
				emp_r_num: "670220-1111114",
				emp_edu: "명지대학교",
				emp_birth_date: "1990-11-05",
				emp_status: 1,
				emp_hire_date: "2012-01-01",
				emp_rank: "과장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 20,
				emp_web_id: "tjdn",
				emp_web_pw: 1234
			},
			{
				emp_id: 63, 
				sal_id: 39,
				dept_id: 2,
				emp_name: "김유나",
				emp_r_num: "670220-1111115",
				emp_edu: "연세대학교",
				emp_birth_date: "1990-11-05",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 22,
				emp_web_id: "wyjin10",
				emp_web_pw: 1234
			},
			{
				emp_id: 70, 
				sal_id: 7,
				dept_id: 8,
				emp_name: "김유준",
				emp_r_num: "670220-1111116",
				emp_edu: "한경대학교",
				emp_birth_date: "1990-11-05",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 24,
				emp_web_id: "youjun123",
				emp_web_pw: 1234
			},
			{
				emp_id: 12, 
				sal_id: 8,
				dept_id: 8,
				emp_name: "김도윤",
				emp_r_num: "670220-1111117",
				emp_edu: "아주대학교",
				emp_birth_date: "1991-03-10",
				emp_status: 1,
				emp_hire_date: "2018-01-01",
				emp_rank: "대리",
				emp_seniority: 4,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 4,
				emp_web_id: "yyuu",
				emp_web_pw: 1234
			},
			{
				emp_id: 31, 
				sal_id: 7,
				dept_id: 11,
				emp_name: "김준서",
				emp_r_num: "910824-1111111",
				emp_edu: "서울대학교",
				emp_birth_date: "1991-04-22",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 11,
				emp_web_id: "junsei",
				emp_web_pw: 1234
			},
			{
				emp_id: 38, 
				sal_id: 14,
				dept_id: 9,
				emp_name: "김시현",
				emp_r_num: "910824-1111112",
				emp_edu: "명지대학교",
				emp_birth_date: "1991-04-22",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 13,
				emp_web_id: "jian123",
				emp_web_pw: 1234
			},
			{
				emp_id: 45, 
				sal_id: 21,
				dept_id: 17,
				emp_name: "김현서",
				emp_r_num: "910824-1111113",
				emp_edu: "연세대학교",
				emp_birth_date: "1991-04-22",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 16,
				emp_web_id: "happy123",
				emp_web_pw: 1234
			},
			{
				emp_id: 52, 
				sal_id: 28,
				dept_id: 14,
				emp_name: "김현준",
				emp_r_num: "910824-1111114",
				emp_edu: "한경대학교",
				emp_birth_date: "1991-04-22",
				emp_status: 1,
				emp_hire_date: "2012-01-01",
				emp_rank: "과장",
				emp_seniority: 10,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 18,
				emp_web_id: "iamhyunu1",
				emp_web_pw: 1234
			},
			{
				emp_id: 59, 
				sal_id: 35,
				dept_id: 8,
				emp_name: "김정우",
				emp_r_num: "910824-1111115",
				emp_edu: "성균관대학교",
				emp_birth_date: "1991-04-22",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 21,
				emp_web_id: "asdf",
				emp_web_pw: 1234
			},
			{
				emp_id: 66, 
				sal_id: 42,
				dept_id: 5,
				emp_name: "김시연",
				emp_r_num: "910824-1111116",
				emp_edu: "아주대학교",
				emp_birth_date: "1991-04-22",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 23,
				emp_web_id: "ha1234",
				emp_web_pw: 1234
			},
			{
				emp_id: 9, 
				sal_id: 5,
				dept_id: 11,
				emp_name: "김지민",
				emp_r_num: "92116-1111111",
				emp_edu: "연세대학교",
				emp_birth_date: "1991-05-06",
				emp_status: 0,
				emp_hire_date: "2019-01-01",
				emp_rank: "사원",
				emp_seniority: 3,
				emp_sal_rate: 1,
				emp_retire_date: "2021-01-01",
				emp_retire_date: null,
				emp_work_year: 3,
				emp_web_id: "jimin",
				emp_web_pw: 1234
			},
			{
				emp_id: 33, 
				sal_id: 9,
				dept_id: 3,
				emp_name: "김지훈",
				emp_r_num: "910525-1111111",
				emp_edu: "충남대학교",
				emp_birth_date: "1991-05-25",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 12,
				emp_web_id: "happy100",
				emp_web_pw: 1234
			},
			{
				emp_id: 40, 
				sal_id: 16,
				dept_id: 5,
				emp_name: "김선우",
				emp_r_num: "910525-1111112",
				emp_edu: "명지대학교",
				emp_birth_date: "1991-05-25",
				emp_status: 1,
				emp_hire_date: "2012-01-01",
				emp_rank: "과장",
				emp_seniority: 10,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 14,
				emp_web_id: "iamhyunu123",
				emp_web_pw: 1234
			},
			{
				emp_id: 47, 
				sal_id: 23,
				dept_id: 5,
				emp_name: "김민재",
				emp_r_num: "910525-1111113",
				emp_edu: "경기대학교",
				emp_birth_date: "1991-05-25",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 17,
				emp_web_id: "sunininin123",
				emp_web_pw: 1234
			},
			{
				emp_id: 54, 
				sal_id: 30,
				dept_id: 3,
				emp_name: "김하율",
				emp_r_num: "910525-1111114",
				emp_edu: "서강대학교",
				emp_birth_date: "1991-05-25",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 19,
				emp_web_id: "heart33",
				emp_web_pw: 1234
			},
			{
				emp_id: 61, 
				sal_id: 37,
				dept_id: 14,
				emp_name: "김채은",
				emp_r_num: "910525-1111115",
				emp_edu: "광운대학교",
				emp_birth_date: "1991-05-25",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 21,
				emp_web_id: "asdg",
				emp_web_pw: 1234
			},
			{
				emp_id: 68, 
				sal_id: 44,
				dept_id: 13,
				emp_name: "김가은",
				emp_r_num: "910525-1111116",
				emp_edu: "상명대학교",
				emp_birth_date: "1991-05-25",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 24,
				emp_web_id: "gaun123",
				emp_web_pw: 1234
			},
			{
				emp_id: 28, 
				sal_id: 4,
				dept_id: 10,
				emp_name: "김도현",
				emp_r_num: "910525-1111117",
				emp_edu: "서강대학교",
				emp_birth_date: "1991-12-13",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 10,
				emp_web_id: "dohyunii",
				emp_web_pw: 1234
			},
			{
				emp_id: 25, 
				sal_id: 7,
				dept_id: 4,
				emp_name: "김지안",
				emp_r_num: "910525-1111118",
				emp_edu: "광운대학교",
				emp_birth_date: "1992-04-20",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 9,
				emp_web_id: "jian",
				emp_web_pw: 1234
			},
			{
				emp_id: 13, 
				sal_id: 9,
				dept_id: 9,
				emp_name: "김윤서",
				emp_r_num: "910525-1111119",
				emp_edu: "서울대학교",
				emp_birth_date: "1992-05-05",
				emp_status: 1,
				emp_hire_date: "2018-01-01",
				emp_rank: "대리",
				emp_seniority: 4,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 4,
				emp_web_id: "dowun",
				emp_web_pw: 1234
			},{
				emp_id: 14, 
				sal_id: 10,
				dept_id: 10,
				emp_name: "김하윤",
				emp_r_num: "910525-1111120",
				emp_edu: "상명대학교",
				emp_birth_date: "1992-10-04",
				emp_status: 1,
				emp_hire_date: "2018-01-01",
				emp_rank: "대리",
				emp_seniority: 4,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 4,
				emp_web_id: "unseo",
				emp_web_pw: 1234
			},
			{
				emp_id: 20, 
				sal_id: 2,
				dept_id: 10,
				emp_name: "김지호",
				emp_r_num: "480306-5111111",
				emp_edu: "명지대학교",
				emp_birth_date: "1993-07-05",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 7,
				emp_web_id: "happy",
				emp_web_pw: 1234
			},
			{
				emp_id: 26, 
				sal_id: 2,
				dept_id: 5,
				emp_name: "김유진",
				emp_r_num: "480306-5111112",
				emp_edu: "서울대학교",
				emp_birth_date: "1993-07-05",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 9,
				emp_web_id: "hellohi",
				emp_web_pw: 1234
			},
			{
				emp_id: 24, 
				sal_id: 6,
				dept_id: 3,
				emp_name: "김지유",
				emp_r_num: "480306-5111113",
				emp_edu: "서울대학교",
				emp_birth_date: "1993-07-05",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 8,
				emp_web_id: "love1004",
				emp_web_pw: 1234
			},
			{
				emp_id: 16, 
				sal_id: 12,
				dept_id: 3,
				emp_name: "김서진",
				emp_r_num: "480306-5111114",
				emp_edu: "한경대학교",
				emp_birth_date: "1993-07-05",
				emp_status: 1,
				emp_hire_date: "2017-01-01",
				emp_rank: "대리",
				emp_seniority: 5,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 5,
				emp_web_id: "sujin10",
				emp_web_pw: 1234
			},
			{
				emp_id: 29, 
				sal_id: 5,
				dept_id: 12,
				emp_name: "김수빈",
				emp_r_num: "480306-5111115",
				emp_edu: "경기대학교",
				emp_birth_date: "1993-07-05",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 10,
				emp_web_id: "subin",
				emp_web_pw: 1234
			},
			{
				emp_id: 18, 
				sal_id: 14,
				dept_id: 6,
				emp_name: "김예준",
				emp_r_num: "480306-5111116",
				emp_edu: "서강대학교",
				emp_birth_date: "1993-07-05",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "대리",
				emp_seniority: 6,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 6,
				emp_web_id: "yejun",
				emp_web_pw: 1234
			},
			{
				emp_id: 8, 
				sal_id: 4,
				dept_id: 11,
				emp_name: "김서준",
				emp_r_num: "480306-5111117",
				emp_edu: "서울대학교",
				emp_birth_date: "1993-07-05",
				emp_status: 0,
				emp_hire_date: "2020-01-01",
				emp_rank: "사원",
				emp_seniority: 2,
				emp_sal_rate: 1,
				emp_retire_date: "2021-01-01",
				emp_work_year: 2,
				emp_web_id: "sujun",
				emp_web_pw: 1234
			},
			{
				emp_id: 22, 
				sal_id: 4,
				dept_id: 11,
				emp_name: "김하은",
				emp_r_num: "740325-1111111",
				emp_edu: "명지대학교",
				emp_birth_date: "1994-02-20",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 8,
				emp_web_id: "sugyun",
				emp_web_pw: 1234
			},
			{
				emp_id: 27, 
				sal_id: 3,
				dept_id: 6,
				emp_name: "김현우",
				emp_r_num: "750110-1111111",
				emp_edu: "연세대학교",
				emp_birth_date: "1994-05-11",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 9,
				emp_web_id: "iamhyunu",
				emp_web_pw: 1234
			},
			{
				emp_id: 30, 
				sal_id: 6,
				dept_id: 14,
				emp_name: "김하준",
				emp_r_num: "751125-1111111",
				emp_edu: "아주대학교",
				emp_birth_date: "1994-08-30",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 11,
				emp_web_id: "hajunuu",
				emp_web_pw: 1234
			},
			{
				emp_id: 19, 
				sal_id: 15,
				dept_id: 7,
				emp_name: "김지후",
				emp_r_num: "010723-1111111",
				emp_edu: "명지대학교",
				emp_birth_date: "1995-02-01",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "대리",
				emp_seniority: 6,
				emp_sal_rate: 1,
				emp_retire_date: null,
				emp_work_year: 6,
				emp_web_id: "angel",
				emp_web_pw: 1234
			},
			{
				emp_id: 37, 
				sal_id: 13,
				dept_id: 8,
				emp_name: "김우진",
				emp_r_num: "020217-1112111",
				emp_edu: "명지대학교",
				emp_birth_date: "1995-04-10",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 13,
				emp_web_id: "love123",
				emp_web_pw: 1234
			},
			{
				emp_id: 44, 
				sal_id: 20,
				dept_id: 15,
				emp_name: "김수민",
				emp_r_num: "020217-1111311",
				emp_edu: "서울대학교",
				emp_birth_date: "1995-04-10",
				emp_status: 1,
				emp_hire_date: "2012-01-01",
				emp_rank: "과장",
				emp_seniority: 10,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 16,
				emp_web_id: "angel123",
				emp_web_pw: 1234
			},
			{
				emp_id: 51, 
				sal_id: 7,
				dept_id: 14,
				emp_name: "김소율",
				emp_r_num: "020217-1111121",
				emp_edu: "충남대학교",
				emp_birth_date: "1995-04-10",
				emp_status: 1,
				emp_hire_date: "2016-01-01",
				emp_rank: "사원",
				emp_seniority: 6,
				emp_sal_rate: 2,
				emp_retire_date: null,
				emp_work_year: 18,
				emp_web_id: "hellohi1",
				emp_web_pw: 1234
			},
			{
				emp_id: 58, 
				sal_id: 47,
				dept_id: 6,
				emp_name: "김시은",
				emp_r_num: "020217-1111511",
				emp_edu: "명지대학교",
				emp_birth_date: "1995-04-10",
				emp_status: 1,
				emp_hire_date: "2007-01-01",
				emp_rank: "부장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 20,
				emp_web_id: "tskstldm",
				emp_web_pw: 1234
			},
			{
				emp_id: 65, 
				sal_id: 41,
				dept_id: 15,
				emp_name: "김윤아",
				emp_r_num: "020217-1111711",
				emp_edu: "경기대학교",
				emp_birth_date: "1995-04-10",
				emp_status: 1,
				emp_hire_date: "2014-01-01",
				emp_rank: "대리",
				emp_seniority: 8,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 23,
				emp_web_id: "si1234",
				emp_web_pw: 1234
			},
			{
				emp_id: 72, 
				sal_id: 40,
				dept_id: 15,
				emp_name: "김서율",
				emp_r_num: "020217-1111111",
				emp_edu: "서강대학교",
				emp_birth_date: "1995-04-10",
				emp_status: 1,
				emp_hire_date: "2012-01-01",
				emp_rank: "과장",
				emp_seniority: 10,
				emp_sal_rate: 3,
				emp_retire_date: null,
				emp_work_year: 25,
				emp_web_id: "seouill",
				emp_web_pw: 1234}
		];
		await queryInterface.bulkInsert('employee', employee_bulk, {});
	},
	
	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('employee', null, {});
	},
};