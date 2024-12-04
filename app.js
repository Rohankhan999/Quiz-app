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
    question: "Which tag is used to define an image in HTML?",
    options: ["img", "image", "src", "picture"],
    correctAnswer: "img"
  },
  {
    question: "Which tag is used to create a dropdown list?",
    options: ["select", "dropdown", "list", "options"],
    correctAnswer: "select"
  },
  {
    question: "Which attribute is used to specify inline styles in HTML?",
    options: ["style", "css", "class", "id"],
    correctAnswer: "style"
  },
  {
    question: "Which tag is used to define a division or section in HTML?",
    options: ["div", "section", "span", "area"],
    correctAnswer: "div"
  },
  {
    question: "Which tag is used to define metadata in the HTML document?",
    options: ["meta", "head", "link", "title"],
    correctAnswer: "meta"
  },
  {
    question: "Which tag is used to create a line break in HTML?",
    options: ["br", "break", "lb", "line"],
    correctAnswer: "br"
  },
  {
    question: "Which tag is used to define the title of a document?",
    options: ["title", "head", "header", "h1"],
    correctAnswer: "title"
  },
  {
    question: "Which attribute is used to open a link in a new tab?",
    options: ["target='_blank'", "href='_newtab'", "link='_new'", "open='_blank'"],
    correctAnswer: "target='_blank'"
  },
  {
    question: "Which HTML element is used to display preformatted text?",
    options: ["pre", "code", "text", "format"],
    correctAnswer: "pre"
  },
  {
    question: "Which tag is used to create an unordered list?",
    options: ["ul", "ol", "li", "list"],
    correctAnswer: "ul"
  },
  {
    question: "Which tag is used to create a checkbox in a form?",
    options: ["input type='checkbox'", "checkbox", "check", "input-box"],
    correctAnswer: "input type='checkbox'"
  },
  {
    question: "What is the default alignment of text in an HTML paragraph?",
    options: ["left", "center", "right", "justify"],
    correctAnswer: "left"
  },
  {
    question: "Which tag is used to create a numbered list?",
    options: ["ol", "ul", "list", "li"],
    correctAnswer: "ol"
  },
  {
    question: "What does the `<em>` tag do?",
    options: ["Italicize text", "Bold text", "Underline text", "Highlight text"],
    correctAnswer: "Italicize text"
  },
  {
    question: "Which tag is used to display a horizontal line?",
    options: ["hr", "line", "hl", "break"],
    correctAnswer: "hr"
  },
  {
    question: "Which attribute is used to specify an alternate text for an image?",
    options: ["alt", "title", "text", "description"],
    correctAnswer: "alt"
  },
  {
    question: "Which tag is used to define a navigation menu?",
    options: ["nav", "menu", "ul", "link"],
    correctAnswer: "nav"
  },
  {
    question: "Which HTML element is used for the largest heading?",
    options: ["h1", "header", "head", "h6"],
    correctAnswer: "h1"
  },

  {
    question: "Which attribute is used to define the language of the document?",
    options: ["lang", "language", "locale", "doc-lang"],
    correctAnswer: "lang"
  },
  {
    question: "Which tag is used to define a blockquote?",
    options: ["blockquote", "quote", "bq", "text"],
    correctAnswer: "blockquote"
  },
  {
    question: "Which HTML element is used to define strong (bold) text?",
    options: ["strong", "b", "bold", "em"],
    correctAnswer: "strong"
  },
  {
    question: "Which HTML element is used to embed audio files?",
    options: ["audio", "sound", "media", "music"],
    correctAnswer: "audio"
  },
  {
    question: "Which tag is used to define a footer in HTML?",
    options: ["footer", "bottom", "foot", "end"],
    correctAnswer: "footer"
  }
];

var questionBox = document.getElementById("question-box");
var optionsBox = document.getElementById("options-box");
var resultBox = document.getElementById("result");
var submitBtn = document.getElementById("submit-btn");

var currentQuestionIndex = 0;
var score = 0;

// Render the question
function renderQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionBox.textContent = currentQuestion.question;

  // Static HTML for options
  optionsBox.innerHTML =
    '<label><input type="radio" name="option" value="' + currentQuestion.options[0] + '"> ' + currentQuestion.options[0] + '</label><br>' +
    '<label><input type="radio" name="option" value="' + currentQuestion.options[1] + '"> ' + currentQuestion.options[1] + '</label><br>' +
    '<label><input type="radio" name="option" value="' + currentQuestion.options[2] + '"> ' + currentQuestion.options[2] + '</label><br>' +
    '<label><input type="radio" name="option" value="' + currentQuestion.options[3] + '"> ' + currentQuestion.options[3] + '</label><br>';
}

// Check the answer
function checkAnswer() {
  var selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  if (selectedOption.value === questions[currentQuestionIndex].correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

// Show the result
function showResult() {
  questionBox.textContent = "Quiz Complete!";
  optionsBox.style.display = "none";
  submitBtn.style.display = "none";
  resultBox.textContent = "You scored " + score + " out of " + questions.length + "!";
}

// Manually attach the function to the button in the HTML
submitBtn.onclick = function () {
  checkAnswer();
};

// Initialize the quiz
renderQuestion();

function html() {
  window.open("htmlpage.html", "_self");
}
