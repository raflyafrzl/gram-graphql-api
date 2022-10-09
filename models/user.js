"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          msg: "Email has been used",
          args: true,
        },
        allowNull: {
          msg: "email must be valid",
          args: false,
        },
      },
      username: {
        type: DataTypes.STRING,
        unique: {
          msg: "Username has been used",
          args: true,
        },
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: {
          msg: "password cannot be empty",
          args: false,
        },
      },
      profile_image_url: {
        type: DataTypes.STRING,
        validate: {
          isUrl: {
            msg: "Url must be valid",
            args: true,
          },
        },
        allowNull: {
          msg: "url cannot be empty",
          args: false,
        },
      },
      age: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            msg: "age must be a number",
            args: true,
          },
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: {
          msg: "Phone number cannot be empty",
          args: false,
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
