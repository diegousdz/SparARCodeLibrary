
//@input SceneObject Instruction1
//@input SceneObject Instruction2
//@input float displayTime1
//@input float displayTime2

var timer = 0;
function showInstruction(){
    script.Instruction1.enabled = true;
        script.Instruction2.enabled = false;
}

showInstruction();
var isEnabled1 = true;
var isEnabled2 = false;
script.createEvent("UpdateEvent").bind(function(){

   timer = getTime();
   // print(timer);
   if(timer >= script.displayTime1 && isEnabled1){
      script.Instruction1.enabled = false;
      script.Instruction2.enabled = true;
        print("done1");
        isEnabled1 = false;
        isEnabled2 = true;
    }
   if(timer >= script.displayTime2 && isEnabled2){
      script.Instruction1.enabled = false;
      script.Instruction2.enabled = false;
        print("done2");
        isEnabled2 = false;
    }
  
});
