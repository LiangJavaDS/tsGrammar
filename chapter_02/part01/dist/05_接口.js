"use strict";
(function () {
    //都可以用来描述一个对象的类型
    const obj = {
        name: 'demo',
        age: 12
    };
    const objCopy = {
        name: 'demo',
        age: 12
    };
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log('hello~~');
        }
    }
    const m1 = new MyClass('接口实例');
    console.log(m1);
})();
