const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Creates Breakfast Model
class Breakfast extends Model {}

Breakfast.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    breakfast_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_id: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "breakfast",
  }
);

module.exports = Breakfast;
