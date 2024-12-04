var questions = [ 
    {
      question: "What does JavaScript primarily run on?",
      options: [
        "Browser",
        "Operating System",
        "Web Server",
        "Database"
      ],
      correctAnswer: "Browser"
    },
    {
      question: "Which data type is not supported in JavaScript?",
      options: ["String", "Number", "Boolean", "Tuple"],
      correctAnswer: "Tuple"
    },
    {
      question: "Which symbol is used for single-line comments in JavaScript?",
      options: ["//", "/* */", "#", "<!-- -->"],
      correctAnswer: "//"
    },
    {
      question: "Which method is used to parse a string to an integer in JavaScript?",
      options: ["parseInt", "parseString", "parseInteger", "convertToInt"],
      correctAnswer: "parseInt"
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "Which method is used to add an element to the end of an array?",
      options: ["push", "pop", "shift", "unshift"],
      correctAnswer: "push"
    },
    {
      question: "What will `typeof NaN` return in JavaScript?",
      options: ["Number", "NaN", "String", "Undefined"],
      correctAnswer: "Number"
    },
    {
      question: "Which function is used to execute a piece of code after a specific time interval?",
      options: ["setTimeout", "setInterval", "delay", "executeAfter"],
      correctAnswer: "setTimeout"
    },
    {
      question: "What is the result of `Boolean(0)` in JavaScript?",
      options: ["false", "true", "undefined", "null"],
      correctAnswer: "false"
    },
    {
      question: "What does `===` signify in JavaScript?",
      options: [
        "Strict equality comparison",
        "Assignment operator",
        "Loose equality comparison",
        "Not equal"
      ],
      correctAnswer: "Strict equality comparison"
    },
    {
      question: "Which method is used to convert a JSON object to a string?",
      options: ["JSON.stringify", "JSON.parse", "JSON.toString", "Stringify"],
      correctAnswer: "JSON.stringify"
    },
    {
      question: "How do you declare a function in JavaScript?",
      options: [
        "function myFunction()",
        "func myFunction()",
        "declare myFunction()",
        "define myFunction()"
      ],
      correctAnswer: "function myFunction()"
    },
    {
      question: "What is `null` in JavaScript?",
      options: [
        "An object",
        "A data type",
        "An undefined value",
        "A function"
      ],
      correctAnswer: "An object"
    },
    {
      question: "Which loop is guaranteed to execute at least once?",
      options: ["do...while", "while", "for", "forEach"],
      correctAnswer: "do...while"
    },
    {
      question: "What is the purpose of the `break` statement in a loop?",
      options: [
        "Exits the loop",
        "Skips to the next iteration",
        "Stops script execution",
        "Restarts the loop"
      ],
      correctAnswer: "Exits the loop"
    },
    {
      question: "Which operator is used for exponentiation in JavaScript?",
      options: ["**", "^", "exp", "pow"],
      correctAnswer: "**"
    },
    {
      question: "Which method is used to remove the last element from an array?",
      options: ["pop", "shift", "unshift", "slice"],
      correctAnswer: "pop"
    },
    {
      question: "What does the `this` keyword refer to in JavaScript?",
      options: [
        "The current object",
        "The global object",
        "The parent object",
        "Depends on context"
      ],
      correctAnswer: "Depends on context"
    },
    {
      question: "Which method is used to add event listeners in JavaScript?",
      options: ["addEventListener", "attachEvent", "bindEvent", "onEvent"],
      correctAnswer: "addEventListener"
    },
    {
      question: "What does `isNaN()` function check?",
      options: [
        "If a value is NaN",
        "If a value is null",
        "If a value is undefined",
        "If a value is empty"
      ],
      correctAnswer: "If a value is NaN"
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
  
  function js() {
    window.open("js.html", "_self");
  }
  