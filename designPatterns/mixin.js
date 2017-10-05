var Parent = function(name, age){
    this.name = name;
    this.age = age;
};
Parent.prototype.printName = function(){
    console.log(this.name);
}


var Child = function(name, age, sex) {
    Parent.call(this, name, age);
    this.sex = sex;
}
Child.prototype = create(Parent.prototype);

function create(parentObj){
    function Foo(){}
    Foo.prototype = parentObj;
    return new Foo();
};

Child.prototype.printSex = function(){
    console.log(this.sex)
};

var child = new Child("jazen", 18, "male");