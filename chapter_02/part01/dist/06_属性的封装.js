"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
    }
    //语法糖
    // class Person {
    //     constructor(private name: String, private age: number) {
    //     }
    // }
    const p1 = new Person('孙悟空', 18);
    // p1.name = '猪八戒1'
    // console.log(p1.getName());
    // p1.setName('猪八戒')
    // console.log(p1.getName());
    console.log("前", p1.name);
    p1.name = '猪八戒';
    console.log("后", p1.name);
})();
