//对象,这样写没什么意义
var a;
a = {};
a = { name: 'tom' };
//有且只能有name属性
var b;
b = { name: 'tom' };
//name属性一定有，类型是字符串，age属性可有可无，是数字类型
var c;
c = { name: '张三' };
c = { name: 'jack', age: 18 };
//name属性一定有，其他属性可有可无
var d;
d = { name: 'tom', age: 18, sex: 'male' };
//函数，这样写没什么意义
var e;
//规定参数个数，参数类型和返回值类型
var f;
f = function (n1, n2) {
    return n1 + n2;
};
//数组
var g;
//字符串数组
var h;
h = ['a', 'b', 'c'];
//数字数组
var i;
i = [1, 2, 3, 4];
//包含字符串和数字的数组
var j;
j = [1, 2, 3, '15'];
//元组，固定长度的数组
var k;
k = ['str', 1];
//enum,枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var l;
l = { name: 'tom', gender: Gender.Male };
console.log(l.gender === Gender.Male);
