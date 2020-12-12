let landscape;
let home;
let picker;
let sceneTicker = 0;
let det;
let glen;
let nav;
let character = 0;
let charStart = 73;
let tick = true;
let set;
let setter = 1;
let oneA;
let oneAO;
let twoA;
let twoAO;
let threeA;
let threeAO;
let fourA;
let fourAO;
let fiveA;
let fiveAO;
let sixA;
let sixAO;
let sevenA;
let sevenAO;
let eightA;
let eightAO;
let s = 'The quick brown fox jumped over the lazy dog.';
let title = "title";
let song;
let alarm; 
let disc;


function preload() {
	
	landscape = loadImage("setting.png");
	home = loadImage("home3.png");
	picker = loadImage("picker.png");
	det = loadImage("detroitScene.png");
	glen = loadImage("glendaleScene.png");
	nav = loadImage("navajoScene.png");
	oneA = loadImage("1A.png");
	oneAO = loadImage("1AO.png");
	twoA = loadImage("2A.png");
	twoAO = loadImage("2AO.png");
	threeA = loadImage("3A.png");
	threeAO = loadImage("3AO.png");
	fourA = loadImage("4A.png");
	fourAO = loadImage("4AO.png");
	fiveA = loadImage("1B.png");
	fiveAO = loadImage("1BO.png");
	sixA = loadImage("2B.png");
	sixAO = loadImage("2BO.png");
	sevenA = loadImage("3B.png");
	sevenAO = loadImage("3BO.png");
	eightA = loadImage("4B.png");
	eightAO = loadImage("4BO.png");
}

function setup() {
	createCanvas(1024, 768);
	background(0);
	imageMode(CENTER)
	loadPixels();
	pixelDensity(1);
	song = createAudio('choir.mp3');
	song.play();
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
		song.stop();
		imageMode(CENTER)
		home.resize (1024, 768)
		image (nav, width/2, height/2, nav.width,nav.height)
		if (character == 1){
			image (oneA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 2){
			image (twoA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 3){
			image (threeA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 4){
			image (fourA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 5){
			image (fiveA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 6){
			image (sixA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 7){
			image (sevenA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 8){
			image (eightA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (keyIsDown(RIGHT_ARROW)) {
			if (charStart <= 1024){
    		charStart += 2;
				if (tick == true){
					if (character == 1){
						oneA = loadImage("1AO.png");
					}
					if (character == 2){
						twoA = loadImage("2AO.png");
					}
					if (character == 3){
						threeA = loadImage("3AO.png");
					}
					if (character == 4){
						fourA = loadImage("4AO.png");
					}
					if (character == 5){
						fiveA = loadImage("1BO.png");
					}
					if (character == 6){
						sixA = loadImage("2BO.png");
					}
					if (character == 7){
						sevenA = loadImage("3BO.png");
					}
					if (character == 8){
						eightA = loadImage("4BO.png");
					}
					tick = false
				} else {
					if (character == 1){
						oneA = loadImage("1A.png");
					}
					if (character == 2){
						twoA = loadImage("2A.png");
					}
					if (character == 3){
						threeA = loadImage("3A.png");
					}
					if (character == 4){
						fourA = loadImage("4A.png");
					}
					if (character == 5){
						fiveA = loadImage("1B.png");
					}
					if (character == 6){
						sixA = loadImage("2B.png");
					}
					if (character == 7){
						sevenA = loadImage("3B.png");
					}
					if (character == 8){
						eightA = loadImage("4B.png");
					}
					tick = true
				}
			} else {
				charStart = 73;
				if (setter < 3){
					setter += 1;
				} else {
					setter = 1;
					sceneTicker = 2
				}
			}
  	}
		
		if (setter == 1) {
			title = "Air Quality";
			textSize(32);
			textFont('Georgia');
			fill(82, 7, 125);
			text(title, 440, 35);
			if (charStart >= 73 && charStart <= 390){
					s = 'Abandoned uranium mines have possible affects on air quality in the Cove, Arizona, (Navajo Nation) area.';
					fill(172, 120, 202);
					textSize(32);
					textFont('Georgia');
					text(s, 20, 650, 1000, 200);	
				}
			if (charStart >= 391 && charStart <= 708){
					s = 'Navajo community members have raised concerns about winds potentially transporting dust with radionuclides.';
					fill(172, 120, 202);
					textFont('Georgia');
					textSize(32);
					text(s, 20, 650, 1000, 200);	
				}
			if (charStart >= 709 && charStart <= 1023){
					s = 'EPA has reached enforcement agreements and settlements valued at $1.7 billion to reduce the highest risks of radiation exposure to the Navajo people from abandoned uranium mines.';
					fill(172, 120, 202);
					textFont('Georgia');
					textSize(28);
					text(s, 20, 650, 1000, 200);	
			}
		}
		
		if (setter == 2) {
			disc.play();
			title = "Clean Water Access";
			textSize(32);
			textFont('Georgia');
			fill(82, 7, 125);
			text(title, 380, 35);
			if (charStart >= 73 && charStart <= 390){
					s = 'Today, more than one-third of the Navajo Nation population lacks access to running water or indoor plumbing facilities.';
					fill(172, 120, 202);
					textFont('Georgia');
					textSize(30);
					text(s, 20, 650, 1000, 200);
				}
			if (charStart >= 391 && charStart <= 708){
					s = 'The average American uses 88 gallons per day, but many residents of Navajo Nation have fewer than 10 gallons of water at home at any given time.';
					fill(172, 120, 202);
					textFont('Georgia');
					textSize(29);
					text(s, 20, 650, 1000, 200);	
				}
			if (charStart >= 709 && charStart <= 1023){
					s = 'It would take an investment of more than $700 million to get everyone on the reservation hooked up with safe tap water and basic sanitation.';
					fill(172, 120, 202);
					textFont('Georgia');
					textSize(30);
					text(s, 20, 650, 1000, 200);	
			}
		}
		
		if (setter == 3) {
			title = "Coronavirus";
			textSize(32);
			textFont('Georgia');
			fill(82, 7, 125);
			text(title, 430, 35);
			if (charStart >= 73 && charStart <= 390){
					s = 'In May, Navajo Nation had the highest per capita COVID-19 infection rate in the country.';
					fill(172, 120, 202);
					textFont('Georgia');
					textSize(32);
					text(s, 20, 650, 1000, 200);	
				}
			if (charStart >= 391 && charStart <= 708){
					s = 'As of September 29, there were more than 10,300 reported cases of COVID-19 and 555 confirmed deaths from a population of roughly 175,000.';
					fill(172, 120, 202);
					textFont('Georgia');
					textSize(26);
					text(s, 20, 650, 1000, 200);	
				}
			if (charStart >= 709 && charStart <= 1023){
					s = 'Lack of access to clean water may have exacerbated the spread of the coronavirus and has complicated efforts to curtail it in the Navajo Nation.';
					fill(172, 120, 202);
					textFont('Georgia');
					textSize(29);
					text(s, 20, 650, 1000, 200);	
			}
		}
	}
	
	// Detroit Scene
	if (sceneTicker == 4){
		song.stop();
		imageMode(CENTER)
		home.resize (1024, 768)
		image (det, width/2, height/2, det.width,det.height)
		if (character == 1){
			image (oneA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 2){
			image (twoA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 3){
			image (threeA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 4){
			image (fourA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 5){
			image (fiveA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 6){
			image (sixA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 7){
			image (sevenA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 8){
			image (eightA, charStart, height/1.35 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (keyIsDown(RIGHT_ARROW)) {
			if (charStart <= 1024){
    		charStart += 2;
				if (tick == true){
					if (character == 1){
						oneA = loadImage("1AO.png");
					}
					if (character == 2){
						twoA = loadImage("2AO.png");
					}
					if (character == 3){
						threeA = loadImage("3AO.png");
					}
					if (character == 4){
						fourA = loadImage("4AO.png");
					}
					if (character == 5){
						fiveA = loadImage("1BO.png");
					}
					if (character == 6){
						sixA = loadImage("2BO.png");
					}
					if (character == 7){
						sevenA = loadImage("3BO.png");
					}
					if (character == 8){
						eightA = loadImage("4BO.png");
					}
					tick = false
				} else {
					if (character == 1){
						oneA = loadImage("1A.png");
					}
					if (character == 2){
						twoA = loadImage("2A.png");
					}
					if (character == 3){
						threeA = loadImage("3A.png");
					}
					if (character == 4){
						fourA = loadImage("4A.png");
					}
					if (character == 5){
						fiveA = loadImage("1B.png");
					}
					if (character == 6){
						sixA = loadImage("2B.png");
					}
					if (character == 7){
						sevenA = loadImage("3B.png");
					}
					if (character == 8){
						eightA = loadImage("4B.png");
					}
					tick = true
				}
			} else {
				charStart = 73;
				if (setter < 3){
					setter += 1;
				} else {
					setter = 1;
					sceneTicker = 2
				}
			}
  	}
		if (setter == 1) {
			title = "Air Quality";
			fill(232, 204, 67);
			textFont('Georgia');
			textSize(32);
			text(title, 440, 35);
			if (charStart >= 73 && charStart <= 390){
					s = 'Michigan residents are breathing more unhealthy air year after year, driven by emissions from industrial sources and heat as a result of climate change.';
					fill(250, 231, 135);
					textSize(28);
					textFont('Georgia');
					text(s, 20, 650, 1000, 200);	
				}
			if (charStart >= 391 && charStart <= 708){
					s = 'The Detroit-Warren-Ann Arbor area ranked 40th worst for high ozone days out of the 227 metropolitan areas.';
					fill(250, 231, 135);
					textSize(30);
					textFont('Georgia');
					text(s, 20, 650, 1000, 200);	
				}
			if (charStart >= 709 && charStart <= 1023){
					s = 'Detroit, Wayne County peformed the worst in soot and smog evaluation of all the counties in Michigan respectively. Earning an F in smog and a C in soot.';
					fill(250, 231, 135);
					textSize(28);
					textFont('Georgia');
					text(s, 20, 650, 1000, 200);	
			}
		}
		
		if (setter == 2) {
			title = "Clean Water Access";
			textSize(32);
			fill(232, 204, 67);
			text(title, 380, 35);
			if (charStart >= 73 && charStart <= 390){
					s = 'The city’s water system supplies drinking water to nearly 3.8 million people in the suburbs of Detroit.';
					fill(250, 231, 135);
					textSize(30);
					textFont('Georgia');
					text(s, 20, 650, 1000, 200);
				}
			if (charStart >= 391 && charStart <= 708){
					s = "Michigan declared bankruptcy on behalf of Detroit in 2014, nearly a third of its debt was owed to the city's own water department. The department began shutting off water for residents who were more than $150 behind on their water bills.";
					fill(250, 231, 135);
					textSize(27);
					textFont('Georgia');
					text(s, 20, 640, 1000, 200);	
				}
			if (charStart >= 709 && charStart <= 1023){
					s = 'This affected a majority of Detroiters living within city limits. The shutoffs were an affront to health, safety, and the poor, who were expected to pay water bills that could have been a quarter of their take home pay, while commercial buildings downtown were allowed to let their water bills pile up.';
					fill(250, 231, 135);
					textSize(25);
					textFont('Georgia');
					text(s, 20, 640, 1000, 200);	
			}
		}
		
		if (setter == 3) {
			title = "Coronavirus";
			fill(232, 204, 67);
			textSize(32);
			text(title, 430, 35);
			if (charStart >= 73 && charStart <= 390){
					s = "40 percent of Michigan COVID deaths before Aug. 1 were African Americans, who make up only 13% of the state's population";
					fill(250, 231, 135);
					textSize(30);
					textFont('Georgia');
					text(s, 20, 650, 1000, 200);	
				}
			if (charStart >= 391 && charStart <= 708){
					s = 'Garlin Gilchrist II formed one of the nation’s first state racial disparities task forces on covid-19 back in April. The group focused not only on boosting testing and contact tracing, but also tailoring messages on mask-wearing and other public health precautions to African American communities.';
					fill(250, 231, 135);
					textSize(26);
					textFont('Georgia');
					text(s, 20, 635, 1000, 200);	
				}
			if (charStart >= 709 && charStart <= 1023){
					s = 'Now Black residents make up only 8 percent of cases and 10 percent of deaths.';
					fill(250, 231, 135);
					textSize(32);
					textFont('Georgia');
					text(s, 20, 650, 1000, 200);	
			}
		}
	}
	
	// Glendale Scene
	if (sceneTicker == 5){ 
		song.stop();
		imageMode(CENTER)
		home.resize (1024, 768)
		image (glen, width/2, height/2, glen.width,glen.height)
		if (character == 1){
			image (oneA, charStart, height/1.77 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 2){
			image (twoA, charStart, height/1.77 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 3){
			image (threeA, charStart, height/1.77 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 4){
			image (fourA, charStart, height/1.77 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 5){
			image (fiveA, charStart, height/1.77 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 6){
			image (sixA, charStart, height/1.77 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 7){
			image (sevenA, charStart, height/1.77 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (character == 8){
			image (eightA, charStart, height/1.77 , 0.3 * twoA.width, 0.3 * twoA.height)
		}
		if (keyIsDown(RIGHT_ARROW)) {
			if (charStart <= 1024){
    		charStart += 2;
				if (tick == true){
					if (character == 1){
						oneA = loadImage("1AO.png");
					}
					if (character == 2){
						twoA = loadImage("2AO.png");
					}
					if (character == 3){
						threeA = loadImage("3AO.png");
					}
					if (character == 4){
						fourA = loadImage("4AO.png");
					}
					if (character == 5){
						fiveA = loadImage("1BO.png");
					}
					if (character == 6){
						sixA = loadImage("2BO.png");
					}
					if (character == 7){
						sevenA = loadImage("3BO.png");
					}
					if (character == 8){
						eightA = loadImage("4BO.png");
					}
					tick = false
				} else {
					if (character == 1){
						oneA = loadImage("1A.png");
					}
					if (character == 2){
						twoA = loadImage("2A.png");
					}
					if (character == 3){
						threeA = loadImage("3A.png");
					}
					if (character == 4){
						fourA = loadImage("4A.png");
					}
					if (character == 5){
						fiveA = loadImage("1B.png");
					}
					if (character == 6){
						sixA = loadImage("2B.png");
					}
					if (character == 7){
						sevenA = loadImage("3B.png");
					}
					if (character == 8){
						eightA = loadImage("4B.png");
					}
					tick = true
				}
			} else {
				charStart = 73;
				if (setter < 3){
					setter += 1;
				} else {
					setter = 1;
					sceneTicker = 2
				}
			}
  	}
		if (setter == 1) {
			title = "Air Quality";
			textFont('Georgia');
			textSize(32);
			fill(225, 109, 174);
			text(title, 440, 35);
			if (charStart >= 73 && charStart <= 390){
					s = 'Orange County is home to some of the best air quality in California.';
					fill(243, 185, 218);
					textSize(32);
					textFont('Georgia');
					text(s, 20, 600, 1000, 200);	
				}
			if (charStart >= 391 && charStart <= 708){
					s = 'Orange County has 96.2% less heavy pollutants than the rest of the state.';
					fill(243, 185, 218);
					textSize(32);
					textFont('Georgia');
					text(s, 20, 600, 1000, 200);	
				}
			if (charStart >= 709 && charStart <= 1023){
					s = 'Orange county is covered by the South Coast Air Quality Management District, which provides the accurate measuring and documentation of Southern California air quality.';
					fill(243, 185, 218);
					textSize(29);
					textFont('Georgia');
					text(s, 20, 600, 1000, 200);	
			}
		}
		
		if (setter == 2) {
			title = "Clean Water Access";
			textSize(32);
			fill(225, 109, 174);
			text(title, 380, 35);
			if (charStart >= 73 && charStart <= 390){
					s = 'Orange County has some of the purest tap water in the US.';
					fill(243, 185, 218);
					textSize(32);
					textFont('Georgia');
					text(s, 20, 600, 1000, 200);
				}
			if (charStart >= 391 && charStart <= 708){
					s = "Things weren't always that way: For decades, seawater was seeping into the community's freshwater supply, threatening to expose residents to excess sodium in their taps.";
					fill(243, 185, 218);
					textSize(28);
					textFont('Georgia');
					text(s, 20, 600, 1000, 200);	
				}
			if (charStart >= 709 && charStart <= 1023){
					s = 'In 2008, the county revealed a new system that filtered sewage water through microscopic holes and disinfected it with ultraviolet light to zap contaminants. Proving that prioritizing clean water is possible.';
					fill(243, 185, 218);
					textSize(27);
					textFont('Georgia');
					text(s, 20, 600, 1000, 200);	
			}
		}
		
		if (setter == 3) {
			title = "Coronavirus";
			textSize(32);
			fill(225, 109, 174);
			textFont('Georgia');
			text(title, 430, 35);
			if (charStart >= 73 && charStart <= 390){
					s = 'Orange county has free and easy access to Coronavirus testing and resources.';
					fill(243, 185, 218);
					textSize(32);
					textFont('Georgia');
					text(s, 20, 600, 1000, 200);	
				}
			if (charStart >= 391 && charStart <= 708){
					s = 'Any resident of Orange County can get a saliva test delivered to their door as of December 12th 2020.';
					fill(243, 185, 218);
					textSize(32);
					textFont('Georgia');
					text(s, 20, 600, 1000, 200);	
				}
			if (charStart >= 709 && charStart <= 1023){
					s = 'Housing density in Orange County is half the size as a predominately Black city like Detroit, which makes it easier to socially distance where you live. ';
					fill(243, 185, 218);
					textSize(29);
					textFont('Georgia');
					text(s, 20, 600, 1000, 200);	
			}
		}
		
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




