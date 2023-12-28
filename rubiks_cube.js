status="";
rubiks_img="";

function preload(){
    rubiks_img = loadImage("rubiks_cube.jfif");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.center();
    object_detector=ml5.objectDetector('cocossd',modeLoaded);
    document.getElementById("status").innerHTML=" Status : Detecting Object ";
}

function modeLoaded(){
    console.log("model Loaded!");
    status=true;
    object_detector.detect(rubiks_img,gotResults);
}

function gotResults(error,results){
  if(error){
    console.error(error);
  }
  console.log(results);
}


function draw(){
    image(rubiks_img,0,0,650,400);
}