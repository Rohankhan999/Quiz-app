// Prompt for user's name
var NAME = prompt("Enter your Name!");
document.querySelector('#prompt').innerHTML = "Welcome " + NAME.toUpperCase() + " to";


function Html() {

    window.open('htmlpage.html', '_self'); 
}
const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Machine Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Which HTML tag is used to define a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<hyperlink>"],
      correctAnswer: "<a>"
    },
    {
      question: "Which tag is used to create a table in HTML?",
      options: ["<table>", "<tbl>", "<tab>", "<tr>"],
      correctAnswer: "<table>"
    },
    {
      question: "Which tag is used to define a list item in an ordered list?",
      options: ["<li>", "<ul>", "<ol>", "<item>"],
      correctAnswer: "<li>"
    },
    {
      question: "Which tag is used to define the largest heading in HTML?",
      options: ["<h1>", "<head>", "<header>", "<heading>"],
      correctAnswer: "<h1>"
    },
    {
      question: "Which attribute is used to specify an image's URL in an <img> tag?",
      options: ["src", "href", "link", "alt"],
      correctAnswer: "src"
    },
    {
      question: "Which tag is used to define a paragraph in HTML?",
      options: ["<p>", "<para>", "<pg>", "<text>"],
      correctAnswer: "<p>"
    },
    {
      question: "Which HTML element is used to create a form?",
      options: ["<form>", "<input>", "<field>", "<formfield>"],
      correctAnswer: "<form>"
    },
    {
      question: "What is the purpose of the <title> tag in HTML?",
      options: ["To specify the title of the document", "To add a header", "To create a title on the page", "To add a subtitle"],
      correctAnswer: "To specify the title of the document"
    },
    {
      question: "Which tag is used to embed a video in HTML?",
      options: ["<video>", "<media>", "<embed>", "<movie>"],
      correctAnswer: "<video>"
    }
    
  ];

  var quizSection = document.querySelector('.quiz-container')
  var questionsHTML = "";
  for (var i = 0 ; i < questions.length ; i++){
    var Question = questions[i];
    console.log(Question);  
    
  }
// // Quiz data array
// var Quiz = [
//     {
//         question: "What is 2 + 2?",
//         answer: ["2", "3", "4", "5"],
//         correctAnswer: "4"
//     },
//     {
//         question: "What is the capital of France?",
//         answer: ["Berlin", "Paris", "Rome", "Madrid"],
//         correctAnswer: "Paris"
//     }
// ];

// // Selecting the quiz section container
// var quizSection = document.querySelector('.quizSection');
// var QuizHTML = "";

// // Generating HTML for the quiz
// for (let i = 0; i < Quiz.length; i++) {
//     var Question = Quiz[i];
//     QuizHTML += `
//     <div class="question">
//         <p>${i + 1}. ${Question.question}</p>`;
//     for (var j = 0; j < Question.answer.length; j++) {
//         QuizHTML += `
//         <label>
//             <input type="radio" name="question${i}" value="${Question.answer[j]}">
//             ${Question.answer[j]}
//         </label><br>`;
//     }
//     QuizHTML += `</div>`;
// }x  

// // Displaying the quiz in the container
// quizSection.innerHTML = QuizHTML;

// // Add functionality to the submit button
// const submitBtn = document.getElementById("submit-btn");
// submitBtn.addEventListener("click", function () {
//     let score = 0;

//     // Loop through questions to calculate the score
//     for (let i = 0; i < Quiz.length; i++) {
//         const userAnswer = document.querySelector(`input[name="question${i}"]:checked`);
//         if (userAnswer && userAnswer.value === Quiz[i].correctAnswer) {
//             score++;
//         }
//     }

//     // Display the result
//     document.getElementById("result").innerHTML = `<p class="result">You scored ${score} out of ${Quiz.length}!</p>`;
// });
