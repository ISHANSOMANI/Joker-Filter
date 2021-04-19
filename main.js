function setup(){
   canvas =  createCanvas(300,300);
    canvas.center();
video = createCapture(VIDEO)
video.size(300,300)
video.hide()

poseNet = ml5.poseNet(video,modeloaded);
poseNet.on('pose',gotPoses)
}
 
noseX = 0;
noseY = 0;
function modeloaded(){
    console.log("PoseNet is initialized");
}

function takeSnapshot(){
    save("Face.png");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y-17;
    }
}

function draw(){
image(video, 0, 0, 300, 300);
image(nose,noseX,noseY,30,30)
}

function preload(){
    nose = loadImage("https://i.postimg.cc/sfbqgXhG/m.png")
}