import {
   GAME_HEIGHT,
   GAME_WIDTH,
   SQUARE_SIZE,
   DirectionsEnum,
   COLORS,
   HEAD_POSITION,
} from './const';
import { LocalStorage } from './localStorage';
import { Snake } from './Snake';
import { Square } from './Square';

export class Game {
   canvas: HTMLCanvasElement;
   ctx: CanvasRenderingContext2D;

   scoreHTML: HTMLSpanElement;
   endScoreHTML: HTMLSpanElement;
   highscoreHTML: HTMLSpanElement;
   modal: HTMLDivElement;
   againBtn: HTMLButtonElement;

   lastRenderTime: number;

   snake: Snake;
   direction: DirectionsEnum;
   directionsQueue: DirectionsEnum[];

   point: Square;

   myReq: number;
   isGameOver: boolean;
   score: number;
   db: LocalStorage;

   constructor() {
      this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
      this.canvas.width = GAME_WIDTH;
      this.canvas.height = GAME_HEIGHT;
      this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

      this.scoreHTML = <HTMLSpanElement>document.getElementById('score');
      this.endScoreHTML = <HTMLSpanElement>document.getElementById('endScore');
      this.highscoreHTML = <HTMLSpanElement>document.getElementById('highscore');
      this.modal = <HTMLDivElement>document.getElementById('modal');
      this.againBtn = <HTMLButtonElement>document.getElementById('againBtn');
      this.againBtn.addEventListener('click', () => this.startGame());
      this.db = new LocalStorage();
   }

   startGame() {
      this.modal.classList.add('hide');
      this.snake = new Snake(HEAD_POSITION.x, HEAD_POSITION.y);

      this.direction = DirectionsEnum.RIGHT;
      this.directionsQueue = [];

      this.isGameOver = false;
      this.score = 0;
      this.updateScore();
      this.highscoreHTML.innerHTML = this.db.getHighScore().toString();

      this.point = new Square(this.getNewPointPosition().x, this.getNewPointPosition().y);

      this.lastRenderTime = 0;
      this.myReq = window.requestAnimationFrame(this.mainGame.bind(this));

      document.addEventListener('keydown', (e) => this.setDirection(e));
   }

   mainGame(timestamp: DOMTimeStamp) {
      this.myReq = window.requestAnimationFrame(this.mainGame.bind(this));
      const progress = (timestamp - this.lastRenderTime) / 1000;
      if (progress < 1 / this.snake.speed) return;

      this.lastRenderTime = timestamp;

      this.checkIfAtePoint();

      if (this.directionsQueue.length) {
         this.direction = this.directionsQueue.pop()!;
      }

      this.snake.move(this.direction);
      this.checkIfLose();
      this.drawGame();
   }

   drawGame() {
      this.ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      this.ctx.fillStyle = COLORS.background;
      this.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

      this.drawSnake();
      this.drawPoint();
      if (this.isGameOver) {
         this.ctx.beginPath();
         this.ctx.rect(
            this.snake.head.position.x,
            this.snake.head.position.y,
            this.snake.head.size,
            this.snake.head.size,
         );
         this.ctx.strokeStyle = COLORS.head;
         this.ctx.stroke();
      }
   }

   drawPoint() {
      this.ctx.beginPath();
      this.ctx.rect(this.point.position.x, this.point.position.y, this.point.size, this.point.size);
      this.ctx.fillStyle = COLORS.point;
      this.ctx.fill();
      this.ctx.stroke();
   }

   drawSnake() {
      this.ctx.beginPath();
      this.snake.body.forEach((el, index) => {
         this.ctx.rect(el.position.x, el.position.y, el.size, el.size);
         if (index === 0) {
            this.ctx.fillStyle = COLORS.head;
         } else if (index === 1) {
            this.ctx.fillStyle = COLORS.tail;
         }
         this.ctx.fillRect(el.position.x, el.position.y, el.size, el.size);
      });
      this.ctx.strokeStyle = COLORS.background;
      this.ctx.stroke();
   }

   getNewPointPosition(): { x: number; y: number } {
      let pos = {
         x: Math.ceil((Math.random() * GAME_WIDTH - SQUARE_SIZE) / SQUARE_SIZE) * SQUARE_SIZE,
         y: Math.ceil((Math.random() * GAME_HEIGHT - SQUARE_SIZE) / SQUARE_SIZE) * SQUARE_SIZE,
      };
      let exist = this.snake.body.find((el) => el.position.x === pos.x && el.position.y === pos.y);

      if (exist?.position.y === pos.y && exist.position.x === pos.x) {
         pos = this.getNewPointPosition();
      }

      return pos;
   }

   checkIfLose() {
      const isBeyond =
         this.snake.head.position.x < 0 ||
         this.snake.head.position.x >= GAME_WIDTH ||
         this.snake.head.position.y < 0 ||
         this.snake.head.position.y >= GAME_HEIGHT;

      let isOnTail = false;

      this.snake.body.forEach((el, index) => {
         if (index === 0) return;
         if (
            el.position.x === this.snake.head.position.x &&
            el.position.y === this.snake.head.position.y
         )
            isOnTail = true;
      });

      if (isBeyond || isOnTail) {
         window.cancelAnimationFrame(this.myReq);
         this.isGameOver = true;
         this.showEndModal();
         const oldHighScore = this.db.getHighScore();
         if (oldHighScore < this.score) {
            this.db.addHighscore(this.score);
         }
      }
   }

   checkIfAtePoint() {
      const middle = SQUARE_SIZE / 2;
      const headIsOnPoint =
         this.snake.head.position.x + middle === this.point.position.x + middle &&
         this.snake.head.position.y + middle === this.point.position.y + middle;

      if (headIsOnPoint) {
         const lastX = this.snake.body[this.snake.body.length - 1].position.x;
         const lastY = this.snake.body[this.snake.body.length - 1].position.y;

         this.snake.body.push(new Square(lastX, lastY));

         const pointXY = this.getNewPointPosition();
         this.point = new Square(pointXY.x, pointXY.y);
         this.score += SQUARE_SIZE;
         this.updateScore();
      }
   }

   setDirection(e: KeyboardEvent) {
      const lastDirection = this.directionsQueue.length ? this.directionsQueue[0] : this.direction;
      if (lastDirection === e.key) return;

      switch (e.key) {
         case DirectionsEnum.RIGHT:
            if (lastDirection !== DirectionsEnum.LEFT)
               this.directionsQueue.unshift(DirectionsEnum.RIGHT);
            break;
         case DirectionsEnum.LEFT:
            if (lastDirection !== DirectionsEnum.RIGHT)
               this.directionsQueue.unshift(DirectionsEnum.LEFT);
            break;
         case DirectionsEnum.UP:
            if (lastDirection !== DirectionsEnum.DOWN)
               this.directionsQueue.unshift(DirectionsEnum.UP);
            break;
         case DirectionsEnum.DOWN:
            if (lastDirection !== DirectionsEnum.UP)
               this.directionsQueue.unshift(DirectionsEnum.DOWN);
            break;

         default:
            return;
      }
   }

   updateScore() {
      this.scoreHTML.innerHTML = this.score.toString();
   }

   showEndModal() {
      this.modal.classList.remove('hide');
      this.endScoreHTML.innerHTML = this.score.toString();
   }
}
