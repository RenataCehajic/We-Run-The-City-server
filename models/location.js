"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    static associate(models) {
      location.belongsTo(models.runningclub);
      location.hasMany(models.review);
    }
  }
  location.init(
    {
      address: { type: DataTypes.STRING, allowNull: false },
      longitude: DataTypes.FLOAT,
      latitude: DataTypes.FLOAT,
      runningclubId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "location",
    }
  );
  return location;
};
