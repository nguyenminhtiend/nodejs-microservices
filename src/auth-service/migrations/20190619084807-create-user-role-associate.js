module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('userRoles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      roleId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Roles',
          key: 'id',
        },
      },
    });
  },
  down(queryInterface) {
    return queryInterface.dropTable('userRoles');
  },
};
