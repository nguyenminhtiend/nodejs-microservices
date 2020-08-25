const bcrypt = require('bcryptjs');
const { User, Role } = require('../../models');

class UserService {
  static async register(user) {
    const passwordHash = await bcrypt.hashSync(user.password, 10);
    await User.create({
      username: user.username,
      password: passwordHash,
    });
  }

  static async getUserInfo(id) {
    const user = await User.findOne({
      where: { id },
      attributes: ['id', 'username'],
      include: [{
        model: Role,
        as: 'roles',
        attributes: ['name'],
        through: { attributes: [] },
      }],
    });
    return { user };
  }
}

module.exports = UserService;
