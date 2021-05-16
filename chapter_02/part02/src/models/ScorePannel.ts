// 记分牌的类
class ScorePannel {
    score = 0;
    level = 1;
    scoreSpan: HTMLElement;
    levelSpan: HTMLElement;
    maxLevel: number;
    upScore: number;
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.maxLevel = maxLevel
        this.upScore = upScore
        this.scoreSpan = document.getElementById('score')!;
        this.levelSpan = document.getElementById('level')!;
    }

    addScore() {
        this.scoreSpan.innerHTML = ++this.score + ''
        if (this.score % this.upScore == 0) {
            this.levelUp()
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelSpan.innerHTML = ++this.level + ''
        }
    }
}
export default ScorePannel