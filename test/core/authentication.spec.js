const httpMock = require('node-mocks-http');
const { AppError } = require('../../src/core/utils');
const { authentication } = require('../../src/core/middlewares');
const generateToken = require('./utils/getAccessToken');

describe('## Employee APIs', async () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should throw authorization header is missing', async () => {
    const req = httpMock.createRequest();
    const res = httpMock.createResponse();
    const next = sinon.stub();

    const action = authentication.bind(req, res, next);

    expect(action).to
      .throw(AppError, 'Authorization header is missing')
      .with.property('code', 401);
  });

  it('should throw authorization header format is invalid', async () => {
    const req = httpMock.createRequest({
      headers: { Authorization: 'Invalid' },
    });
    const res = httpMock.createResponse();
    const next = sinon.stub();

    const action = authentication.bind(null, req, res, next);

    expect(action).to
      .throw(AppError, 'Authorization header format is invalid')
      .with.property('code', 401);
  });

  it('should throw invalid access token', async () => {
    const req = httpMock.createRequest({
      headers: { Authorization: 'Bearer invalid-token' },
    });
    const res = httpMock.createResponse();
    const next = sinon.stub();

    const action = authentication.bind(null, req, res, next);

    expect(action).to.throw('jwt malformed');
  });

  it('should call next with valid access token', async () => {
    const accessToken = await generateToken();
    const req = httpMock.createRequest({
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const res = httpMock.createResponse();
    const next = sinon.stub();

    authentication(req, res, next);

    expect(next.calledOnce).to.be.true;
  });
});
