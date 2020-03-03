//================================================================================//
// required module //
//================================================================================//
var TouchGestures = require('TouchGestures');
//================================================================================//
// Swap between 3D objects //
//================================================================================//
var i = 0;
var prop_mode = 0;
const NOOBJ = 0;
const OBJ1 = 1;
const OBJ2 = 2;
const OBJ3 = 3;
//================================================================================//
TouchGestures.onTap().subscribe(function(e){
	prop_mode = i++;
	D.log("tapped" );
	D.log(prop_mode);
	NextMode();
});
//================================================================================//
function NextMode(){

	if(prop_mode == NOOBJ){
		D.log("No Object");
	}
	else if(prop_mode == OBJ1){
		D.log("3D Object number 1");
	}
	else if(prop_mode == OBJ2){
		D.log("3D Object number 2");
	}
	else if(prop_mode == OBJ3){
		D.log("3D Object number 3");
		i = 0;
	}
}
//================================================================================//