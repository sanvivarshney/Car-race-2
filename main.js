canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;
car1_x = 10;
car1_y = 10;
car1_image = "car1.png";

car2_width = 100;
car2_height = 90;
car2_x = 10;
car2_y = 100;
car2_image = "car2.jpg";


background_image = "road.webp";

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;
    car1_imageTag = new Image();
    car1_imageTag.onload = uploadcar1;
    car1_imageTag.src = car1_image;
}

function add2() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;
    car2_imageTag = new Image();
    car2_imageTag.onload = uploadcar2;
    car2_imageTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
    ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') { up(); console.log("up"); }
    if (keyPressed == '40') { down(); console.log("down"); }
    if (keyPressed == '37') { left(); console.log("left"); }
    if (keyPressed == '39') { right(); console.log("right"); } 

}

function up() {
    if (car1_y>=0)  { car1_y=car1_y-10; uploadBackground(); uploadcar1();}
}

function down() {
    if (car1_y<=500) { car1_y=car1_y+10; uploadBackground(); uploadcar1(); }
}

function right() {
    if (car1_x<=700) { car1_x=car1_x+10; uploadBackground(); uploadcar1(); } 
}

function left() {
    if (car1_x>=0) { car1_x=car1_x-10; uploadBackground(); uploadcar1(); }
}
