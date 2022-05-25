var noseX=0;
var noseY=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/d37FchGr/clown-nose-clipart-2.png');
    }

function setup(){
canvas=createCanvas(300,300)
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}


function take_snapshot(){
save('realtime_image');
}
function modelLoaded(){
    console.log("poseNET is initilized");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX=results[0].pose.nose.x-15;
noseY=results[0].pose.nose.y-15;
console.log("NOSE X =" + noseX);
console.log("NOSE Y =" + noseY);
}
}
function draw(){
    image(video,0,0,300,300);
    
    image(clown_nose,noseX,noseY,30,30); 
    }
