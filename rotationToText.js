const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Patches = require('Patches');
const Reactive = require('Reactive');
export const Diagnostics = require('Diagnostics');

(async function () {  // Enables async/await in JS [part 1]

   const [text1, text2, text3, text1B, text2B, text3B] = await Promise.all([
     Scene.root.findFirst('2dTextX'),
     Scene.root.findFirst('2dTextY'),
     Scene.root.findFirst('2dTextZ'),
     Scene.root.findFirst('2dTextXExp'),
     Scene.root.findFirst('2dTextYExp'),
     Scene.root.findFirst('2dTextZExp')
   ]);

   const face = FaceTracking.face(0);
   const faceTransform = face.cameraTransform;
   let x = faceTransform.rotationX;
   let y = faceTransform.rotationY;
   let z = faceTransform.rotationZ;
   Patches.inputs.setScalar("umbral", y);
   Patches.inputs.setScalar("umbral2", x);
    text1.text = x.toString();
    text2.text = y.toString();
    text3.text = z.toString();
    //This one is the one Y
    x = Reactive.expSmooth(x,100);
    //This one is the one X
    y = Reactive.expSmooth(y,100);
    z = Reactive.expSmooth(z,100);
   text1B.text = x.toString();
   text2B.text = y.toString();
   text3B.text = z.toString();

})(); // Enables async/await in JS [part 2]
