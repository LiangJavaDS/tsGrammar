"use strict";
class Person {
    constructor() {
        // readOnly只读属性，不能更改
        // 实例属性，通过对象的实例去访问
        this.name = '孙悟空';
    }
    // 同理也有实例方法和静态方法
    sayHello() {
        console.log("hello,我是实例方法");
    }
    static sayHi() {
        console.log("hi,我是静态方法");
    }
}
// 静态属性（类属性）:通过类去访问
Person.age = 18;
const p1 = new Person();
console.log('name', p1.name);
console.log('age', Person.age);
// Person.age = 19
p1.sayHello();
Person.sayHi();
