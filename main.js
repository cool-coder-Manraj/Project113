function setup() {
    canvas = creaeCanvas(640, 480);
    canvas.position(150, 150);
    video = creatCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function take_snapshot() {
    save('student_name.png');
}