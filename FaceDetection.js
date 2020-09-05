const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
export const D = require('Diagnostics');

(async function() {
 const [circle,fireUp,fireDown] = await Promise.all([
   Scene.root.findFirst('Lut+Circle'),
   Scene.root.findFirst('Fuego Arriba'),
   Scene.root.findFirst('Fuego Abajo')
 ]);
D.watch("face count: ", FaceTracking.face(0).isTracked);

//Check if face is found - If face is found hide the things inside the if
FaceTracking.face(0).isTracked.monitor().subscribe(function(e) {
    if (e.newValue) {
 	 fireUp.hidden = false;
 	 fireDown.hidden = false;
  	 circle.hidden = false;
    }
    else {
	 circle.hidden = true;
 	 fireUp.hidden = true;
 	 fireDown.hidden = true;
    }
});
})();