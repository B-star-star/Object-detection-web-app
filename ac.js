status="";
ac_img="";

function preload(){
    ac_img = loadImage("AC.jfif");
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
    object_detector.detect(ac_img,gotResults);
}

function gotResults(error,results){
  if(error){
    console.error(error);
  }
  console.log(results);
}


function draw(){
    image(ac_img,0,0,650,350);
}