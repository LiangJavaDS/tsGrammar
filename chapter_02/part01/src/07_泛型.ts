// 在定义函数或是类时，类型不明确时，可以使用泛型

function fn<T>(a: T): T {
    return a
}
//方法一，自动推断类型
let result1 = fn(10);
//方法二，指定泛型
let result2 = fn<string>('hello');

function fn2<T, K>(a: T, b: K): T {
    return a
}
let result3 = fn2<number, string>(123, 'hello')

// T extends Inter表示泛型T必须是Inter的实现类（子类）
interface Inter {
    length: number;
}
function fn3<T extends Inter>(a: T): number {
    return a.length
}

class MyClass<T>{
    name: T;
    constructor(name: T) {
        this.name = name
    }
}
const mc = new MyClass<String>('孙悟空')