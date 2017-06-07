const config = require('../../lib/config');
const hermesMQTT = require('hermesjs-mqtt');

const adapter = hermesMQTT({
  host_url: config.broker.mqtt.host_url,
  topics: config.broker.mqtt.topics,
  qos: config.broker.mqtt.qos,
  protocol: config.broker.mqtt.protocol,
  retain: config.broker.mqtt.retain,
  subscribe: true // ATTENTION: If subscribe is true you might receive the messages you send.
});

module.exports = adapter;
