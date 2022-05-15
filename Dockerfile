FROM node:16

WORKDIR /app

COPY package.json /app

RUN npm install -g nodemon

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm", "start" ]

# Command for build Image
# docker build .

# Command for expose port per image
# docker run -p 3000:3000 [image id]
