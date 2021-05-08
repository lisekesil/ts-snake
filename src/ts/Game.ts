import { GAME_HEIGHT, GAME_WIDTH, SNAKE_SPEED_PER_SEC, SQUARE_SIZE, DirectionsEnum } from './const';
import { Snake } from './Snake';

export class Game {
   canvas: HTMLCanvasElement;
   ctx: CanvasRenderingContext2D;
   snake: Snake;
   speed: number;
   lastRenderTime: number;
   direction: DirectionsEnum;
   lastDirection: DirectionsEnum;

   constructor() {
      this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
      this.canvas.width = GAME_WIDTH;
      this.canvas.height = GAME_HEIGHT;
      this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

      this.speed = SNAKE_SPEED_PER_SEC;

      this.lastRenderTime = 0;

      this.snake = new Snake();
      this.direction = DirectionsEnum.RIGHT;
      this.lastDirection = this.direction;
      this.drawSnake();
      window.requestAnimationFrame(this.moveSnake.bind(this));

      document.addEventListener('keydown', (e) => this.setDirection(e));
   }

   drawSnake() {
      this.ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      this.ctx.beginPath();
      this.snake.body.forEach((el) => {
         this.ctx.rect(el.position.x, el.position.y, el.size, el.size);
      });
      this.ctx.stroke();
   }

   moveSnake(timestamp: DOMTimeStamp) {
      window.requestAnimationFrame(this.moveSnake.bind(this));
      const progress = (timestamp - this.lastRenderTime) / 1000;
      if (progress < 1 / this.speed) return;

      this.lastRenderTime = timestamp;

      this.snake.move(this.direction);
      this.drawSnake();

      console.log(
         this.snake.body[1].position.x,
         this.snake.body[1].position.y,
         this.snake.body[2].position.x,
         this.snake.body[2].position.y,
      );
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
