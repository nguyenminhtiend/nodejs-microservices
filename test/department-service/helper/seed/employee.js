const { Employee, Department, sequelize } = require('../../../../src/department-service/models');

module.exports = async () => {
  await sequelize.transaction(async () => {
    await Employee.destroy({ truncate: { cascade: true } });
    await Department.destroy({ truncate: { cascade: true } });

    const { id: departmentId } = await Department.create({ name: 'Test department' });
    const employees = [
      { name: 'Test 1', departmentId },
      { name: 'Test 2', departmentId },
    ];
    await Employee.bulkCreate(employees);
  });
};
