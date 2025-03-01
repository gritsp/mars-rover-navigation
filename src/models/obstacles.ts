import { Position } from "./position";

export class Obstacle {
  private position: Position;

  constructor(position: Position) {
    this.position = position;
  }

  getPosition(): Position {
    return this.position;
  }
}
