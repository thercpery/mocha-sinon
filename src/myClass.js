const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class MyClass{
    constructor(){
        console.log("initiate");
    }

    sayHello(str){
        console.log(str);
    }

    add(arg1, arg2){
        if(1){
            return arg1 + arg2;
        }
        else {
            return 2
        }
    }

    callAnotherFunction (arg1, arg2){
        this.sayHello("Hello world");
        let result = this.add(arg1, arg2);
        return result;
    }

    callTheCallback (callback){
        callback();
    }

    testPromise(){
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(3), 6000);
        })
        .then((result) => {
            return result * 2;
        })
    }

    xhrFunction() {
        
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("get", "http://localhost:5000/", false);

            xhr.onreadystatechange = function() {
                
                if(xhr.readyState == 4){
                    if(xhr.status == 200) {
                        resolve(xhr.responseText);
                    }
                    else{
                        reject(xhr.status);
                    }
                }
            };
            xhr.send();
        })
        .then((result) => result)
        .catch((error) => error);
    }
}

module.exports = MyClass;