var fundo
var gato
var rato


function preload() {
    //carregue as imagens aqui
    fundo = loadImage("images/garden.png");
    gatoimg = loadImage("images/cat1.png");
    ratoimg = loadImage("images/mouse1.png");
    ratoani = loadAnimation("images/mouse2.png","image/mouse3.png")
    gatoani = loadAnimation("images/cat2.png","image/cat3.png")
    gatofinal = loadAnimation("images/cat4.png")
    ratofinal = loadAnimation("images/mouse4.png")
    
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato = createSprite(870,600);
    gato.addAnimation("gatoSentado", gatoimg);
    gato.scale = 0.2
    
    rato = createSprite(100,600)
    rato = addAnimation("ratoQueijo", ratoimg)
    rato.scale = 0.2
}

function draw() {

    background(255);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.velocityX = 0
       cat.addAnimation("ultimaImagemGato", gatofinal)
       cat.changeAnimation("ultimaImagemGato")
       cat.x = 300
       cat.scale = 0.2

       rato.velocityX = 0
       rato.addAnimation("ultimaImagemRato", ratofinal)
       rato.changeAnimation("ultimaImagemRato")
       rato.x = 300
       rato.scale = 0.2



    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
  if(KeyCode === LEFT_ARROW){
    rato.addAnimation("ratoProvocando", ratoani);
    rato.changeAnimation("ratoProvocando");
    rato.frameDeLay = 25;

    cat.velocity = -5
    gato.addAnimation("gatoAndando", gatoani)
    rato.changeAnimation("gatoAndando")
  }

}
