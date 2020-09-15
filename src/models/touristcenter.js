module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const TouristCenter = sequelize.define("TouristCenters", {
=======
=======
>>>>>>> c26409e... feature(tourist-city-models) - create models
    const TouristCenter = sequelize.define("TouristCenter", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
<<<<<<< HEAD
>>>>>>> 29193c4... feature(tourist-city-models) - create models
=======
>>>>>>> c26409e... feature(tourist-city-models) - create models
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gallary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
=======
  const TouristCenter = sequelize.define("TouristCenters", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gallary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  TouristCenter.associate = models => {
    TouristCenter.belongsTo(models.Country, {
      as: "country",
      foreignKey: "countryId",
      onDelete: "cascade",
>>>>>>> aa32979... feature(tourist-city-models) - create tourist center and city models
    });

    TouristCenter.associate = (models) => {
      TouristCenter.belongsTo(models.Country, {
        foreignKey: {
          allowNull: false,
        },
      });
    };

    return TouristCenter;
  };
