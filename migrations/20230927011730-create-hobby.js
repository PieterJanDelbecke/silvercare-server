("use strict");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Hobbies", {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.literal("uuid_generate_v4()"),
				primaryKey: true,
			},
			residentId: {
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
