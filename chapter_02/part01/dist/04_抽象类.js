"use strict";
(function () {
    //抽象类，一种专门被其他类继承的类，不能创建实例对象
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        eat() {
            // super.eat()
            console.log(`${this.name}吃骨头`);
        }
    }
    //类的继承
    class Cat extends Animal {
        eat() {
            console.log(`${this.name}吃鱼儿`);
        }
    }
    const d1 = new Dog('小汪', 5);
    const c1 = new Cat('小喵', 3);
    d1.eat();
    console.log('小狗', d1);
    console.log('小喵', c1);
})();
