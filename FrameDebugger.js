//================================================================================//
// required module //
//================================================================================//
var Diagnostics = require('Diagnostics');
var Time = require('Time');
//================================================================================//
// Performance monitor //
//================================================================================//
 var first = true;
 var fps = 0;
 var c = 0;
 Time.ms.monitor().subscribe(function(e){
 	if(first){
 		Diagnostics.log("Start Time: " + e.newValue + " ms");
 		first = false;
 	}
 	else{
 		fps = fps * 0.95 + 0.5 * (e.newValue - e.oldValue);
 		c++;
 		if(c == 9){
 			Diagnostics.log("FPS: " + (10000 / fps).toFixed(1));
 			c = 0;
 		}
 	}
 });
//================================================================================//