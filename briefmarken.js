let possible_briefmarke_images;
let img;
let currentBriefmarkPos;
let maxBriefmarke = 12;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
      cnv.parent('sketching-canvas');
  imageMode (CENTER);
  possible_briefmarke_images = ["/media/stamps/stamp1.png", "/media/stamps/stamp2.png", "/media/stamps/stamp3.png", "/media/stamps/stamp4.png", "/media/stamps/stamp5.png", "media/stamps/stamp6.png", "/media/stamps/stamp7.png", "/media/stamps/stamp8.png", "/media/stamps/stamp9.png", "/media/stamps/stamp10.png"];
  currentBriefmarkPos = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  printNextBriefmark();
}

function drawImage(img){
  img.resize(250,0)
  image(img, mouseX, mouseY)
}

function printNextBriefmark() {
  currentBriefmarkPos++;
  if (currentBriefmarkPos == possible_briefmarke_images.length)
    currentBriefmarkPos = 0;
  
  loadImage(possible_briefmarke_images[currentBriefmarkPos], drawImage);
  //if (possible_briefmarke_images.length > maxBriefmarke){
    //background(255);
  //};
}