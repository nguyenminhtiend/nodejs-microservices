const userService = require('./userService');

module.exports = {
  async getUserInfo(req, res) {
    const result = await userService.getUserInfo();
    res.json(result);
  },
};
