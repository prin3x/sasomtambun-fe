# base image
FROM node:15.3.0-alpine3.10

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install craco-less@1.17.0 --legacy-peer-deps
RUN npm install
RUN npm install react-scripts -g

# add app
COPY . ./
RUN npm run build

# start app
CMD ["npm", "start"]