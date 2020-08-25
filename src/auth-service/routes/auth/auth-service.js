const bcrypt = require('bcryptjs');
const moment = require('moment');
const { User, RefreshToken, sequelize } = require('../../models');
const { AppError } = require('../../../core/utils');
const generateToken = require('../../service/generateToken');

const _generateAccessToken = async (user, refreshToken) => {
  const expiresIn = Math.floor(Date.now() / 1000) + 60 * 60 * 3600;
  const jwtData = {
    id: user.id,
    username: user.username,
    refreshToken,
    exp: expiresIn,
  };
  const accessToken = await generateToken(jwtData);
  return {
    accessToken,
    refreshToken,
    expiresIn,
  };
};

class AuthService {
  static async login({ username, password }) {
    const user = await User.findOne({
      where: { username },
    });
    if (!user) throw new AppError('Username or password is not correct!');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new AppError('Username or password is not correct!');

    const refreshToken = await RefreshToken.create({
      userId: user.id,
      expireAt: moment().add(30, 'days'),
    });
    return _generateAccessToken(user, refreshToken.id);
  }

  static async refreshToken(data) {
    const refreshToken = await RefreshToken.findOne({
      where: { id: data.refreshToken },
      include: [{
        model: User,
        as: 'user',
        attributes: ['id', 'username'],
        required: true,
      }],
    });
    if (!refreshToken) throw new AppError('Refresh token not found.');

    if (moment().isAfter(refreshToken.expireAt)) throw new AppError('Refresh token has been expired.');

    const newRefreshTokenId = await sequelize.transaction(async () => {
      const newRefreshToken = await RefreshToken.create({
        userId: refreshToken.user.id,
        expireAt: moment().add(30, 'days'),
      });
      await refreshToken.destroy();
      return newRefreshToken.id;
    });
    return _generateAccessToken(refreshToken.user, newRefreshTokenId);
  }

  static async logout(refreshToken) {
    const isSuccess = await RefreshToken.destroy({
      where: { id: refreshToken },
    });
    if (!isSuccess) throw new AppError('Refresh token not found.');
  }
}

module.exports = AuthService;
