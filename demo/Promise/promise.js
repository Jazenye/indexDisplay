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
