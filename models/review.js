"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    static associate(models) {
      review.belongsTo(models.user);
      review.belongsTo(models.location);
    }
  }
  review.init(
    {
      time: DataTypes.DATE,
      content: { type: DataTypes.TEXT, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      locationId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "review",
    }
  );
  return review;
};
