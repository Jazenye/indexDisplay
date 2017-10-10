var Person = (function(){
    var instance;
    function init(name){
        return {
            name: name
        };
    }

    return {
        createPerson: function(name){
            if(!instance){
                instance = init(name)
            }
            return instance; 
        }
    }
})();

var a = People.createPerson("xxx");  // name: xxx
var b = People.createPerson("yyy");  // name: yyy

var singleton = function(fn){
    var result;
    // 函数作为参数传递, 如果已经创建过，则不会再创建 
    return function(){
        return result || (result = fn.apply(this, arguments));
    };
}

var createMask = singleton( function(){
    return document.body.appendChild( document.createElement('div') );
})