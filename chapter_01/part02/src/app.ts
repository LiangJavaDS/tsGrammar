let app = '我是app.ts'
// "removeComments": true,开启后，注释不会被编译

// 防止隐式any的this
function fn2(this: Window) {
    alert(this)
}

//防止空
let box1 = document.getElementById('box1')
box1?.addEventListener('click', function () {
    alert('hello')
})