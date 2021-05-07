import { GAME_HEIGHT, GAME_WIDTH, SNAKE_SPEED_PER_SEC, SQUARE_SIZE } from './const';
import { Snake } from './Snake';

export class Game {
   canvas: HTMLCanvasElement;
   ctx: CanvasRenderingContext2D;
   snake: Snake;
   speed: number;
   lastRenderTime: number;

   constructor() {
      this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
      this.canvas.width = GAME_WIDTH;
      this.canvas.height = GAME_HEIGHT;
      this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

      this.speed = SNAKE_SPEED_PER_SEC;

      this.lastRenderTime = 0;

      this.snake = new Snake();
      this.drawSnake();
      window.requestAnimationFrame(this.moveSnake.bind(this));
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

      this.snake.body.forEach((el) => {
         el.position.x += SQUARE_SIZE;
      });

      this.drawSnake();

      console.log(
         this.snake.body[1].position.x,
         this.snake.body[1].position.y,
         this.snake.body[2].position.x,
         this.snake.body[2].position.y,
      );
   }
}
