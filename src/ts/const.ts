export enum DirectionsEnum {
   LEFT = 'ArrowLeft',
   RIGHT = 'ArrowRight',
   UP = 'ArrowUp',
   DOWN = 'ArrowDown',
}

export const SQUARE_SIZE = 40;

//  podzielne przez SQUARE_SIZE !!!
export const GAME_HEIGHT = 600;
export const GAME_WIDTH = 800;

export const HEAD_POSITION = {
   // podzielne przez SQUARE_SIZE !!!
   x: 160,
   y: 160,
};
export const SNAKE_SPEED_PER_SEC = 9;

export const COLORS = {
   background: '#fff',
   head: '#000000',
   tail: '#0bdb50',
   point: '#ff0000',
};
