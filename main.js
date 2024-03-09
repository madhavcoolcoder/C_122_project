x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
speak_data = "";
to_number = "";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

  to_number = Number(content);

  if(Number.isInteger(to_number))
  {
    draw_apple = "set";
  } else
  {
    draw_apple = "The speech has not recognized a number"
  }
}

function preload()
{
  img = loadImage('apple.png')
}

function setup() {
  screen_width = window.innerWidth;
  canvas = createCanvas(900, 600);
  canvas.center();
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
  for(var i = 1; i <= to_number; i++)
  {
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    image(apple, x, y, 50, 50);
  }
  speak();
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
