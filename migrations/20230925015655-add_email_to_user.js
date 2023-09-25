"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.addColumn("Users", "email", {
				type: Sequelize.STRING,
			}),
			queryInterface.addColumn("Users", "password", {
				type: Sequelize.STRING,
			}),
		]);
	},

	down: (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.removeColumn("Users", "email"),
			queryInterface.removeColumn("Users", "password"),
		]);
	},
};
