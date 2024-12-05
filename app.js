questions = [ 
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
    question: "What does the <em> tag do?",
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

var QuestionBox = document.querySelector('#question-box');
var optionBox = document.querySelector('#options-box');
var submitButton = document.querySelector('#submit-btn');
var Result = document.querySelector('#result');

var currentQuestionIndex = 0;
var Score = 0;

function renderQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  QuestionBox.innerText = currentQuestion.question;

  optionBox.innerHTML =
    '<label><input type="radio" name="option" value="' + currentQuestion.options[0] + '"> ' + currentQuestion.options[0] + '</label><br>' +
    '<label><input type="radio" name="option" value="' + currentQuestion.options[1] + '"> ' + currentQuestion.options[1] + '</label><br>' +
    '<label><input type="radio" name="option" value="' + currentQuestion.options[2] + '"> ' + currentQuestion.options[2] + '</label><br>' +
    '<label><input type="radio" name="option" value="' + currentQuestion.options[3] + '"> ' + currentQuestion.options[3] + '</label><br>';
}

function checkAnswer() {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  if (selectedOption.value === questions[currentQuestionIndex].correctAnswer) {
    Score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  QuestionBox.innerText = "Quiz Completed!!!!";
  optionBox.style.display = "none";
  submitButton.style.display = "none";
  Result.innerText = "Congratulations!!🎉 You Scored " + Score + " out of " + questions.length + "!";
}

submitButton.onclick = function () {
  checkAnswer();
};

renderQuestion();

function html() {
  window.open("htmlpage.html", "_self");
}