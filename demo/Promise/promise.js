class Promise {
    constructor (){ 
        this.callbacks = [];
        this.oncatch = null;
    }
 
    resolve(result){
        this.complete("resolve", result);
    }

    // reject
    reject(result){
        this.complete("reject", result);
    }

   

    complete(type, result){
        if(type === "reject" && this.oncatch){
            this.callbacks = [];
            this.oncatch(result);
        }else if(this.callbacks[0]) {
            var handlerObj = this.callbacks.shift();
            if(handlerObj[type]){
                handlerObj[type](result);
            }
        }
    }

    then(onsuccess, onfail){
        this.callbacks.push({
            resolve: onsuccess,
            reject: onfail
        })
        return this;
    }

    catch(onfail){
        this.oncatch = onfail;
        return this;
    }
}

var p = new Promise();

function foo(){
    console.log('1. foo');
    setTimeout(function(){
        p.resolve('data1')
    }, 1000)
    return p;
}

function bar(result){
    console.log("2. bar :", result);
    setTimeout(function(){
        p.resolve('data2')
    }, 2000);
}

function final(result){
    console.log('Finally:', result);
} 

foo().then(bar ).then(final)