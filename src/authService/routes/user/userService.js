const { User, Role, sequelize } = require('../../models');

const getUserInfo = async () => {
  const userId = 'bc5a97e7-6d5a-4ec5-8c4a-3df93bc78feb';
  const user = await User.findOne({
    where: { id: userId },
    attributes: ['id', 'username'],
    include: [{
      model: Role,
      as: 'roles',
      attributes: ['name'],
      through: { attributes: [] },
    }],
  });

  await sequelize.transaction(async () => {
    user.setRoles(['bc5a97e7-6d5a-4ec5-8c4a-3df93bc78fee']);
    await user.save();
  });

  return { user };
};

module.exports = {
  getUserInfo,
};
