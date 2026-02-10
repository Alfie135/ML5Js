
// Classifier Variable
let classifier;
// Model URL
let imageModelURL = './tm-my-image-model/';
// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let confidence = 0;

const shoePlayer = new Audio('./audio/crashCymbal.wav');
const Plugsocket = new Audio('./audio/crashCymbal.wav');
const Webcam = new Audio('./audio/crashCymbal.wav');
const Radiator = new Audio('./audio/crashCymbal.wav');
const EthernetPort = new Audio('./audio/floorTom.wav');
const OfficeChair = new Audio('./audio/floorTom.wav');
const Computer = new Audio('./audio/floorTom.wav');
const USBCable = new Audio('./audio/floorTom.wav');
const MobilePhone = new Audio('./audio/hihat.mp3');
const Keyboard = new Audio('./audio/hihat.mp3');
const Mouse = new Audio('./audio/hihat.mp3');
const Monitor = new Audio('./audio/hihat.mp3');
const Backpack = new Audio('./audio/rideCymbal.wav');
const Wallet = new Audio('./audio/rideCymbal.wav');
const Earphones = new Audio('./audio/rideCymbal.wav');
const Watch = new Audio('./audio/rideCymbal.wav');

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(640, 480);
  // Create the video
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textAlign(CENTER);
  noStroke();
  textSize(24);
  text(label + ' ' + ((confidence || 0) * 100).toFixed(1) + '%', width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  console.log(results[0]);
  label = results[0].label;
  
  if (label === 'Shoe (Converse)' && !shoePlayer.playing) {
    shoePlayer.play();
  }
  if (label === 'Plugsocket' && !Plugsocket.playing) {
    Plugsocket.play();
  }
  if (label === 'Webcam' && !Webcam.playing) {
    Webcam.play();
  }
  if (label === 'Radiator' && !Radiator.playing) {
    Radiator.play();
  }
  if (label === 'Ethernet Port' && !EthernetPort.playing) {
    EthernetPort.play();
  }
  if (label === 'Office Chair' && !OfficeChair.playing) {
    OfficeChair.play();
  }
  if (label === 'Computer' && !Computer.playing) {
    Computer.play();
  }
  if (label === 'USB Cable' && !USBCable.playing) {
    USBCable.play();
  }
  if (label === 'Mobile Phone' && !MobilePhone.playing) {
    MobilePhone.play();
  }
  if (label === 'Keyboard' && !Keyboard.playing) {
    Keyboard.play();
  }
  if (label === 'Mouse' && !Mouse.playing) {
    Mouse.play();
  }
  if (label === 'Monitor' && !Monitor.playing) {
    Monitor.play();
  }
  if (label === 'Backpack' && !Backpack.playing) {
    Backpack.play();
  }
  if (label === 'Wallet' && !Wallet.playing) {
    Wallet.play();
  }
  if (label === 'Earphones' && !Earphones.playing) {
    Earphones.play();
  }
  if (label === 'Watch' && !Watch.playing) {
    Watch.play();
  }
  confidence = results[0].confidence;
  // Classifiy again!
  classifyVideo();
}