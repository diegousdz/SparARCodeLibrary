// Load in the required modules
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
export const Diagnostics = require('Diagnostics');

(async function () {  // Enables async/await in JS [part 1]

  // Locate the glassToControl in the scene
   const [glass1] = await Promise.all([
     Scene.root.findFirst('glass1_grouped')
   ]);

  // Create a reference to a detected face
   const face = FaceTracking.face(0);

  //=========================================================================
  // Bind the rotation & scale of the face with the rotation and scale of the glasses
  //=========================================================================

  // Create references to the transforms of the glasses and face
   const glassTransform = glass1.transform;
   const faceTransform = face.cameraTransform;

  // Bind the rotation of the face to the rotation of the glasses
  glassTransform.rotationX = faceTransform.rotationX;
  glassTransform.rotationY = faceTransform.rotationY;
  glassTransform.rotationZ = faceTransform.rotationZ;

  // Bind the scale of the face to the scale of the glasses
  glassTransform.scaleX = faceTransform.scaleX;
  glassTransform.scaleY = faceTransform.scaleY;
  glassTransform.scaleZ = faceTransform.scaleZ;

   Diagnostics.log('Cool message from script');

})(); // Enables async/await in JS [part 2]
