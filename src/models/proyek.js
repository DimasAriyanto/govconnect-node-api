'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proyek extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  proyek.init(
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      kontraktor_id: {
        allowNull: false,
        references: {
          model: 'kontraktor',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: DataTypes.UUID,
      },
      nama: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      deskripsi: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tanggal_mulai: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      tanggal_selesai: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM('Perencanaan', 'Pembangunan', 'Selesai'),
      },
    },
    {
      sequelize,
      modelName: 'proyek',
    }
  );
  return proyek;
};
