var Person = (function(){
    var name = "jazen";
    function printName(){
        console.log(name)
    };

    return {
        name: name,
        printName: printName
    }
})()