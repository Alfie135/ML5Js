let mobilenet;
let classifier;
let video;
let label = 'Loading model.';
let happyButton;
let sadButton;
let trainButton;

function modelReady() {
  console.log('Model is ready!');
}

function videoReady() {
  console.log('Video is ready!');
}

function setup() {
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

  happyButton = createButton('Ethernet Port');
  happyButton.mousePressed(function() {
    classifier.addImage('Ethernet Port');
  });

  sadButton = createButton('Plug Socket');
  sadButton.mousePressed(function() {
    classifier.addImage('Plug Socket');
  });

  trainButton = createButton('Train');
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });

  saveButton = createButton('Save');
  saveButton.mousePressed(function() {
    classifier.save();
  });
}

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}

function whileTraining(loss) {
  if (loss == null) {
    console.log('Training Complete');
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
}

function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    label = result[0].label;
    classifier.classify(gotResults);
  }
}
