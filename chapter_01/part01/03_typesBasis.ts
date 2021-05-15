// 1.使用字面量进行类型声明
let a: 10;
// a = 11 //报错，只能是10

//2.可以使用 | 连接多个类型(联合类型)
let b: 'male' | 'female'
b = "male"
b = 'female'
// b = 'hello' //报错，b只能是上面两个值其中的一个

let c: string | number
c = 'hello'
c = 1

// 3.any表示任意类型,可以任意赋值，相当于对d关闭了ts类型检测
// let d: any
let d //不设定类型则为any
d = 10
d = 'hello'
d = true

// 4.unknown实际上是一个类型安全的any，unknown类型的变量不能直接赋值给其他变量
let e: unknown
e = 10
e = 'hello'
e = true
let s: string;
s = d //any类型的变量能直接赋值给其他变量
// s = e //unknown类型的变量不能直接赋值给其他变量
//加条件判断
if (typeof e == 'string') {
    s = e
}
//类型断言,告诉编译器变量的实际类型
s = e as string
s = <string>e

//void用来表示空，以函数为例，就表示没有返回值的函数
function fn(): void {
}

//never 表示永远不会有返回结果
function fnc(): never {
    throw new Error('报错了')
}
