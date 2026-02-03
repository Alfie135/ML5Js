# ML5JS Project
ML5js project which uses a model trained on 16 items: shoe, chair, webcam, plug socket, ethernet port, computer, usb cable or radiator, keyboard, mouse, earphones, phone, backpack, wallet and computer screen. 
All you need to get started is to have a webcam, launch an instance. Once the model loads, it will automatically put a label.

## Get started

1. Launch an instance and make sure you have a webcam.
2. Wait for the model to load, and it will begin to automatically identify items.

## Functions and what they do
- preload()
  - Loads the trained model before the sketch starts (ml5.imageClassifier(...) with model.json).
- setup()
  - Creates the canvas, starts and configures the webcam capture, hides the raw video element, and begins classification.
- classifyVideo()
  - Grabs the current video frame (optionally flips it) and calls classifier.classify(...) to get predictions.
- gotResult(error, results)
  - Callback that receives results from classifier; updates the displayed label and confidence, then triggers the next classifyVideo() call.
- draw()
  - Runs every frame: draws the video to the canvas and overlays the current label + confidence percentage.

## Project structure
- index.html — minimal page that loads p5.js, ml5.js and sketch.js, plus links to CSS/controls.
- sketch.js — main p5 sketch: sets up the webcam, loads the ml5 model, runs classification and draws results to the canvas.
- sketchold.js — older/object-detection example kept for reference (COCO-SSD / Teachable Machine style).
- tm-my-image-model/ — exported model files (model.json, weights, metadata) used by ml5.imageClassifier or objectDetector.
- assets/ (optional) — images, icons or other static resources.
- README.md — this file with usage notes and function descriptions.
- .gitignore / package.json (optional) — tooling and dependencies if present.





