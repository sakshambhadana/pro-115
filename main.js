preload() 
{
  
}

setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function modelLoaded(){
    console.log('poseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x-15;
      noseY = results[0].pose.nose.y-15;
      console.log("nose x =" + noseX); 
      console.log("nose y =" + noseY); 
    }
}

draw()
{

}

function take_snapshot(){
    save('myFilterImage.png');
}
