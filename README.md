# p5-livecoding-vj

A lightweight VJ system dedicated to live coding, built on p5.js.

## Core Concepts

Beyond being a simple drawing program, this system is architected as a "VJ Engine" based on the following design principles:

* **PIPELINE Architecture**: A layer-based structure where multiple drawing stages are managed in an array and rendered sequentially from top to bottom.
* **DeltaTime (dt) Management**: Frame-rate independent animation control, ensuring consistent motion regardless of PC performance.
* **Modular Effects**: Effects are isolated into individual JS modules, allowing for real-time swapping and seamless expansion during live performances.

## Project Structure

* `src/main.js`: Setup for p5.js instance mode.
* `src/sketch.js`: The core of the rendering engine. Manages PIPELINE execution and time tracking (`dt`, `sec`).
* `src/stage.js`: Utility for defining the structure of an effect (name, enabled status, and draw logic).
* `effects/`: Directory for various VJ effect modules.

## Roadmap

* [x] Integrate p5.js with Instance Mode
* [x] Build PIPELINE & Stage system
* [x] Modularize external effects
* [ ] Implement `stage()` utility for coordinate management
* [ ] Add Audio Reactive features (FFT analysis)
* [ ] Wrap as a desktop application with Electron

## Tech Stack

* **Vite**: Frontend Tooling
* **p5.js**: Creative Coding Library
