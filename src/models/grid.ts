import { Position } from "./position";

export class Grid {
  private rangeX: number;
  private rangeY: number;

  private grid: Array<Array<string>>;

  constructor(rangeX: number, rangeY: number) {
    this.rangeX = rangeX;
    this.rangeY = rangeY;

    this.grid = this.createGrid(rangeY, rangeX);
  }

  private createGrid(rangeY: number, rangeX: number): string[][] {
    return new Array(rangeY).fill(null).map(() => new Array(rangeX).fill(" "));
  }

  getGrid() {
    return this.grid;
  }

  setItem(position: Position, item: string) {
    console.log(
      `item: ${this.grid[position.y][position.x]}, position: ${position.x}, ${
        position.y
      }`
    );
    if (
      position.x < 0 ||
      position.x >= this.rangeX ||
      position.y < 0 ||
      position.y >= this.rangeY
    ) {
      throw new Error("Cannot set item, out of bounds");
    }
    if (
      this.grid[position.y][position.x] === " " ||
      this.grid[position.y][position.x] != "O"
    ) {
      console.log(`set item: ${item}`);
      this.grid[position.y][position.x] = item;
      return;
    }
    console.log(`update item: ${this.grid[position.y][position.x]}`);
    throw new Error("Cannot set item, position already taken");
  }

  getRangeX() {
    return this.rangeX;
  }

  getRangeY() {
    return this.rangeY;
  }
}
