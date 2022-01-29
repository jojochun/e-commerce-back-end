// import class: Model and object: Datatypes from sequelize
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//  class: Category inherits all the functionality class: Model has
class Category extends Model {

}

// initialize model's data and configuration. 
// Pass in 2 objects: obj1 defines columns and data types,obj2 configures options for the table

Category.init(
  {
    // obj1: define columns
    // define id column:
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true
    },
    // define category_name column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },

  {
    // obj2: configure options:
    // pass in imported sequelize connection (the direct connection to our dabatabase)
    sequelize,
    // don't auto create timestamp
    timestamps: false,
    // don't pluralize db table
    freezeTableName: true,
    // use underscore instead of camel-case
    underscored: true,
    // model name stays lowercase in db
    modelName: 'category',
  }
);

module.exports = Category;
