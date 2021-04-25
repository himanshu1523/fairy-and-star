var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;
var music;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg= loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	music= loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
      music.play();
	//create fairy sprite and add animation for fairy
      fairy=createSprite(100,550,10,10);
	  fairy.addAnimation("fairy_flying",fairyImg);
	  fairy.scale=0.2;
	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);


  //write code to stop star in the hand of fairy
 if(star.y > 550 && star.position.y > 550){
   Matter.Body.setStatic(starBody,true);
 }

 if(keyCode === RIGHT_ARROW){
	fairy.velocityX=6;
	}

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
 
}
