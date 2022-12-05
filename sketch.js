let handpose;
let video;
let predictions = [];
let pointerX, pointerY, pointerZ;

function setup() {
  // createCanvas(640, 480);
  createCanvas(windowWidth, windowHeight);

  video = createCapture(VIDEO);
  video.size(width, height);
fire_image=loadImage('tenor.gif')
  handpose = ml5.handpose(video, modelReady);

  // This sets up an event that fills the global variable "predictions"
  // with an array every time new hand poses are detected
  handpose.on("predict", (results) => {
    predictions = results;
  });

  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
  translate(width, 0);
  scale(-1, 1);
  //  background(0);

  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      if (j == 8) {				
		pointerX = map(keypoint[0],0,640,0,width)
		pointerY = map(keypoint[1],0,480,0,height)
		ellipse(pointerX, pointerY, 10, 10);
				image(fire_image,pointerX-20,pointerY-20,40,40);
      } else
      if (j == 16) {   
		fill(255,0,0)
        pointerX = map(keypoint[0],0,640,0,width)
        pointerY = map(keypoint[1],0,480,0,height)
		
		pointerZ = keypoint[2]
		print(pointerY)
        ellipse(pointerX, pointerY, 10, 10);
				image(fire_image,pointerX-20,pointerY-20,40,40);
      } else
      if (j == 20) {
      
		fill(255,255,0)
        pointerX = map(keypoint[0],0,640,0,width)
        pointerY = map(keypoint[1],0,480,0,height)
        ellipse(pointerX, pointerY, 10, 10);
				image(fire_image,pointerX-20,pointerY-20,40,40);
      }
    }
  
  }
}
