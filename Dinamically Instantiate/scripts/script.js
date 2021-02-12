
const s = require('Scene');
const d = require('Diagnostics');
const t = require('TouchGestures');
const Blocks = require('Blocks');

(async function () {  // Enables async/await in JS [part 1]

  // a constant that will contain all scene objects
  //what await does is that when the promise is called it waits till the promise retursn its value
    const [dummy, parent, dummy2] = await Promise.all([
      s.root.findFirst('Dummy'),
      s.root.findFirst('WorldOrigin'),
      s.root.findFirst('Dummy2'),
  ]);

    t.onTap().subscribe(async () => {
        dummy2.worldTransform.position = dummy.worldTransform.position;

        //option 1 of a way to instantiate an object taken from https://www.youtube.com/watch?v=xzWR1O2nmbk

        let block = await Blocks.instantiate("cubeBlock", {
            "name": "cube"
        });
        block.transform.x = dummy2.transform.x.pinLastValue();
        block.transform.y = dummy2.transform.y.pinLastValue();
        block.transform.z = dummy2.transform.z.pinLastValue();
        parent.addChild(block);
        
        //option 2 of a way to instantiate an object taken from https://sparkar.facebook.com/ar-studio/learn/scripting/dynamic-instantiation/#creating-dynamic-objects
        /* 
         Blocks.instantiate('simple').then(function (block) {
            block.transform.x = dummy2.transform.x.pinLastValue();
            block.transform.y = dummy2.transform.y.pinLastValue();
            block.transform.z = dummy2.transform.z.pinLastValue();
            parent.addChild(block);
         }); */

    });


})(); // Enables async/await in JS [part 2]
