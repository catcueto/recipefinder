// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// // NOT SURE IF WE'LL NEED THIS .JS FILE
// class AllMeals extends Model {}

// AllMeals.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     mealtime: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     ingredients: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     instructions: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },

//     file_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     time_created: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: DataTypes.NOW,
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "allMeals",
//   }
// );

// module.exports = AllMeals;