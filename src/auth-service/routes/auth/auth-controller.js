const AuthService = require('./auth-service');

module.exports = class AuthController {
  static async login(req, res) {
    const result = await AuthService.login(req.body);
    res.json(result);
  }

  static async refreshToken(req, res) {
    const result = await AuthService.refreshToken(req.body);
    res.json(result);
  }

  static async logout(req, res) {
    const { refreshToken } = req.decoded;
    await AuthService.logout(refreshToken);
    res.status(204).send();
  }
};
