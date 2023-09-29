"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Hobby extends Model {
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
