const { Department } = require('../../../../src/department-service/models');

module.exports = async () => {
  await Department.destroy({ truncate: { cascade: true } });
  const { id } = await Department.create({ name: 'IT' });
  return id;
};
