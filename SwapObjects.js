//================================================================================//
// required module //
//================================================================================//
var Patches = require('Patches');
var Scene = require('Scene');
var TouchGestures = require('TouchGestures');
var D = require('Diagnostics');
const Materials = require('Materials');
//================================================================================//
// 3DObjects //
//================================================================================//
const eyebrowns = Scene.root.find('eyebrowns');
const moustache = Scene.root.find('moustaches');
const materialFH1 = Materials.get('FaceHair1');
const materialFH2 = Materials.get('FaceHair2');
const materialFH3 = Materials.get('FaceHair3');

const hairLeft = Scene.root.find('OBJHair_Left');
const hairRight = Scene.root.find('OBJHair_Right');
const material1 = Materials.get('HairStyle1');
const material2 = Materials.get('HairStyle2');
const material3 = Materials.get('HairStyle3');
//================================================================================//
// Swap between 3D objects //
//================================================================================//
var i = 0;
var prop_mode = 0;
const DEFAULT = 0;
const OBJ1 = 1;
const OBJ2 = 2;
//================================================================================//
TouchGestures.onTap().subscribe(function(e){
	prop_mode = i++;
	D.log("tapped" );
	D.log(prop_mode);
	NextMode();
});
//================================================================================//
function NextMode(){

	if(prop_mode == DEFAULT){
		hairLeft.material = material1;
		hairRight.material = material1;
		eyebrowns.material = materialFH1;
		moustache.material = materialFH1;
	}
	else if(prop_mode == OBJ1){
		hairLeft.material = material2;
		hairRight.material = material2;
		eyebrowns.material = materialFH2;
		moustache.material = materialFH2;
	}
	else if(prop_mode == OBJ2){
		hairLeft.material = material3;
		hairRight.material = material3;
		eyebrowns.material = materialFH3;
		moustache.material = materialFH3;
		i = 0;
	}
}
//================================================================================//
