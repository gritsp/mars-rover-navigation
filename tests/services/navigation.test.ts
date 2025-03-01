import { describe, it, expect } from "@jest/globals";

import { NavigationService } from "../../src/services/navigation";

describe("NavigationService", () => {
  let navigationService: NavigationService;

  it("should create a new instance of NavigationService", () => {
    navigationService = new NavigationService();

    expect(navigationService).toBeInstanceOf(NavigationService);
  });

  it("should return the grid", () => {
    navigationService = new NavigationService();

    const grid = navigationService.getGrid();
    expect(grid).toEqual([
      ["^", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", "O", " ", " "],
      [" ", " ", " ", " ", " "],
    ]);
  });

  it("should turn the rover to the right", () => {
    navigationService = new NavigationService();

    navigationService.navigateRover("R");
    const grid = navigationService.getGrid();
    expect(grid).toEqual([
      [">", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", "O", " ", " "],
      [" ", " ", " ", " ", " "],
    ]);
  });

  it("should turn the rover to the left", () => {
    navigationService = new NavigationService();

    navigationService.navigateRover("L");
    const grid = navigationService.getGrid();
    expect(grid).toEqual([
      ["<", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", "O", " ", " "],
      [" ", " ", " ", " ", " "],
    ]);
  });

  it("should move the rover to east", () => {
    navigationService = new NavigationService();

    navigationService.navigateRover("R");
    navigationService.navigateRover("M");
    const grid = navigationService.getGrid();
    expect(grid).toEqual([
      [" ", ">", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", "O", " ", " "],
      [" ", " ", " ", " ", " "],
    ]);
  });

  it("should move the rover to west and error out of bounds", () => {
    navigationService = new NavigationService();

    navigationService.navigateRover("L");
    const result = navigationService.navigateRover("M");
    expect(result).toBe("Cannot move, out of bounds");
  });

  it("should move the rover to south", () => {
    navigationService = new NavigationService();

    navigationService.navigateRover("L");
    navigationService.navigateRover("L");
    navigationService.navigateRover("M");
    const grid = navigationService.getGrid();
    expect(grid).toEqual([
      [" ", " ", " ", " ", " "],
      ["v", " ", " ", " ", " "],
      [" ", " ", "O", " ", " "],
      [" ", " ", " ", " ", " "],
    ]);
  });

  it("should move the rover to north and error out of bounds", () => {
    navigationService = new NavigationService();

    const result = navigationService.navigateRover("M");
    expect(result).toBe("Cannot move, out of bounds");
  });

  it("should return invalid direction", () => {
    navigationService = new NavigationService();

    const result = navigationService.navigateRover("X");
    expect(result).toBe("Invalid direction");
  });

  it("should receive message cannot move item, position already taken", () => {
    navigationService = new NavigationService();

    navigationService.navigateRover("R");
    navigationService.navigateRover("M");
    navigationService.navigateRover("M");
    navigationService.navigateRover("R");
    navigationService.navigateRover("M");
    const result = navigationService.navigateRover("M");
    expect(result).toBe("Cannot move item, position already taken");
  });
});
