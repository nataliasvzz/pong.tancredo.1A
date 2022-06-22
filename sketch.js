//variáveis da bolinha 
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha 
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5

function setup() {
  createCanvas(600, 400)
}

function draw() {
    background(0);
    mostraBolinha()
    movimentaBolinha();
 vereficaColisaoBorda();
 rect(5, 150, 10, 90)
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function vereficaColisaoBorda(){
  if (xBolinha + raio > width || 
        xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || 
        yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}