"use strict";
class Dog {
    // 构造函数会在对象创建时被创建
    constructor(name, age) {
        // this是指当前新建的对象
        this.name = name;
        this.age = age;
    }
    sayThis() {
        // this指当前调用方法的实例对象
        console.log(this.name);
    }
}
const d1 = new Dog("小白", 3);
const d2 = new Dog("小黑", 4);
d1.sayThis();
console.log(d1);
console.log(d2);
