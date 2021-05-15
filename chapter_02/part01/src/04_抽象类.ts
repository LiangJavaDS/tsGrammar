(function () {
    //抽象类，一种专门被其他类继承的类，不能创建实例对象
    abstract class Animal {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        //abstact抽象关键字，抽象方法只能写在抽象类中，抽象方法没有方法体
        //抽象方法目的：防止子类中忘记定义方法，走了父类的eat方法，此时子类无此方法会报错
        abstract eat(): void
    }

    class Dog extends Animal {
        eat() {
            // super.eat()
            console.log(`${this.name}吃骨头`)
        }
    }

    //类的继承
    class Cat extends Animal {
        eat() {
            console.log(`${this.name}吃鱼儿`)
        }
    }

    const d1 = new Dog('小汪', 5)
    const c1 = new Cat('小喵', 3)
    d1.eat()
    console.log('小狗', d1)
    console.log('小喵', c1)
})()