FROM node:12.13-alpine

RUN mkdir -p /usr/app
RUN mkdir -p /usr/app/src

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --only=production

COPY src/core ./src/core
COPY src/department-service ./src/department-service

ENV NODE_ENV=production
ENV PUBLIC_KEY="-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAwHQVOurswNS3QOXZYT6+\ntt0vpgBFWA6YNi0dfKAoMwwt9vC+JL7O9/mglCa9ESqtL5SNHABP2u0UYymxMWum\nREiQE9Pz2fAvBxo5tDpA47q2+/UNVYfe4OT0oD/I2Ci/IB6+zrill1yHRBxU/O9X\nU22g3SNBnKNFMrQ3tJyPtdML9uiJpNCG5s2WwiFVsokdu7vPvKtH+Aatnen1Ymbh\nkMP8JuNCDOhN2nh8g0pP88a0KAzAHh1TURSONREXsKxHaJUnmU0QMsURFlHL6+L2\nJOh8qMmtDrW00y8iGUnRhTF51yYTPHIGTpgVQ3cgqPE1eyOypdUTW2jCD+CuQOOV\nIXPxgVIfW+i/v730F/66b1UfdSidsDndnPvvIjwLHT7VFZSiAInhN/il60KnYRAb\nuW979r3P/tab2LLGxOYPnw7JMyRdhvlKOn0Sdj+SJ2M1G/mp0J7mHyTf/sMowCpX\noDkkgFJjEIwIwAXx+gKx1QEKUwAu3qnCex5zp/C3GVCzeOOLv96xRxBl7Xyyb89Z\nNJ1+EpAUJtpjnCOpSXtY+VoKpHLoIUZiWpxEVpqlJC+JKpYbr64bD5m7PrThcgsj\n+t4wN3Jds0g1cF41YEOgi8z0eaDvwbq+zbM9QXzRj/vaemwxymxqAx+K7tW99gRp\nywl3XVIHzrvQ+6aXTDSFPdECAwEAAQ==\n-----END PUBLIC KEY-----\n"

EXPOSE 3000

CMD ["node", "src/core/server/index.js", "DepartmentService"]