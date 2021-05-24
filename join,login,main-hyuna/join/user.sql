DROP TABLE IF EXISTS db.user;

CREATE TABLE db.user
(
	id                   INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	pw                   VARCHAR(20),
	email                VARCHAR(30),
	enroll_date          DATETIME,
	user_name            VARCHAR(5),
);
