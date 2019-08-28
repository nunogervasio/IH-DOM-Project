/********************************** */

/**
 * https://www.fluentu.com/blog/german/common-german-idioms/
 */
const main = document.querySelector(".main-container");
const box = document.querySelector(".box");

let currentQuestion = 0;
let arrayOfQuestionsAsked = [];
let questionCount = 0;
let hightsPossiblePoints = 4;
let totalPoints = 0;

function reSetQuiz() {
  currentQuestion = 0;
  arrayOfQuestionsAsked = [];
  questionCount = 0;
  totalPoints = 0;
  deleteQuizDone();
  deleteFinalPoints();
  deleteReSetButton();
  getQuestion();
}

function getQuestion() {
  if (questionCount === idioms.length) {
    // ADD DELETES
    addQuizDone();
    addFinalPoints();
    addReSetButton();
  } else {
    questionCount++;
    console.log(`arrayOfQuestionsAsked: `, arrayOfQuestionsAsked);
    const randomNumber = getRamdomNumber();
    const question = getIdiom(randomNumber);
    arrayOfQuestionsAsked.push(question.innerText);

    const ul = document.createElement("ul");
    ul.innerHTML = "";

    idioms[randomNumber].answers.forEach(a => {
      const li = document.createElement("li");
      li.innerText = `${a.answer}`;
      li.addEventListener("click", () => {
        if (a.answer.valueOf() === idioms[randomNumber].english) {
          addCorrectMessage();
          addButton();
          removeAnswerClickEvent();
          totalPoints += possiblePoints();
          deleteWrongAnswer();
        } else {
          if (pointDeduction()) {
            deleteWrongAnswer();
          }
          addWrongAnswer(event);
        }
      });

      ul.appendChild(li);
    });
    // makes order of li random
    for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[(Math.random() * i) | 0]);
    }

    // const questionWrapper = document.querySelector(".question-wrapper");
    box.appendChild(question);
    box.appendChild(ul);
    // box.appendChild(questionWrapper);
    // displayPoints();
    // deleteButton();
  }
}

window.onload = function() {
  getQuestion();
};
