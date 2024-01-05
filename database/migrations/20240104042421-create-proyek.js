'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('proyek', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      kontraktor_id: {
        allowNull: false,
        references: {
          model: 'kontraktor',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.UUID,
      },
      nama: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      deskripsi: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tanggal_mulai: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      tanggal_selesai: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('Perencanaan', 'Pembangunan', 'Selesai'),
      },
      created_at: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('proyek');
  },
};
