'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kontraktor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kontraktor.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      nama: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      nomer_telepon: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      alamat: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'kontraktor',
      tableName: 'kontraktor',
      underscored: true,
    }
  );
  return kontraktor;
};
