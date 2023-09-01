/*Add your JavaScript here*/

var austinScore = 0; //store austin score
var nycScore = 0; //store new york city score

var totalQuestions = 0; //store total # of questions

var result = document.getElementById("result");

var restartButton = document.getElementById("restart");

//Store HTML - DOM

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");


//Event Listeners

q1a1.addEventListener("click", nyc);
q1a2.addEventListener("click", austin);

q2a1.addEventListener("click", nyc);
q2a2.addEventListener("click", austin)

q3a1.addEventListener("click", austin);
q3a2.addEventListener("click", nyc);

q4a1.addEventListener("click", nyc);
q4a2.addEventListener("click", austin);

q5a1.addEventListener("click", nyc);
q5a2.addEventListener("click", austin);

q6a1.addEventListener("click", nyc);
q6a2.addEventListener("click", austin);

restartButton.addEventListener("click", restart);

function nyc() {
  nycScore += 1;
  totalQuestions += 1;
  console.log("totalQuestions = " + totalQuestions + " nycScore = " + nycScore);
  if (totalQuestions == 6) {
    console.log("Your quiz is finished! Ready to see your results?")
    updateResult();
  }
}

function austin() {
  austinScore += 1;
  totalQuestions += 1;
  console.log("totalQuestions = " + totalQuestions + " austinScore = " + austinScore);
  
  if (totalQuestions == 6) {
    console.log("Your quiz is finished! Ready to see your results?")
    updateResult();
   }
}


function updateResult() {
  if (nycScore >= 4) {
    result.innerHTML = "Your next vacay is New York City!";
    console.log("Your next vacay is New York City!");
  } else if (austinScore >= 4) {
    result.innerHTML = "Your next vacay is Austin!";
    console.log("Your next vacay is Austin!");
  }
}

function restart() {
  nycScore = 0;
  austinScore = 0;
  totalQuestions = 0;
  result.innerHTML = "Your next vacay is...";
}