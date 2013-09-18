// ==UserScript==
// @name       Enable numpad on pdd.by
// @namespace  http://mcm69.org/
// @version    1.0
// @description  Allows using the numpad numbers to answer questions on http://pdd.by/tasks/online/
// @match      http://pdd.by/tasks/online/*
// @copyright  2013+, Yuriy Opryshko
// ==/UserScript==

(function(){
    var oldKeyDown = tasksObj.keyDown; 
    tasksObj.keyDown = function(a){
        if(a>=97 && a <=101) a -= 48; //convert numpad keycodes to ASCII
        oldKeyDown.call(tasksObj, a); //and call through
    }
})();