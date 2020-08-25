const { Model, DataTypes } = require('sequelize');

class UserRole extends Model {
  static get _attributes() {
    return {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    };
  }

  static get _options() {
    return {
      tableName: 'userRoles',
      timestamps: false,
    };
  }
}

module.exports = UserRole;
