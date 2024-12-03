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
