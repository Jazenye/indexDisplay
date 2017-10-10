/**
 * 发布订阅模式，又称观察者模式。应该是最常用的模式之一
 * 这种模式可以很好的实现两个模块只见的解耦
 */

var EventCenter = (function(){
    var events = {};
    function on(evt, handler){
        events[evt] = events[evt] || [];
        events[evt].push({
            handler: handler
        });
    };
    function fire(evt, args){
        if(!event[evt]){
            return;
        }
        for(var i=0; i<events[evt].length; i++){
            events[evt][i].handler(args);
        }
    };
    function off(name){
        delete events[name];
    }

    return {
        on: on,
        fire: fire,
        off: off,
    }
})();