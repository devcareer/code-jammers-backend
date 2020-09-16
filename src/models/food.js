'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
   
    static associate(models) {
    
    }
  };
  Food.init({
    id: DataTypes.INTEGER,
    countryId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    gallery: DataTypes.STRING,
    event: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};