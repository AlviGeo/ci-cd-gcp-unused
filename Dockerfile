# Developer: Kelvin
# Email: 1831148.kelvin@uib.edu
# Code Version: 0.1
FROM node:16

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 8080

CMD ["npm", "start" ]
