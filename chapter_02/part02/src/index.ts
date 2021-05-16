import './style/index.less';
import GameControl from './models/GameControl'

// import Food from './models/Food';
// import ScorePannel from './models/ScorePannel';
console.log('贪吃蛇')
const gamecontrol = new GameControl()
setInterval(function () {
   console.log(gamecontrol.direction);
},1000)
// Food类测试代码
// const food = new Food()·
// console.log(food.X,food.Y)
// food.change()
// console.log(food.X,food.Y)

// ScorePannel类测试代码
// const s = new ScorePannel()
// for (let i = 0; i <= 200; i++) {
//     s.addScore()
// }
// console.log(s.level)