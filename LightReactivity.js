const LightingEstimation = require('LightingEstimation');
const Reactive = require('Reactive');
const Scene = require('Scene');
const Patches = require('Patches');

(async function() {
  const [] = await Promise.all([
  ]);

  Patches.inputs.setScalar('frameBrightness', Reactive.sub(1,LightingEstimation.frameBrightness));
})();
