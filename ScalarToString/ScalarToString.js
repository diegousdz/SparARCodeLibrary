const Scene = require('Scene');
const Patches = require('Patches');
const D = require('Diagnostics');
export const Diagnostics = require('Diagnostics');

// Enables async/await in JS [part 1]
(async function() {
// Locate the text in the Scene
  const [text] = await Promise.all([
    Scene.root.findFirst('3dText0')
  ]);

Patches.outputs.getScalar('myScalar').then(patchValue => {
   patchValue.monitor().subscribe(function (timerEvent) {
       text.text = timerEvent.newValue.toString() + '%';
   });
    // DebugValue in console
   Diagnostics.watch("Blink Count: ", patchValue);
});
})();
