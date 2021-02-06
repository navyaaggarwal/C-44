var text;
var gameState = "start";
var level1Button, level2Button, level3Button, level4Button, playButton;

function setup() {
	createCanvas(600,600);
	
	if(gameState == "start"){
		background("yellow");
		creatingPlayButton();

		playButton.mousePressed(()=>{
			playButton.hide();
			text.hide();
			
			creatingLevelButtons();
			level1ButtonPressed();
			level2ButtonPressed();
			level3ButtonPressed();
			level4ButtonPressed();
		})
	}
}

function creatingPlayButton() {
	text = createElement("h2");
	text.html("Space Jumpers");
	text.position(200,250)

	playButton = createButton('Play');
	playButton.position(250,300);

} 

function creatingLevelButtons(){
	level1Button = createButton('Level 1');
	level1Button.position(200,300);

	level2Button = createButton('Level 2');
	level2Button.position(300,300);

	level3Button = createButton('Level 3');
	level3Button.position(200,400);

	level4Button = createButton('Level 4');
	level4Button.position(300,400);
}

function level1ButtonPressed() {
	level1Button.mousePressed(()=>{
		background("pink");
		level1Button.hide();
		level2Button.hide();
		level3Button.hide();
		level4Button.hide();
	})
}

function level2ButtonPressed() {
	level2Button.mousePressed(()=>{
		background("green");
		level1Button.hide();
		level2Button.hide();
		level3Button.hide();
		level4Button.hide();
	})
}

function level3ButtonPressed() {
	level3Button.mousePressed(()=>{
		background("blue");
		level1Button.hide();
		level2Button.hide();
		level3Button.hide();
		level4Button.hide();
	})
}

function level4ButtonPressed() {
	level4Button.mousePressed(()=>{
		background("red");
		level1Button.hide();
		level2Button.hide();
		level3Button.hide();
		level4Button.hide();
	})
}
function draw() {
	
	
}