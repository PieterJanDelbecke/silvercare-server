"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Resident extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Resident.hasMany(models.Hobby, {
				foreignKey: "residentId",
			});
			Resident.hasOne(models.ResidentsFamily, {
				foreignKey: "residentId",
			});
		}
	}
	Resident.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			DOB: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "Resident",
		}
	);
	return Resident;
};
