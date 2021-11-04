function preload(){

}

//let capture;

function setup(){
    canvas=createCanvas(600, 600);
    canvas.position(650, 300);

    video = createCapture(VIDEO);
    video.size(400, 450);
    video.hide();

}


function draw(){
    background(255);   
    stroke(0, 243, 123);   
    strokeWeight(20);       
    fill(150);          
    rect( 90, 65, 420, 470); 

    image(video, 90, 65, 420, 470);
}



function TakeSnapshot(){
    save("Frameanimationimage.png");
}

var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}


