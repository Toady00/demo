FROM dtr.dev/levvel/nodejs:4.4.3

ENV PORT 6000

WORKDIR /demo

COPY package.json ./

RUN npm install

COPY index.js ./

EXPOSE $PORT
CMD ["npm", "start"]
