const S = require('Scene');
const D = require('Diagnostics');
const TG = require('TouchGestures');
const Patches = require('Patches');

const object = S.root.findFirst('planeTracker0/anchor');
object.hidden = false;
Patches.outputs.getBoolean('myBoolean').then(signal => {
signal.monitor({fireOnInitialValue: true}).subscribe(val => {

         if(val.newValue){
		D.log("start");
		Patches.inputs.setBoolean('codeBoolean', false);
         } else {
		D.log("end");
		Patches.inputs.setBoolean('codeBoolean', true);
         }
 
       });
});