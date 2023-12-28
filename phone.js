status="";
phone_img="";

function preload(){
    phone_img = loadImage("headphones.jpg");
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
    object_detector.detect(phone_img,gotResults);
    console.log("image : headphone");
}

function gotResults(error,results){
  if(error){
    console.error(error);
  }
  console.log(results);
}


function draw(){
    image(phone_img,0,0,650,400);
}