// Load in the required modules
const Materials = require('Materials');
const Scene = require('Scene');
const Diagnostics = require('Diagnostics');
const Patches = require('Patches');

// Enable async/await in JS [part 1]
(async function () {
    // Locate the rectangle and material in the Scene and Assets
    const [material] = await Promise.all([
        Materials.findFirst('noiseB')
    ]);

    const value = await Patches.outputs.getScalar('editorToScriptVar');
    material.opacity = value;
})();