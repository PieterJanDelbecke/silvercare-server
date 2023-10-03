"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class ResidentHobby extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			ResidentHobby.belongsTo(models.Resident, {
				foreignKey: "residentId",
			});
			ResidentHobby.belongsTo(models.Hobby, {
				foreignKey: "hobbyId",
			});
		}
	}
	ResidentHobby.init(
		{
			residentId: DataTypes.UUID,
			hobbyId: DataTypes.UUID,
		},
		{
			sequelize,
			modelName: "ResidentHobby",
		}
	);
	return ResidentHobby;
};
