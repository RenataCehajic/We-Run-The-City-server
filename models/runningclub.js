'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class runningclub extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  runningclub.init({
    title: DataTypes.STRING,
    isTraining: DataTypes.BOOLEAN,
    trainingPrice: DataTypes.INTEGER,
    runningLevel: DataTypes.STRING,
    trainingDuration: DataTypes.STRING,
    website: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
    trainingHours: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    rate: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'runningclub',
  });
  return runningclub;
};