var starImg,bgImg;
var star, starBody;
var imgfada, fada, vozFada
var world, star,starBody
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
    imgfada = loadAnimation("fairyImage1,fairyImage2");
    vozFada = (JoyMusic);
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);


    vozFada.play();
    //escrever código para tocar o som vozFada 

    fada = createSprite(400,375);
    fada.addAnimation(imgfada);
    //criar sprite de fada e adicionar animação para fada

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

if(keyDown("UP_ARROW")){
    menino.y = menino.y -7; } 
  
  if(keyDown("DOWN_ARROW")){
    menino.y = menino.y +7; }
  }