module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('files', 'user_id', {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('files', 'user_id');
  },
};
