const router = require('hermesjs-router')();
const streetlights = require('../services/streetlights');

/**
 * A message indicating us if we should turn the light on or
 * off.
 */
router.use('smartylighting/streetlights/1/0/action/:streetlight_id/turn/on', async (message, next) => {
  console.log('funciona');
  await streetlights.streetlightIdTurnOn({message});
  next();
});

/**
 * A message indicating us if we should turn the light on or
 * off.
 */
router.use('smartylighting/streetlights/1/0/action/:streetlight_id/turn/off', async (message, next) => {
  await streetlights.streetlightIdTurnOff({message});
  next();
});

/**
 * A message to inform about environmental lighting conditions.
 */
router.use('smartylighting/streetlights/1/0/event/:streetlight_id/lighting/measured', async (message, next) => {
  await streetlights.onStreetlightIdLightingMeasured({message});
  next();
});

module.exports = router;
