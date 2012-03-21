const data = require("self").data;

var pageMod = require("page-mod");

function handleMessage(message){
console.log(message.m1+","+message.m2);
panel.postMessage({"m1":message.m1,"m2":message.m2}); 
}


pageMod.PageMod({
  include: "*.youtube.com",
  contentScriptWhen: "ready",
  contentScriptFile:data.url("you.js"),
  onAttach: function onAttach(worker, mod) {
    // Register the handleMessage function as a listener
    worker.on('message', handleMessage);
    // Take a reference to the worker so as to post messages back to it
    myWorker = worker;
  }
  });





var panel = require("panel").Panel({
  contentURL: data.url("canvas.htm"),
  width: 1100,
  height: 600,
  contentScriptFile: data.url("canv.js"),
  });

const widgets = require("widget");

  
  
widgets.Widget({
  label: "youFire",
  width:60,
  contentURL: data.url("youfire.png"),
  onClick: function() {
   console.log("u clicked!!");
  panel.show();
  
  //  require("tabs").activeTab.url = "http://www.google.com/";
  }
}); 
 
 
widgets.Widget({
  label: "Reset youFire",
  width:20,
  contentURL: data.url("reset.png"),
 onClick:function(){
    panel.postMessage({"m1":"Reset","m2":"Everything"})
    }
  });
  
  widgets.Widget({
  label: "Spacer",
  width:20,
  contentURL: data.url("spacer.png")
  });
  
