//Spark AR version 109
//Code by Diego Aguirre March/2021

const Scene = require('Scene');
const Patches = require('Patches');
const Reactive = require('Reactive');
const NativeUI = require('NativeUI');
const TouchGestures = require('TouchGestures');
const D = require('Diagnostics');

export const Diagnostics = require('Diagnostics');

(async function () {  // Enables async/await in JS [part 1]

  const [] = await Promise.all([
 ]);

 let glass1State = await Patches.outputs.getBoolean("glasses1Selected");
 let glass2State = await Patches.outputs.getBoolean("glasses2Selected");
 let glass3State = await Patches.outputs.getBoolean("glasses3Selected");
 let glass4State = await Patches.outputs.getBoolean("glasses4Selected");
 let startMusic = await Patches.outputs.getBoolean("startMusic");

  function startIntro(){
    Patches.inputs.setPulse("playIntro",Reactive.once());
    Diagnostics.log("working BROOO2");
  }

  startIntro();

 NativeUI.picker.selectedIndex.monitor().subscribe(function (index) {
  if(index.newValue === 0){
    Patches.inputs.setPulse("stopIntro",Reactive.once());
    Patches.inputs.setPulse("playGlass1",Reactive.once());
    Patches.inputs.setPulse("ReverseGlass2",Reactive.once());
    Patches.inputs.setPulse("ReverseGlass3",Reactive.once());
    Patches.inputs.setPulse("ReverseGlass4",Reactive.once());
  } 
  if(index.newValue === 1){
    Patches.inputs.setPulse("stopIntro",Reactive.once());
    Patches.inputs.setPulse("playGlass2",Reactive.once());
    Patches.inputs.setPulse("ReverseGlass1",Reactive.once());
    Patches.inputs.setPulse("ReverseGlass3",Reactive.once());
    Patches.inputs.setPulse("ReverseGlass4",Reactive.once());
  } 
  if(index.newValue === 2){
    Patches.inputs.setPulse("stopIntro",Reactive.once());
    Patches.inputs.setPulse("playGlass3",Reactive.once());
    Patches.inputs.setPulse("ReverseGlass1",Reactive.once());
    Patches.inputs.setPulse("ReverseGlass2",Reactive.once());
    Patches.inputs.setPulse("ReverseGlass4",Reactive.once());
  } 
  if(index.newValue === 3){
    Patches.inputs.setPulse("stopIntro",Reactive.once());
    Patches.inputs.setPulse("playGlass4",Reactive.once());
    Patches.inputs.setPulse("ReverseGlass1",Reactive.once());
    Patches.inputs.setPulse("ReverseGlass2",Reactive.once());
    Patches.inputs.setPulse("ReverseGlass3",Reactive.once());
  } 
});
})(); // Enables async/await in JS [part 2]
