const body = document.querySelector("body");
const main = document.createElement("div");
main.classList.add("main-container");
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.paddingTop = "50px";

const box = document.createElement("div");
box.classList.add("box");
box.style.display = "flex";
box.style.flexDirection = "column";
box.style.alignItems = "center";
box.style.width = "900px";
box.style.minHeight = "600px";
box.style.backgroundColor = "peachpuff";

body.appendChild(main);
main.appendChild(box);

let currentQuestion = 0;
let arrayOfQuestionsAsked = [];
let questionCount = 0;
let totalPoints = 0;
let hightsPossiblePoints = 4;

function setUp() {
  addMainTitle();
  addStartButton();
}

function reSetQuiz() {
  currentQuestion = 0;
  arrayOfQuestionsAsked = [];
  questionCount = 0;
  totalPoints = 0;
  deleteQuizDone();
  deleteFinalPoints();
  deleteReSetButton();
  setUp();
}

function getQuestion() {
  if (questionCount === idioms.length) {
    /**If quiz is done */
    addQuizDone();
    addFinalPoints();
    addReSetButton();
  } else {
    /**If quiz continues */
    questionCount++;
    const randomNumber = getRamdomNumber();
    const question = getIdiom(randomNumber);
    arrayOfQuestionsAsked.push(question.innerText);
    ul = getListOfAnswers(randomNumber);
    box.appendChild(question);
    box.appendChild(ul);
    addPulsatingDot(randomNumber);
  }
}

function startGame() {
  removeElements(document.querySelectorAll(".title"));
  getQuestion();
}

function getListOfAnswers(randomNumber) {
  const ul = document.createElement("ul");
  ul.innerHTML = "";
  idioms[randomNumber].answers.forEach(a => {
    const li = document.createElement("li");
    li.innerText = `${a.answer}`;
    /**Add event listener to list item */
    li.addEventListener("click", () => {
      if (a.answer.valueOf() === idioms[randomNumber].english) {
        clicksRightAnswer();
      } else {
        if (pointDeduction()) {
          /**If wrong answer is already rendered => delete it before adding it again */
          deleteWrongAnswer();
          addWrongAnswer(event);
        } else {
          addWrongAnswer(event);
          deletePulsatingDot();
        }
      }
    });

    ul.appendChild(li);
  });

  // makes order of li random
  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[(Math.random() * i) | 0]);
  }

  return ul;
}

function clicksRightAnswer() {
  deletePulsatingDot();
  addCorrectMessage();
  addButton();
  removeAnswerClickEvent();
  totalPoints += possiblePoints();
  deleteWrongAnswer();
}

window.onload = function() {
  setUp();
};
