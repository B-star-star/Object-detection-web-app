status="";
ac_img="";

function preload(){
    spoon_img = loadImage("Soup_Spoon.jpg");
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
    object_detector.detect(spoon_img,gotResults);
}

function gotResults(error,results){
  if(error){
    console.error(error);
  }
  console.log(results);
}


function draw(){
    image(spoon_img,0,0,650,350);
}