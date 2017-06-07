'use strict';

const hermes = require('hermesjs')();
const buffer2string = require('./middlewares/buffer2string');
const json2string = require('./middlewares/json2string');
const logger = require('./middlewares/logger');
const MqttAdapter = require('./adapters/mqtt');
const streetlights = require('./routes/streetlights.js');

hermes.add('broker', MqttAdapter);

hermes.on('broker:ready', ({name}) => {
  console.log(`${name} is listening...`);
});

hermes.use(buffer2string);
hermes.use(logger);
hermes.from.client.use(json2string);

hermes.use(streetlights);

hermes.use((err, message, next) => {
  console.error(err);
  next();
});

hermes.listen();
