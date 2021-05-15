"use strict";
(function () {
    class Thing {
        constructor(end) {
            this.end = end;
            // console.log('end123', end)
        }
    }
    class Animal extends Thing {
        constructor(end, name, age) {
            super(end);
            this.name = name;
            this.age = age;
            // console.log('end456', end)
        }
        eat() {
            console.log(`${this.name}吃东西`);
        }
    }
    class Dog extends Animal {
        // 构造函数也是方法，会被重写，所以需要super关键字调用父类的构造函数
        constructor(end, name, age, leg) {
            super(end, name, age); //super关键字
            this.leg = leg;
        }
        // 方法的重写
        eat() {
            super.eat(); //调用父类的方法
            // console.log(`${this.name}吃骨头`)
        }
    }
    //类的继承
    class Cat extends Animal {
    }
    const d1 = new Dog('小狗的end', '小汪', 5, '4条腿');
    const c1 = new Cat('小猫的end', '小喵', 3);
    d1.eat();
    console.log('小狗', d1);
    console.log('小喵', c1);
})();
