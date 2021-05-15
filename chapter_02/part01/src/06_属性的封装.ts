(function () {
    class Person {
        /*
        默认是public可以在任意位置修改和访问，
        private只在类内部修改和访问，通过在类中添加方法可以使私有属性被访问和修改
        protected只能在当前类和当前类的子类中使用
        */
        private _name: String;
        private _age: number;
        
        constructor(name: String, age: number) {
            this._name = name;
            this._age = age;
        }

        get name() {
            return this._name
        }

        set name(value) {
            this._name = value
        }

        // getName() {
        //     return this.name
        // }

        // setName(value: String) {
        //     this.name = value
        // }
    }

    //语法糖
    // class Person {
    //     constructor(private name: String, private age: number) {

    //     }
    // }

    const p1 = new Person('孙悟空', 18)
    // p1.name = '猪八戒1'
    // console.log(p1.getName());
    // p1.setName('猪八戒')
    // console.log(p1.getName());
    console.log("前", p1.name)
    p1.name = '猪八戒'
    console.log("后", p1.name)

})()