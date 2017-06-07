const streetlights = module.exports = {};

/**
 * A message indicating us if we should turn the light on or 
 * off.
 *
 * @param {Object} options
 * @param {Object} options.message
 * @param {String} options.message.payload.command - Whether to turn on or off the light.
 * @param {String} options.message.payload.sent_at
 */
streetlights.streetlightIdTurnOn = async ({message}) => {
  // Implement your business logic here...
};

/**
 * A message indicating us if we should turn the light on or 
 * off.
 *
 * @param {Object} options
 * @param {Object} options.message
 * @param {String} options.message.payload.command - Whether to turn on or off the light.
 * @param {String} options.message.payload.sent_at
 */
streetlights.streetlightIdTurnOff = async ({message}) => {
  // Implement your business logic here...
};

/**
 * A message to inform about environmental lighting conditions.
 *
 * @param {Object} options
 * @param {Object} options.message
 * @param {Number} options.message.payload.lumens - Light intensity measured in lumens.
 * @param {String} options.message.payload.sent_at
 */
streetlights.onStreetlightIdLightingMeasured = async ({message}) => {
  // Implement your business logic here...
};

