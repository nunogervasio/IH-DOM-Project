/********************************** */

/**
 * https://www.fluentu.com/blog/german/common-german-idioms/
 */
const main = document.querySelector(".main-container");
const box = document.querySelector(".box");
// const btnWrapper = document.createElement("div");
// btnWrapper.classList.add("btn-wrapper");

let currentQuestion = 0;
let arrayOfQuestionsAsked = [];
let questionCount = 0;
let hightsPossiblePoints = 4;
let totalPoints = 0;

function getQuestion() {
  if (questionCount === idioms.length) {
    console.log(`asked all questions`);
    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("question-wrapper");
    const finished = document.createElement("h3");
    finished.innerText = "All Questions Have been asked.";
    const score = document.createElement("h3");
    score.innerText = `Your score is ${totalPoints}`;
    questionWrapper.appendChild(finished);
    questionWrapper.appendChild(score);
    box.appendChild(questionWrapper);
    deleteButton();
  } else {
    questionCount++;
    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("question-wrapper");
    box.appendChild(questionWrapper);

    const randomNumber = getRamdomNumber();
    const question = getIdiom(randomNumber);
    arrayOfQuestionsAsked.push(question.innerText);

    const ul = document.createElement("ul");
    ul.innerHTML = "";

    idioms[randomNumber].answers.forEach((a, i) => {
      const li = document.createElement("li");
      li.innerText = `${a.answer}`;
      li.addEventListener("click", () => {
        if (a.answer.valueOf() === idioms[randomNumber].english) {
          // wrightAnswer(event);
          nextButton(event);
          totalPoints += possiblePoints();
          deleteWrongAnswer();
        } else {
          if (pointDeduction()) {
            deleteWrongAnswer();
          }
          wrongAnswer(event);
        }
      });

      ul.appendChild(li);
    });
    // makes order of li random
    for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[(Math.random() * i) | 0]);
    }

    questionWrapper.appendChild(question);
    questionWrapper.appendChild(ul);
    box.appendChild(questionWrapper);
    displayPoints();
    deleteButton();
  }
}
function getIdiom(randomQuestion) {
  const question = document.createElement("h1");
  question.innerText = `${idioms[randomQuestion].german}`;
  return question;
}

function getRamdomNumber() {
  const randomQuestion = Math.floor(Math.random() * Math.floor(idioms.length));
  currentQuestion = randomQuestion;
  if (arrayOfQuestionsAsked.includes(idioms[randomQuestion].german)) {
    return getRamdomNumber();
  }
  return randomQuestion;
}
function deleteWrongAnswer() {
  const parent = document.querySelector(".box");
  const child = document.querySelector(".wrong");
  parent.removeChild(child);
}
function wrongAnswer(event) {
  const targetElement = event.currentTarget;
  targetElement.classList.add("checked");
  const wrong = document.createElement("h3");
  wrong.classList.add("wrong");
  wrong.innerText = `That's Wrong. Try again`;
  box.appendChild(wrong);
  pointDeduction();
  deletePoints();
  displayPoints();
}
function pointDeduction() {
  const wrong = document.querySelectorAll(".checked");
  console.log(wrong.length);
  return wrong.length;
}
function possiblePoints() {
  const currPoints = hightsPossiblePoints - pointDeduction();
  return currPoints;
}
function displayPoints() {
  const points = document.createElement("h3");
  points.classList.add("points");
  const buttonLoaded = document.querySelector(".btn-wrapper");
  console.log(`buttonLoaded `, buttonLoaded);
  points.innerHTML = `You can earn <span>${possiblePoints()}</span> points`;

  box.appendChild(points);
}
function deletePoints() {
  const parent = document.querySelector(".box");
  const child = document.querySelector(".points");
  parent.removeChild(child);
}
function wrightAnswer() {
  // const wrightAnswer = document.createElement("p");
  // wrightAnswer.innerText = `That's wright. ${idioms[currentQuestion].english} or as the English say ${idioms[currentQuestion].engVersion}`;
  // btnWrapper.appendChild(wrightAnswer);
  // console.log(
  //   `That's wright. ${idioms[currentQuestion].english} or as the English say ${idioms[currentQuestion].engVersion}`
  // );
}
function nextButton(event) {
  const btnWrapper = document.createElement("div");
  btnWrapper.classList.add("btn-wrapper");

  /**Added write answer to next button */
  const wrightAnswer = document.createElement("p");
  wrightAnswer.innerHTML = `<span class="blink">That's right.</span> <br /> ${idioms[currentQuestion].english}. Or as the English say. ${idioms[currentQuestion].engVersion}.`;
  btnWrapper.appendChild(wrightAnswer);

  /**Button  */
  const nextButton = document.createElement("button");
  nextButton.innerText = `Next Question`;
  nextButton.onclick = deleteQuestion;
  btnWrapper.appendChild(nextButton);
  box.appendChild(btnWrapper);

  /**Makes li's unclickable after right answer selected */
  const allListItems = document.querySelectorAll("li");
  Array.from(allListItems).map(e => e.classList.add("remove-event"));
  console.log(Array.from(allListItems));
}

function deleteQuestion() {
  const parent = document.querySelector(".box");
  const child = document.querySelector(".question-wrapper");
  parent.removeChild(child);
  deletePoints();
  getQuestion();
}

function deleteButton() {
  const parent = document.querySelector(".box");
  const child = document.querySelector(".btn-wrapper");
  parent.removeChild(child);
}

window.onload = function() {
  getQuestion();
};
