# FROM oraclelinux:7-slim
FROM node:16-alpine

WORKDIR /COREAPI-NODEJS

COPY package.json .

# Update Oracle Linux
# Install Node.js
# Install the Oracle Instant Client
# Check that Node.js and NPM installed correctly
# Install the OracleDB driver
# RUN yum update -y && \
#   yum install -y oracle-release-el7 && \
#   yum install -y oracle-nodejs-release-el7 && \
#   yum install -y --disablerepo=ol7_developer_EPEL nodejs && \
#   yum install -y oracle-instantclient19.3-basic.x86_64 && \
#   yum clean all && \
#   node --version && \
#   npm --version && \
#   npm install oracledb && \
#   echo Installed

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","test"]
