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