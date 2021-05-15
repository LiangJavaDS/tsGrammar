"use strict";
// 在定义函数或是类时，类型不明确时，可以使用泛型
function fn(a) {
    return a;
}
//方法一，自动推断类型
let result1 = fn(10);
//方法二，指定泛型
let result2 = fn('hello');
function fn2(a, b) {
    return a;
}
let result3 = fn2(123, 'hello');
function fn3(a) {
    return a.length;
}
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('孙悟空');
