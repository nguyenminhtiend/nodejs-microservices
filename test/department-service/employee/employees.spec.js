const { seedEmployee, seedDepartment } = require('../helper/seed');
const generateToken = require('../../core/utils/getAccessToken');

describe('## Employee APIs', async () => {
  const accessToken = await generateToken();

  describe('# GET /department/employees', () => {
    it('should return access denied', async () => {
      const res = await chai
        .request(app)
        .get('/department/employees');

      expect(res).to.have.status(401);
    });

    it('should return all employees', async () => {
      await seedEmployee();

      const res = await chai
        .request(app)
        .get('/department/employees')
        .set('Authorization', `Bearer ${accessToken}`);

      expect(res).to.have.status(200);
      expect(res.body.total).to.equal(2);
    });
  });

  describe('# POST /employees', () => {
    it('should create a new employee', async () => {
      const departmentId = await seedDepartment();
      const employee = {
        name: 'Tien',
        departmentId,
      };
      const res = await chai
        .request(app)
        .post('/department/employees')
        .set('Authorization', `Bearer ${accessToken}`)
        .send(employee);

      expect(res).to.have.status(201);
      expect(res.body).to.like(employee);
      expect(res.body).to.have.property('id').and.not.equal(undefined);
    });

    it('should get bad request with invalid input', async () => {
      const employee = {};

      const res = await chai
        .request(app)
        .post('/department/employees')
        .set('Authorization', `Bearer ${accessToken}`)
        .send(employee);

      expect(res).to.have.status(400);
    });
  });
});
