x = 0
y = 0
var drawCircle = ''
var drawRect = ''
var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
function setup() {
    canvas = createCanvas(900, 600);
}
function start() {
    document.getElementById("status").innerHTML = "O sistema está ouvindo. Porfavor, fale."
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "A fala foi reconhecida como: " + content;
    if (content == "círculo") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Desenhando um círculo ";
        drawCircle = "set";
    }
    if (content == "retângulo") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Desenhando um retângulo ";
        drawRect = "set"
    }
}
function draw() {
    if (drawRect == "set") {
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "Retângulo desenhado ";
        drawRect = "";
    }
    if (drawCircle == "set") {
        radius = Math.floor(Math.random() * 100)
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Círculo desenhado ";
        drawCircle = "";
    }
}
