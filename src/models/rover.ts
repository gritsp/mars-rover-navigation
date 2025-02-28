import { Direction } from "./direction";
import { Position } from "./position";

export class Rover {
  position: Position;
  direction: Direction;

  constructor(position: Position, direction: number) {
    this.position = position || { x: 0, y: 0 };
    this.direction = new Direction(direction | 0);
  }

  getDirection() {
    if (this.direction.isNorth()) return "^";
    if (this.direction.isEast()) return ">";
    if (this.direction.isSouth()) return "v";
    if (this.direction.isWest()) return "<";
    throw new Error("Unknown direction");
  }

  move(direction: string) {
    console.log(`Move: ${direction}`);
    if (this.isRotate(direction)) {
      this.rotate(direction);
      return this.position;
    }
    if (this.isMove(direction)) {
      const newPosition = this.position;
      if (this.direction.isNorth()) {
        newPosition.y = this.position.y - 1;
      }
      if (this.direction.isEast()) {
        newPosition.x = this.position.x + 1;
      }
      if (this.direction.isSouth()) {
        newPosition.y = this.position.y + 1;
      }
      if (this.direction.isWest()) {
        newPosition.x = this.position.x - 1;
      }
      console.log(`current position: ${this.position.x}, ${this.position.y}`);
      console.log(`new position: ${newPosition.x}, ${newPosition.y}`);
      if (newPosition.x < 0 || newPosition.y < 0)
        throw new Error("Cannot move, out of bounds");
      return (this.position = newPosition);
    }
    throw new Error("Unknown move");
  }

  private rotate(rotate: string) {
    if (rotate === "L") return this.direction.turnLeft();
    if (rotate === "R") return this.direction.turnRight();
    throw new Error("Invalid rotate value");
  }

  private isRotate(direction: string): boolean {
    return direction === "L" || direction === "R";
  }

  private isMove(direction: string): boolean {
    return direction === "M";
  }
}
