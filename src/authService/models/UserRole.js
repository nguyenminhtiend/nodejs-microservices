const { Model, DataTypes } = require('sequelize');
const { v4 } = require('uuid');

class UserRole extends Model {
  static get _attributes() {
    return {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: v4(),
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
