import { GAME_HEIGHT, GAME_WIDTH, SNAKE_SPEED_PER_SEC, SQUARE_SIZE, DirectionsEnum } from './const';
import { Snake } from './Snake';
import { Square } from './Square';

export class Game {
   canvas: HTMLCanvasElement;
   ctx: CanvasRenderingContext2D;
   snake: Snake;
   speed: number;
   lastRenderTime: number;
   direction: DirectionsEnum;
   lastDirection: DirectionsEnum;
   point: Square;

   constructor() {
      this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
      this.canvas.width = GAME_WIDTH;
      this.canvas.height = GAME_HEIGHT;
      this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

      this.speed = SNAKE_SPEED_PER_SEC;

      this.lastRenderTime = 0;

      this.point = new Square(200, 200);
      this.snake = new Snake();
      this.direction = DirectionsEnum.RIGHT;
      this.lastDirection = this.direction;
      this.drawSnake();
      this.drawPoint();
      // window.requestAnimationFrame(this.animateGame.bind(this));

      document.addEventListener('keydown', (e) => this.setDirection(e));
   }

   drawGame() {
      this.ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      this.drawSnake();
      this.drawPoint();
   }

   drawPoint() {
      this.ctx.beginPath();
      this.ctx.rect(this.point.position.x, this.point.position.y, this.point.size, this.point.size);
      this.ctx.fillStyle = '#ff0000';
      this.ctx.fill();
      this.ctx.stroke();
   }

   renderNewPoint() {
      const x = Math.ceil((Math.random() * GAME_WIDTH - SQUARE_SIZE) / SQUARE_SIZE) * SQUARE_SIZE;
      const y = Math.ceil((Math.random() * GAME_HEIGHT - SQUARE_SIZE) / SQUARE_SIZE) * SQUARE_SIZE;
      this.point = new Square(x, y);
   }

   drawSnake() {
      this.ctx.beginPath();
      this.snake.body.forEach((el, index) => {
         this.ctx.rect(el.position.x, el.position.y, el.size, el.size);
         if (index === 0) {
            this.ctx.fillStyle = '#000000';
            this.ctx.fill();
         }
      });
      this.ctx.stroke();
   }

   animateGame(timestamp: DOMTimeStamp) {
      window.requestAnimationFrame(this.animateGame.bind(this));
      const progress = (timestamp - this.lastRenderTime) / 1000;
      if (progress < 1 / this.speed) return;

      this.lastRenderTime = timestamp;

      this.snake.move(this.direction);
      this.drawGame();

      const middle = SQUARE_SIZE / 2;
      if (
         this.snake.head.position.x + middle === this.point.position.x + middle &&
         this.snake.head.position.y + middle === this.point.position.y + middle
      ) {
         const lastX = this.snake.body[this.snake.body.length - 1].position.x;
         const lastY = this.snake.body[this.snake.body.length - 1].position.y;
         this.snake.body.push(new Square(lastX, lastY));
         this.renderNewPoint();
      }
      // console.log(
      //    this.snake.body[1].position.x,
      //    this.snake.body[1].position.y,
      //    this.snake.body[2].position.x,
      //    this.snake.body[2].position.y,
      // );
   }

   setDirection(e: KeyboardEvent) {
      switch (e.key) {
         case DirectionsEnum.RIGHT:
            if (this.lastDirection === DirectionsEnum.LEFT) return;
            this.direction = DirectionsEnum.RIGHT;
            break;
         case DirectionsEnum.LEFT:
            if (this.lastDirection === DirectionsEnum.RIGHT) return;
            this.direction = DirectionsEnum.LEFT;
            break;
         case DirectionsEnum.UP:
            if (this.lastDirection === DirectionsEnum.DOWN) return;
            this.direction = DirectionsEnum.UP;
            break;
         case DirectionsEnum.DOWN:
            if (this.lastDirection === DirectionsEnum.UP) return;
            this.direction = DirectionsEnum.DOWN;
            break;

         default:
            return;
      }
      this.lastDirection = this.direction;
   }
}
