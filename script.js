function startGame() {
  document.getElementById("score").innerHTML = points;
  document.body.addEventListener("keyup", bodyKeyUp);
  document.getElementById("buttonRoll").addEventListener("click", buttonRoll);
}
let myArray = [
  "img/7.png",
  "img/Bell.png",
  "img/Cherry.png",
  "img/Diamond.png",
  "img/HorseShoe.png",
  "img/Strawberry.png",
  "img/Lemon.png",
  "img/BlackGrapes.png",
  "img/Bar.png",
  "img/4LeafClover.png",
  "img/Watermelon.png",
  "img/Plum.png",
];
var text = document.getElementById("wonText");
let points = 100;
var nummers = [];
function roll() {
  document.getElementById("knopje1").addEventListener("click", holdWheel1);
  document.getElementById("knopje2").addEventListener("click", holdWheel2);
  document.getElementById("knopje3").addEventListener("click", holdWheel3);
  document.getElementById("knopje1").style.backgroundColor = "white";
  document.getElementById("knopje2").style.backgroundColor = "white";
  document.getElementById("knopje3").style.backgroundColor = "white";

  var text = document.getElementById("wonText");
  text.innerHTML = "";

  if (points == 10) {
    points -= 10;
    var text = document.getElementById("wonText");
    text.innerHTML = "Your wallet is empty you can't spin the wheels anymore";
    document
      .getElementById("buttonRoll")
      .removeEventListener("click", buttonRoll);
    document.body.removeEventListener("keyup", bodyKeyUp);
  } else {
    points -= 10;
  }
  document.getElementById("score").innerHTML = points;
  let myArray = [
    "img/7.png",
    "img/Bell.png",
    "img/Cherry.png",
    "img/Diamond.png",
    "img/HorseShoe.png",
    "img/Strawberry.png",
    "img/Lemon.png",
    "img/BlackGrapes.png",
    "img/Bar.png",
    "img/4LeafClover.png",
    "img/Watermelon.png",
    "img/Plum.png",
  ];

  nummers = showImage(myArray);

  // Nieuwe functie controleer of gewonnen is
  hasWon(nummers, text);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max + 1));
}
var hold1 = false;
function holdWheel1() {
  document.getElementById("knopje1").style.backgroundColor = "red";
  document.getElementById("knopje1").removeEventListener("click", holdWheel1);
  hold1 = true;
}
var hold2 = false;
function holdWheel2() {
  document.getElementById("knopje2").style.backgroundColor = "red";
  document.getElementById("knopje2").removeEventListener("click", holdWheel2);
  hold2 = true;
}
var hold3 = false;
function holdWheel3() {
  document.getElementById("knopje3").style.backgroundColor = "red";
  document.getElementById("knopje3").removeEventListener("click", holdWheel3);
  hold3 = true;
}

function showImage(myArray) {
  var grid = document.getElementsByClassName("images");
  for (var i = 0; i < grid.length; i++) {
    
    let randnr = getRndInteger(0, myArray.length - 1);

    if (i == 0 && hold1 != true) {
      grid[0].src = myArray[randnr];
      nummers[0] = randnr;
    }
    if (i == 0 && hold1 == true) {
      hold1 = false;
    }
      
    if (i == 1 && hold2 != true) {
      grid[1].src = myArray[randnr];
      nummers[1] = randnr;
    }
    if (i == 1 && hold2 == true) {
      hold2 = false;
    }
    

    if (i == 2 && hold3 != true) {
      grid[2].src = myArray[randnr];
      nummers[2] = randnr;
    }
    if (i == 2 && hold3 == true) {
      hold3 = false;
    }
    // Hier je random nummer verkrijgen
  } // /for
  return nummers;
}

function hasWon(nummers, text) {
  if (nummers[0] == nummers[1] && nummers[1] == nummers[2]) {
    points += 250;
    document.getElementById("score").innerHTML = points;
    text.innerHTML = "You have won 250 points";
  } else if (nummers[1] == nummers[2]) {
    text.innerHTML = "You have won 20 points";
    points += 20;
    document.getElementById("score").innerHTML = points;
  } else if (nummers[0] == nummers[1]) {
    var text = document.getElementById("wonText");
    text.innerHTML = "You have won 20 points";
    points += 20;
    document.getElementById("score").innerHTML = points;
  }
}
const selceted = 0;
const label = myArray[0];
let pointSystem = [250, 200, 20, 175, 150, 100, 20, 20, 250, 200, 20, 20];
function addPoints() {
  switch (selceted) {
    case 0:
      points += 15 * multiplier;
      break;
    case 2:
      points += 5;
      break;
    case 3:
      points += 3;
      break;
  }
}

function bodyKeyUp(e) {
  if (e.code == "KeyA") {
    roll();
    //!fix double firing bug
  }
}

function buttonRoll() {
  roll();
}
