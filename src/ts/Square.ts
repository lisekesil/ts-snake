import { SQUARE_SIZE } from './const';

export class Square {
   position: {
      x: number;
      y: number;
   };
   size: number;

   constructor(x: number, y: number) {
      this.size = SQUARE_SIZE;
      this.position = {
         x,
         y,
      };
   }
}
