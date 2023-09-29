"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("ResidentsFamilies", {
			id: {
				primaryKey: true,
				defaultValue: Sequelize.literal("uuid_generate_v4()"),
				type: Sequelize.UUID,
			},
			residentId: {
				allowNull: false,
				type: Sequelize.UUID,
			},
			sons: {
				type: Sequelize.INTEGER,
			},
			daughters: {
				type: Sequelize.INTEGER,
			},
			brothers: {
				type: Sequelize.INTEGER,
			},
			sisters: {
				type: Sequelize.INTEGER,
			},
			motherDeceased: {
				type: Sequelize.BOOLEAN,
			},
			fatherDeceased: {
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("ResidentsFamilies");
	},
};
