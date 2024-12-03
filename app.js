document.addEventListener("DOMContentLoaded", () => {
  var questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Machine Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Which HTML tag is used to define a hyperlink?",
      options: ["a", "link", "href", "hyperlink"],
      correctAnswer: "a"
    },
    {
      question: "Which tag is used to create a table in HTML?",
      options: ["table", "tbl", "tab", "tr"],
      correctAnswer: "table"
    },
    {
      question: "Which tag is used to define a list item in an ordered list?",
      options: ["li", "ul", "ol", "item"],
      correctAnswer: "li"
    },
    {
      question: "Which tag is used to define the largest heading in HTML?",
      options: ["h1", "head", "header", "heading"],
      correctAnswer: "h1"
    },
    {
      question: "Which attribute is used to specify an image's URL in an img tag?",
      options: ["src", "href", "link", "alt"],
      correctAnswer: "src"
    },
    {
      question: "Which tag is used to define a paragraph in HTML?",
      options: ["p", "para", "pg", "text"],
      correctAnswer: "p"
    },
    {
      question: "Which HTML element is used to create a form?",
      options: ["form", "input", "field", "formfield"],
      correctAnswer: "form"
    },
    {
      question: "What is the purpose of the title tag in HTML?",
      options: ["To specify the title of the document", "To add a header", "To create a title on the page", "To add a subtitle"],
      correctAnswer: "To specify the title of the document"
    },
    {
      question: "Which tag is used to embed a video in HTML?",
      options: ["video", "media", "embed", "movie"],
      correctAnswer: "video"
    }
  ];

  var questionBox = document.getElementById("question-box");
  var optionsBox = document.getElementById("options-box");
  var submitBtn = document.getElementById("submit-btn");
  var resultBox = document.getElementById("result");

  var currentQuestionIndex = 0;
  var score = 0;

  function renderQuestion() {
    questionBox.innerHTML = "";
    optionsBox.innerHTML = "";

    var Question = questions[currentQuestionIndex];
    questionBox.textContent = Question.question;

    for (var i = 0; i < Question.options.length; i++) {
      var option = Question.options[i];
      optionsBox.innerHTML +=
        '<label><input type="radio" name="option" value="' + option + '"> ' + option + '</label><br>';
    }
  }

  function checkAnswer() {
    var selectedOption = document.querySelector('input[name="option"]:checked');

    // If no option is selected
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }

    // Check if the selected option is correct
    if (selectedOption.value === questions[currentQuestionIndex].correctAnswer) {
      score++;
    }

    // Move to the next question
    currentQuestionIndex++;

    // If there are more questions, render the next question
    if (currentQuestionIndex < questions.length) {
      renderQuestion();
    } else {
      // Otherwise, show the final result
      showResult();
    }
  }

  // Function to show the result
  function showResult() {
    questionBox.style.display = "none";
    optionsBox.style.display = "none";
    submitBtn.style.display = "none";
    resultBox.innerHTML = "You scored " + score + " out of " + questions.length + "!";
  }

  // Add event listener to the submit button
  submitBtn.addEventListener("click", checkAnswer);

  // Initialize the quiz
  renderQuestion();
});
