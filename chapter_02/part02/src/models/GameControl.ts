import Snake from './Snake'
import Food from './Food'
import ScorePannel from './ScorePannel'
// 游戏的控制器,控制其他的所有类
class GameControl {
    // 蛇
    snake: Snake;
    // 食物
    food: Food;
    // 记分牌
    scorePannel: ScorePannel
    // 蛇移动方向
    direction: string = ''
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePannel = new ScorePannel();

        this.init()
    }
    init() {
        // 绑定键盘按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
    }
    // 创建一个键盘按下的响应函数
    // ArrowUp
    // ArrowDown
    // ArrowLeft
    // ArrowDown
    // ArrowRight
    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key
        // console.log(event.key)
    }
}
export default GameControl
