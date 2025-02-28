export class Direction {
  private maxRotate = 360;
  private minRotate = 0;
  private rotate = 90;

  private direction: number;

  constructor(direction: number) {
    this.direction = direction | 0;
  }

  getDirection() {
    // if (this.direction === this.minRotate || this.direction === this.maxRotate)
    //   return "^";
    // if (this.direction === this.rotate) return ">";
    // if (this.direction === this.rotate * 2) return "v";
    // if (this.direction === this.rotate * 3) return "<";
    // throw new Error("Unknown direction");
    return this.direction;
  }

  turnLeft() {
    console.log(`turning left`);
    console.log(`current direction: ${this.direction}`);
    this.setDirection(-this.rotate);
    console.log(`new direction: ${this.direction}`);
    return;
  }

  turnRight() {
    console.log(`turning right`);
    console.log(`current direction: ${this.direction}`);
    this.setDirection(this.rotate);
    console.log(`new direction: ${this.direction}`);
    return;
  }

  private setDirection(direction: number) {
    console.log(`current direction: ${this.direction}`);
    console.log(`new direction: ${direction}`);
    if (this.direction + direction === this.maxRotate) {
      this.direction = this.rotate;
      return;
    }
    if (this.direction + direction < this.minRotate) {
      this.direction = this.rotate * 3;
      return;
    }
    this.direction += direction;
    console.log(`updated direction: ${this.direction}`);
    return;
  }

  isNorth(): boolean {
    return (
      this.direction === this.minRotate || this.direction === this.maxRotate
    );
  }

  isEast(): boolean {
    return this.direction === this.rotate;
  }

  isSouth(): boolean {
    return this.direction === this.rotate * 2;
  }

  isWest(): boolean {
    return this.direction === this.rotate * 3;
  }
}
