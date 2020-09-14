<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
  const Culture = sequelize.define("Food", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    countryId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    types: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    methodOfPreparation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
  Food.associate = (models) => {
    Food.belongsTo(models.Country, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Food;
};
=======
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
>>>>>>> resolve conflict
