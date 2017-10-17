class Promise {
    constructor (){
        // 回调函数队列
        this.callbacks = [];
        this.oncatch = null;
    }

    // resolve： 成功调用后执行
    // result: 上个函数执行完毕之后传入的参数, 实现数据传递
    resolve(result){
        this.complete("resolve", result);
    }

    // reject: 拒绝后调不再执行后续函数
    reject(result){
        this.complete("reject", result);
    }

    // complete 决定调用哪种方法
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

    // then: 链式调用, 返回自身对象, 把所有函数先加入队列
    // 参数1: 代表执行成功的方法 
    then(onsuccess, onfail){
        this.callbacks.push({
            resolve: onsuccess,
            reject: onfail
        })
        return this;
    }

    // 执行异常处理函数, 直接返回
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

function err(){
    console.log("Error!");
}

foo().then(bar).then(final).catch(err)