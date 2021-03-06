const { v4 } = require('uuid');
const generateToken = require('../../../src/auth-service/service/generateToken');

module.exports = async () => {
  const jwtData = {
    id: v4(),
    refreshToken: v4(),
    username: 'test-user',
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 3600,
  };
  const accessToken = await generateToken(jwtData);
  return accessToken;
};
