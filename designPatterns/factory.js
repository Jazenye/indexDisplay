function createPerson(name){
    var person = {
        name: name,
        sayName: function(){
            console.log(this.name);
        }
    };

    return person;
}

var p = createPerson("jazen");
var p2 = createPerson("new");

/**
 * 工厂模式： 由一个方法来决定道理要创建哪个类的实例
 * 这些实例往往拥有相同的接口。
 * JS里的构造函数也是一个简单工厂，不过是用new来实现
 */