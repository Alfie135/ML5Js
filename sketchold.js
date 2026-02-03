// Copyright (c) 2020 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Object Detection using COCOSSD
This example uses a callback pattern to create the classifier
=== */

let video;
let detector;
let detections = [];

//let imageModelURL = 'https://teachablemachine.withgoogle.com/models/1pE8pCTJr/';

// Setup function to initialize video and object detector
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, videoReady);
  video.size(640, 480);
  video.hide();
}

function videoReady() {
  // Models available are 'cocossd', 'yolo'
  detector = ml5.objectDetector('./tm-my-image-model/model.json', modelReady);
  // detector = ml5.objectDetector('https://teachablemachine.withgoogle.com/models/1pE8pCTJr/', modelReady);
}

// When we get a detection, draw it to the canvas
function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;
  setTimeout(() => detector.detect(video, gotDetections), 50);
}

// When the model is ready, start detecting
function modelReady() {
  detector.detect(video, gotDetections);
}

function draw() {
  // Loop runs repeatedly to draw the video and detections
  image(video, 0, 0);

  for (let i = 0; i < detections.length; i += 1) {

    const object = detections[i];
    const conf = object.confidence ?? object.score;
    const percent = conf != null ? Math.round(conf * 100) + '%' : '';
    const label = object.label + (percent ? ' ' + percent : '');

    
    // Draw bounding box and label
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);

    noStroke();
    fill(255);
    textSize(24);
    text(label, object.x + 10, object.y + 24);
  }
}
