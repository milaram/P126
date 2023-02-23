song = "";
scorerightwrist = 0;
scoreleftwrist = 0;
rightwristx = 0;
leftwristx = 0;
rightwristy = 0
leftwristy = 0;;

function preload(){

    song = loadSound("Feel_The_Beat.mp3");
}

function play(){

    song.play();
}

function setup(){

    canvas =  createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);

}

function draw(){

    image(video,0 ,0 , 600, 500);

}

function gotPoses(){

    if(results > 0)
    {
        console.log(results);
        scoreleftwrist = results[0].pose.keypoints[9].score;
        console.log("Left Wrist Score =" + scoreleftwrist);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("Left wrist x = " + leftwristx + " and left wrist y = " + leftwristy);
        console.log("Right wrist x = " + rightwristx + " and right wrist y = " + rightwristy);
        scorerightwrist = results[0].pose.keypoints[10].score;
        console.log("right wrist score =" + scorerightwrist);
    }



}
