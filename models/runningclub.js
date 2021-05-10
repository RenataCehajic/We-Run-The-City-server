"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class runningclub extends Model {
    static associate(models) {
      runningclub.belongsTo(models.user);
      runningclub.hasOne(models.location);
    }
  }
  runningclub.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      isTraining: { type: DataTypes.BOOLEAN, allowNull: false },
      trainingPrice: DataTypes.INTEGER,
      runningLevel: DataTypes.STRING,
      trainingDuration: DataTypes.STRING,
      website: { type: DataTypes.STRING, allowNull: false },
      email: DataTypes.STRING,
      phoneNum: DataTypes.STRING,
      trainingHours: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.TEXT,
      image: DataTypes.TEXT,
      rate: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "runningclub",
    }
  );
  return runningclub;
};
