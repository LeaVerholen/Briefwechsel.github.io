let possible_briefmarke_images;
let img;
let currentBriefmarkPos;
let maxBriefmarke = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode (CENTER);
  possible_briefmarke_images = ["Briefmarke.png", "BriefmarkeC.png", "BriefmarkeG.png", "BriefmarkeM.png", "BriefmarkeY.png"];
  currentBriefmarkPos = 0;
}

function mouseClicked() {
  printNextBriefmark();
  //remove Briefmark
  //if (possible_briefmarke_images.length > maxBriefmarke){
    //let last = possible_briefmarke_images.pop (8);
  //};
}
  
  //function touchStarted() {
 // printNextBriefmark();
//}

function drawImage(img){
  image(img, mouseX, mouseY, 131,73);
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