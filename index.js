var readlineSync = require("readline-sync");
var score = 0 ;

 var highScores =[
   {
     name : "Swapnali",
     score :3,
   },
   {
     name:"Vijay",
     score:2,
   },
 ]

var questions = [
  {
    question:"where do i live ?",
    answer:"Pune",
    
  },
  {
    question:"where do i work ?",
    answer:"Microsoft",
  },
  {
    question: "My favorite food is ?",
    answer:"chinese",
    
  },
  {
    question:"My favourite superhero would be ?",
    answer:"salman",
    
  },
  {
    question:"My favourite place is ?",
    answer:"Pune",
  },
]

function welcome(){
  var userName = readlineSync.question("what's your name ?");

  console.log("Welcome " + userName + " to do you know Swapnali ?");
}

function play (question, answer)
  {
    var userAnswer = readlineSync.question(question);

    if(userAnswer.toUpperCase()===answer.toUpperCase()){
      console.log("right!");
      score = score +1;
      
    }else{
      console.log("wrong!");
    }

    console.log("current score : ",score);
    console.log("----------");
  }

function game (){
  for (let i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play (currentQuestion.question,currentQuestion.answer) 
  }
}
function showScores() {
  console.log("YAY! your score is: ",score);

  console.log("check out the high scores , if you should be there ping me and i'll update it");

  highScores.map(score=>console.log(score.name, " : ", score.score))
  
}

welcome();
game();
showScores();