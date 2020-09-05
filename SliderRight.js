
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Patches = require('Patches');
export const Diagnostics = require('Diagnostics');

Promise.all([
   
]).then(function(result){


    var lastSliderValue = 1;
    const slider = NativeUI.slider;

    slider.value.monitor({fireOnInitialValue:false}).subscribe(function(val){
      lastSliderValue = val.newValue;  
      Patches.inputs.setScalar('Slider1', lastSliderValue);
    });
    slider.visible = Patches.outputs.getBoolean('leftSlider');

})
