//==============================================================================
// The following example demonstrates how to bind the frame brightness property
// to the intensity of a light.
//
// Project setup:
// - Insert a plane
// - Add the 'Frame Brightness' capability
// - (Recommended) Remove the directional light
//==============================================================================

const LightingEstimation = require('LightingEstimation');
const Reactive = require('Reactive');
const Scene = require('Scene');
const Patches = require('Patches');

(async function () {


    const [] = await Promise.all([
    ]);

    const n1 = await Patches.outputs.getScalar('reactiveSub');
    const lightIntensity = Reactive.sub(n1, LightingEstimation.frameBrightness);
    await Patches.inputs.setScalar('lightValue', lightIntensity);

})();
