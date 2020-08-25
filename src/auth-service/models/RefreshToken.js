const { Model, DataTypes } = require('sequelize');

class RefreshToken extends Model {
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
      expireAt: {
        type: DataTypes.DATE,
      },
    };
  }

  static get _options() {
    return {
      tableName: 'refreshTokens',
      timestamps: true,
      updatedAt: false,
    };
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  }
}

module.exports = RefreshToken;
