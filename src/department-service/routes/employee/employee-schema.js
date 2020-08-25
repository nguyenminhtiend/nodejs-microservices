module.exports = {
  index: {
    query: {
      properties: {
        offset: { type: 'number', minimum: 0 },
        limit: { type: 'number', minimum: 0 },
      },
      coerceTypes: true,
    },
  },
  create: {
    body: {
      properties: {
        name: { type: 'string', minLength: 1 },
        departmentId: { type: 'number' },
      },
      required: ['name', 'departmentId'],
    },
  },
};
