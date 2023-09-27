"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Hobby extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Hobby.belongsTo(models.Resident, {
				foreignKey: "residentId",
			});
		}
	}
	Hobby.init(
		{
			residentId: DataTypes.UUID,
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Hobby",
		}
	);
	return Hobby;
};
