"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class ResidentsFamily extends Model {
		static associate(models) {
			ResidentsFamily.belongsTo(models.Resident, {
				foreignKey: "residentId",
			});
		}
	}
	ResidentsFamily.init(
		{
			residentId: DataTypes.STRING,
			sons: DataTypes.INTEGER,
			daughters: DataTypes.INTEGER,
			brothers: DataTypes.INTEGER,
			sisters: DataTypes.INTEGER,
			motherDeceased: DataTypes.BOOLEAN,
			fatherDeceased: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "ResidentsFamily",
		}
	);
	return ResidentsFamily;
};
