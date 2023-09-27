const { v4: uuidv4 } = require("uuid");

("use strict");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Hobbies", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: uuidv4(),
			},
			userId: {
				type: Sequelize.UUID,
				references: {
					model: {
						tableName: "Residents",
					},
					key: "id",
				},
				allowNull: false,
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			name: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable("Hobbies");
	},
};
