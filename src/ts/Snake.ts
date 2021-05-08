import { DirectionsEnum, SQUARE_SIZE } from './const';
import { Square } from './Square';

export class Snake {
   headPosition: {
      x: number;
      y: number;
   };
   snakeSize: number;
   body: Square[];
   head: Square;

   constructor() {
      this.head = new Square(100, 100);
      this.body = [
         this.head,
         new Square(this.head.position.x - SQUARE_SIZE, this.head.position.y),
         new Square(this.head.position.x - 2 * SQUARE_SIZE, this.head.position.y),
      ];
   }

   move(direction: DirectionsEnum) {
      for (let i = this.body.length - 2; i >= 0; i--) {
         this.body[i + 1].position = { ...this.body[i].position };
      }

      switch (direction) {
         case DirectionsEnum.RIGHT:
            this.body[0].position.x += SQUARE_SIZE;
            break;
         case DirectionsEnum.UP:
            this.body[0].position.y -= SQUARE_SIZE;
            break;
         case DirectionsEnum.LEFT:
            this.body[0].position.x -= SQUARE_SIZE;
            break;
         case DirectionsEnum.DOWN:
            this.body[0].position.y += SQUARE_SIZE;
            break;
         default:
            return;
      }
   }
}
