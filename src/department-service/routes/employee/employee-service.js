const { Op } = require('sequelize');
const { Employee, Department } = require('../../models');
const { AppError } = require('../../../core/utils');

module.exports = class EmployeeService {
  static async getBy({ keyword = '', offset = 0, limit = 10 }) {
    const where = {};
    if (keyword) {
      where.name = { [Op.like]: `%${keyword}%` };
    }
    const include = [
      {
        model: Department,
        as: 'department',
        attributes: ['name'],
        required: true,
      },
    ];
    const [total, data] = await Promise.all([
      Employee.count({
        where,
        include,
      }),
      Employee.findAll({
        where,
        attributes: { exclude: ['updatedAt'] },
        include,
        offset,
        limit,
      }),
    ]);
    return { total, data };
  }

  static async getById(id) {
    const employee = await Employee.findByPk(id, {
      attributes: { exclude: ['updatedAt'] },
      include: [
        {
          model: Department,
          as: 'department',
          attributes: ['id', 'name'],
        },
      ],
    });
    return employee;
  }

  static async create(employee) {
    return Employee.create(employee);
  }

  static async update(id, employee) {
    const [affectedRows] = await Employee.update(employee, {
      where: {
        id,
      },
    });
    if (affectedRows === 0) throw new AppError('No record is updated.');
  }
};
