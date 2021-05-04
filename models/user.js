"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.runningclub);
      user.hasMany(models.review);
    }
  }
  user.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNum: {
        type: DataTypes.STRING,
      },
      isOwner: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
