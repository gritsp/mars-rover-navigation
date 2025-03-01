# Mars rover navigation repository

This repository contains the code for the Mars rover navigation project. The project is a simple web application that allows the user to navigate a rover on a grid. The initial grid size is 5\*4, the initial position of the rover will start at [0,0], The user can the commands to navigate the rover. The application will display the final position of the rover.

## Requirements

- Node.js v20
- npm v10

## Installation

```bash
npm install
```

## Running the app with development mode

```bash
npm run dev
```

- Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Running the tests

```bash
npm run test
```

## How to build the app and run it

- Install `serve` package globally

```bash
npm install -g serve
```

- Build the app

```bash
npm run build
```

- Run the app

```bash
serve -s dist
```

- Open [http://localhost:3000](http://localhost:300) to view it in the browser.
