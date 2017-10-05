

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.printName = function(){
    console.log(this.name);
}

var p = new Person("jazen", 18);

/**
 * Person {name: "jazen", age: 18}
            age: 18
            name: "jazen"
            __proto__: Object {
                printName: function ()
            }
 */