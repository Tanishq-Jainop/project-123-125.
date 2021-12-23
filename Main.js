difference=0;
wristR=0;
wrsitL=0;
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,160);
    video=createCapture(VIDEO);
    video.size(550,550);
    poseNet=ml5.poseNet(video,ModelLoaded);
    poseNet.on("pose",gotPoses);
}
function ModelLoaded(){
    console.log("Modal Has Loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);}
        wristL=results[0].pose.leftWrist.x;
        wristR=results[0].pose.rightWrist.x;
        difference=floor(wristL-wristR);
}
function draw(){
    background("#6C91C2");
    document.getElementById("Fontsize").innerHTML="Font Size Of The Text Will Be " + difference;
    textSize(difference); fill("#FFE787");
    text("Tanishq",50,400)
}