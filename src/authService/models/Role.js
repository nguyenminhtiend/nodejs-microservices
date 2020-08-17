const { Model, DataTypes } = require('sequelize');
const { v4 } = require('uuid');

class Role extends Model {
  static get _attributes() {
    return {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: v4(),
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    };
  }

  static get _options() {
    return {
      tableName: 'roles',
    };
  }
}

module.exports = Role;
