let landscape;
let home;
let picker;
let sceneTicker = 0;
let det;
let glen;
let nav;
let character = 0;
let star;
let starO;
let charStart = 73;
let tick = true;

function preload() {
	landscape = loadImage("setting.png");
	home = loadImage("home3.png");
	picker = loadImage("picker.png");
	det = loadImage("detroitScene.png");
	glen = loadImage("glendaleScene.png");
	nav = loadImage("navajoScene.png");
	star = loadImage("4.PNG");
	starO = loadImage("4O.PNG");
}

function setup() {
	createCanvas(1024, 768);
	background(0);
	imageMode(CENTER)
	loadPixels();
	pixelDensity(1);
}
	

function draw() {
	
	// Start up page :)
	if (sceneTicker == 0){
		if (millis() < 3000) { // Pseudo Loading, Runs for a period of time to show the name 
			imageMode(CENTER)
			home.resize (1024, 768)
			image (home, width/2, height/2, home.width,home.height)
		} else {
		sceneTicker = 1;
		}
	} 
	

	// Avatar Options
	if (sceneTicker == 1){ 
			imageMode(CENTER)
			picker.resize (1024, 768)
			image (picker, width/2, height/2, picker.width,picker.height)
	} 

	//Scene Options Screen
	if (sceneTicker == 2){ 
		imageMode(CENTER)
		landscape.resize (1024, 768)
		image (landscape, width/2, height/2, landscape.width,landscape.height)
		sceneTicker = 222; // super annoying, not very pretty but the function keeps running into probs
	}
	
	// Navajo Scene
	if (sceneTicker == 3){ 
		imageMode(CENTER)
		home.resize (1024, 768)
		image (nav, width/2, height/2, nav.width,nav.height)
		image (star, charStart, height/1.5 , 0.75 * star.width, 0.75 * star.height)
		if (keyIsDown(RIGHT_ARROW)) {
			if (charStart <= 1024){
    		charStart += 7;
				if (tick == true){
					star = loadImage("4O.PNG");
					tick = false
				} else {
					star = loadImage("4.PNG");
					tick = true
				}
			} else {
				charStart = 73;
			}
  	}	
	}
	
	// Detroit Scene
	if (sceneTicker == 4){ 
		imageMode(CENTER)
		home.resize (1024, 768)
		image (det, width/2, height/2, det.width,det.height)
	}
	
	// Glendale Scene
	if (sceneTicker == 5){ 
		imageMode(CENTER)
		home.resize (1024, 768)
		image (glen, width/2, height/2, glen.width,glen.height)
	}
}

function mouseClicked() {
	if (sceneTicker == 1){
		if (mouseY < 354 && mouseY > 227) {
			if (mouseX < 244 && mouseX > 152){
				character = 1;
			}
			if (mouseX < 442 && mouseX > 349){
				character = 2;
			}
			if (mouseX < 645 && mouseX > 552){
				character = 3;
			}
			if (mouseX < 840 && mouseX > 741){
				character = 4;
			}
			sceneTicker = 2;
		}
		if (mouseY < 593 && mouseY > 469) {
			if (mouseX < 239 && mouseX > 144){
				character = 5;
			}
			if (mouseX < 433 && mouseX > 339){
				character =6;
			}
			if (mouseX < 643 && mouseX > 546){
				character = 7;
			}
			if (mouseX < 843 && mouseX > 735){
				character = 8;
			}
			sceneTicker = 2;
		}
	}
	if (sceneTicker == 222){
		if (mouseX < 915 && mouseX > 705){
			detroitScene()
		}
		if (mouseX < 622 && mouseX > 405){
			navajoScene()
		}
		if (mouseX < 317 && mouseX > 110){
			glendaleScene()
		}
	}
}


function navajoScene(){
	sceneTicker = 3;
}

function detroitScene(){
	sceneTicker = 4;
}

function glendaleScene(){
	sceneTicker = 5;
}




