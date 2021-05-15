//对象,这样写没什么意义
let a: object
a = {}
a = { name: 'tom' }

//有且只能有name属性
let b: { name: 'tom' }
b = { name: 'tom' }

//name属性一定有，类型是字符串，age属性可有可无，是数字类型
let c: { name: string, age?: number }
c = { name: '张三' }
c = { name: 'jack', age: 18 }

//name属性一定有，其他属性可有可无
let d: { name: string, [propName: string]: any }
d = { name: 'tom', age: 18, sex: 'male' }

//函数，这样写没什么意义
let e: Function
//规定参数个数，参数类型和返回值类型
let f: (a: number, b: number) => number
f = function (n1, n2) {
    return n1 + n2
}

//数组
let g: []
//字符串数组
let h: string[]
h = ['a', 'b', 'c']
//数字数组
let i: number[]
i = [1, 2, 3, 4]
//包含字符串和数字的数组
let j: (string | number)[]
j = [1, 2, 3, '15']

//元组，固定长度的数组
let k: [string, number]
k = ['str', 1]

//enum,枚举,一个属性的值在几个值之间
enum Gender {
    Male,
    Female
}
let l: { name: string, gender: Gender }
l = { name: 'tom', gender: Gender.Male }
// console.log(l.gender === Gender.Male)

//&表示同时
let m: { name: string } & { age: number }
m = { name: 'tom', age: 18 }

//类型的别名,自定义类型
type myType = 1 | 2 | 3
let n: myType
let o: myType
n = 1
n = 2
