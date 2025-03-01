import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Use ts-jest to compile TypeScript
  testEnvironment: "node", // Use Node.js environment
  collectCoverage: true, // Enable test coverage report
  collectCoverageFrom: ["src/**/*.ts"], // Collect coverage from source files
  clearMocks: true, // Automatically clear mocks between tests
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  roots: ["<rootDir>/"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default config;
