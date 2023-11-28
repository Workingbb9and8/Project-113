function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 0, 0, 640, 480);
    
    
    fill(255, 0, 0);
    stroke(255, 0 ,0);
    circle(50, 50, 80);

    circle(200, 430, 15);

    circle(230, 120, 12);
    
    fill(120, 5, 30);
    stroke(50, 25, 80);
    ellipse(450, 360, 15, 10)
    
    ellipse(390, 208, 20, 30)

    ellipse(610, 102, 30, 80)

    fill(50,200,8);
    stroke(10, 75, 49);
    rect(80, 20, 15, 10);

    rect(150, 150, 20, 20)

    rect(327, 528, 30, 40)

}


