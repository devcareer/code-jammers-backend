export default (sequelize, DataTypes) => {
    const Profile = sequelize.define("Profile", {

        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
            },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    });
        Profile.associate = (models) => {
            Profile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
            },
            });
        };
        return Profile;
};