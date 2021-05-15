(function () {
    //自定义类型
    type myType = {
        name: String,
        age: Number
    }
    //自定义接口
    interface myInterface{
        name: String,
        age: Number
    }

    //都可以用来描述一个对象的类型
    const obj: myType = {
        name: 'demo',
        age: 12
    }

    const objCopy: myInterface = {
        name: 'demo',
        age: 12
    }

    /*
    1.接口定义了类的结构，接口所有的属性都不能有实际的值
    2.接口中的方法都是抽象方法，抽象类的方法可以有抽象方法也可以有具体方法
    3.实现接口就是使类满足接口的要求    
    */

    interface myInter {
        name: string
        say(): void
    }

    class MyClass implements myInter {
        name: string
        constructor(name: string) {
            this.name = name
        }
        say() {
            console.log('hello~~')
        }
    }

    const m1 = new MyClass('接口实例')
    console.log(m1)
})()