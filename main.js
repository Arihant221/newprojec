song1 = ""
song2 = ""

 function preload() {
     song1 = loadSound("stars.mp3");
     song2 = loadSound("wolves.mp3");
}

function setup() {
    canvas = createCanvas(550,550);
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video,0,0,550,550)
}