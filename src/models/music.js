'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Music extends Model {
    
    static associate(models) {
     
    }
  };
  Music.init({
    id: DataTypes.INTEGER,
    countryId: DataTypes.INTEGER,
    category: DataTypes.STRING,
    gallery: DataTypes.STRING,
    event: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Music',
  });
  return Music;
};