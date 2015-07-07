var q1 = {question: "What is the capitol of Nebraska?", choices: "1) Lincoln 2)Wilber 3)Council Bluffs 4)Omaha" ,answer: 4};

var q2 = {question: "What is the name of the UNL football team?", choices:" 1)Longhorns 2)Huskers 3)Sabertooth Tigers 4)Wheat", answer: 2};

var q3 = {question: "What was in the building before OCS?", choices:" 1)InCommon 2)Donut Stop 3)Kinkos 4)Burger King", answer: 1};

var q4 = {question: "What does Donut Stop sell?", choices: " 1)cat posters 2)donuts 3)puzzles 4)smurfs", answer: 2};

var q5 = {question: "What kind of food is served at Bohemian Cafe?", choices:" 1)German 2)Mexican 3)Czech 4)Polish", answer: 3};

var array= [q1, q2, q3, q4, q5];
var arrayLength = array.length;
var score = 0;
var qNumber = 0;


document.getElementById("question").innerText = array[qNumber].question;
document.getElementById("choices").innerText = array[qNumber].choices;
document.getElementById("submitter").onclick = process_answer_submission;
document.getElementById("next").onclick = next_question;


function given_answer(){
  return document.getElementById("answer").value;
}

function is_correct_answer(answer_text){
  if (answer_text == array[qNumber].answer){
    return true;
  } else {
   return false;
  }
}

function update_question_result(correct){
  if (correct){
    score++;
    return document.getElementById("question_result").innerText = "Success!";
  } else {
   return document.getElementById("question_result").innerText = "Wrong!";
  }
}

function process_answer_submission(){
  var user_answer = given_answer();
   update_question_result(is_correct_answer(user_answer));
}

function next_question(){
  qNumber++
  if (qNumber < arrayLength){
    document.getElementById("question").innerText = array[qNumber].question;
    document.getElementById("choices").innerText = array[qNumber].choices;
    document.getElementById("submitter").onclick = process_answer_submission;
    document.getElementById("next").onclick = next_question;
    document.getElementById("answer").value = null;
    document.getElementById("question_result").innerText = "";
  } else {
    var percent= (score/5) * 100;

    document.getElementById("total_result").innerText = ("You answered " + score + " of 5 questions correctly, good for " + percent + "%!");
  }
}

