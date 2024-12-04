var questions = [
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets"
      ],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: ["background-color", "color", "bg-color", "background"],
      correctAnswer: "background-color"
    },
    {
      question: "Which property is used to change the text color?",
      options: ["color", "text-color", "font-color", "text"],
      correctAnswer: "color"
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-size", "size", "font-style"],
      correctAnswer: "font-size"
    },
    {
      question: "What is the default position of an HTML element?",
      options: ["static", "relative", "absolute", "fixed"],
      correctAnswer: "static"
    },
    {
      question: "Which property is used to align text in CSS?",
      options: ["text-align", "align", "text", "align-text"],
      correctAnswer: "text-align"
    },
    {
      question: "Which CSS property adds space inside the element border?",
      options: ["padding", "margin", "border", "spacing"],
      correctAnswer: "padding"
    },
    {
      question: "Which property is used to make the text bold in CSS?",
      options: ["font-weight", "text-style", "bold", "font-bold"],
      correctAnswer: "font-weight"
    },
    {
      question: "What is the purpose of the z-index property in CSS?",
      options: [
        "Specifies the stack order of elements",
        "Specifies transparency",
        "Specifies background color",
        "Specifies font size"
      ],
      correctAnswer: "Specifies the stack order of elements"
    },
    {
      question: "Which CSS property is used to add a shadow to text?",
      options: ["text-shadow", "shadow", "font-shadow", "box-shadow"],
      correctAnswer: "text-shadow"
    },
    {
      question: "What is the correct syntax for an ID selector in CSS?",
      options: ["#id", ".id", "id", "id()"],
      correctAnswer: "#id"
    },
    {
      question: "Which property changes the speed of transitions in CSS?",
      options: ["transition-duration", "animation-speed", "duration", "speed"],
      correctAnswer: "transition-duration"
    },
    {
      question: "Which property is used to set the width of an element?",
      options: ["width", "size", "element-width", "container-width"],
      correctAnswer: "width"
    },
    {
      question: "What does the `:hover` pseudo-class do?",
      options: [
        "Applies styles when the mouse is over an element",
        "Applies styles when an element is active",
        "Applies styles when an element is clicked",
        "Applies styles when an element loses focus"
      ],
      correctAnswer: "Applies styles when the mouse is over an element"
    },
    {
      question: "Which property specifies the space between lines of text?",
      options: ["line-height", "spacing", "line-spacing", "text-height"],
      correctAnswer: "line-height"
    },
    {
      question: "Which property specifies whether an element is visible or hidden?",
      options: ["visibility", "display", "hidden", "overflow"],
      correctAnswer: "visibility"
    },
    {
      question: "Which property is used to create rounded corners?",
      options: ["border-radius", "corner-radius", "border-corner", "radius"],
      correctAnswer: "border-radius"
    },
    {
      question: "Which property controls the stacking order of elements?",
      options: ["z-index", "position", "order", "stack"],
      correctAnswer: "z-index"
    },
    {
      question: "Which value is used for an element to take up the full width of its container?",
      options: ["100%", "auto", "inherit", "stretch"],
      correctAnswer: "100%"
    },
    {
      question: "Which property is used to specify the style of the list item marker?",
      options: ["list-style-type", "marker-type", "bullet-type", "list-marker"],
      correctAnswer: "list-style-type"
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
  
  function css() {
    window.open("csspage.html", "_self");
  }
  