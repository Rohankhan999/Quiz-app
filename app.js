var NAME = prompt('Enter your Name!')
document.querySelector('#prompt').innerHTML = "Hello " + " " + NAME.toUpperCase() + " " +  "Welcome!"
function Html() {
    // window.location.href = 'htmlpage.html'
    window.open('htmlpage.html')
}
var Quiz = [
    {
        question : "abc?",
        answer : ["a","b","c","d"],
        correctAnswer : "b"
    },
    {
        question : "abc?",
        answer : ["a","b","c","d"],
        correctAnswer : "b"
    },
]
Quiz.innerHTML = `<h1>${Quiz}<h1>` +
"<br>"

