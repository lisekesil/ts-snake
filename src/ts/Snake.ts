import { SQUARE_SIZE } from './const';
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
}
