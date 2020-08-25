const UserService = require('./user-service');

module.exports = class UserController {
  static async getUserInfo(req, res) {
    const result = await UserService.getUserInfo();
    res.json(result);
  }

  static async register(req, res) {
    const result = await UserService.register(req.body);
    res.json(result);
  }
};
