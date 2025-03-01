import { Grid } from "../models/grid";
import { Obstacle } from "../models/obstacles";
import { Position } from "../models/position";
import { Rover } from "../models/rover";

export class NavigationService {
  private rover: Rover;
  private grid: Grid;
  private obstacles: Obstacle;

  private rangeX = 5;
  private rangeY = 4;

  constructor() {
    this.obstacles = new Obstacle({ x: 2, y: 2 });
    const roverPosition: Position = { x: 0, y: 0 };
    const roverDirection = 0;
    this.rover = new Rover(roverPosition, roverDirection);
    this.grid = new Grid(this.rangeX, this.rangeY);

    this.grid.setItem(this.rover.position, this.rover.getDirection());

    this.setObstacles();
  }
  private setObstacles() {
    this.grid.setItem(this.obstacles.getPosition(), "O");
  }

  private moveRover(direction: string) {
    const logPosition = { ...this.rover.position };
    console.log(`log position: ${logPosition.x}, ${logPosition.y}`);

    this.rover.move(direction);
    this.grid.setItem(this.rover.position, this.rover.getDirection());
    console.log(
      `rover position: ${this.rover.position.x}, ${this.rover.position.y}`
    );
    console.log(`log position2: ${logPosition.x}, ${logPosition.y}`);
    if (
      logPosition.x !== this.rover.position.x ||
      logPosition.y !== this.rover.position.y
    ) {
      console.log(`removing log position: ${logPosition.x}, ${logPosition.y}`);
      this.grid.setItem(logPosition, " ");
    }
  }

  getGrid() {
    return this.grid.getGrid();
  }

  navigateRover(direction: string) {
    try {
      if (direction !== "L" && direction !== "R" && direction !== "M") {
        return "Invalid direction";
      }
      this.moveRover(direction);
      return "Moved";
    } catch (e) {
      console.log(e);
      if (e instanceof Error) {
        return e.message;
      }
      return "An unknown error occurred";
    }
  }
}
