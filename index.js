/********************************** */

/**
 * https://www.fluentu.com/blog/german/common-german-idioms/
 */
const main = document.querySelector(".main-container");
const box = document.querySelector(".box");
// const btnWrapper = document.createElement("div");
// btnWrapper.classList.add("btn-wrapper");

let currentQuestion = 0;
function getQuestion() {
  const questionWrapper = document.createElement("div");
  questionWrapper.classList.add("question-wrapper");
  box.appendChild(questionWrapper);

  const randomQuestion = getRamdomNumber();
  const question = getIdiom(randomQuestion);

  const ul = document.createElement("ul");
  ul.innerHTML = "";

  idioms[randomQuestion].answers.forEach((a, i) => {
    const li = document.createElement("li");
    li.innerText = `${a.answer}`;
    li.onclick = () => {
      if (a.answer.valueOf() === idioms[randomQuestion].english) {
        // alert(`you clicked answer ${i + 1}: ${a.answer.valueOf()}`);
        wrightAnswer(event);
        nextButton(event);
      } else {
        wrongAnswer(event);
      }
    };

    ul.appendChild(li);
  });
  questionWrapper.appendChild(question);
  questionWrapper.appendChild(ul);
  box.appendChild(questionWrapper);
  deleteButton();
}
function getIdiom(randomQuestion) {
  const question = document.createElement("h3");
  question.innerText = `${idioms[randomQuestion].german}`;
  return question;
}
function getRamdomNumber() {
  const randomQuestion = Math.floor(Math.random() * Math.floor(idioms.length));
  currentQuestion = randomQuestion;
  return randomQuestion;
}
function wrongAnswer(event) {
  const targetElement = event.currentTarget;
  targetElement.classList.add("checked");
  console.log(`Wrong answer try again`);
}

function wrightAnswer() {
  // const wrightAnswer = document.createElement("p");
  // wrightAnswer.innerText = `That's wright. ${idioms[currentQuestion].english} or as the English say ${idioms[currentQuestion].engVersion}`;
  // btnWrapper.appendChild(wrightAnswer);
  // console.log(
  //   `That's wright. ${idioms[currentQuestion].english} or as the English say ${idioms[currentQuestion].engVersion}`
  // );
}
function nextButton() {
  const btnWrapper = document.createElement("div");
  btnWrapper.classList.add("btn-wrapper");
  const nextButton = document.createElement("button");
  nextButton.innerText = `Next`;
  nextButton.onclick = deleteQuestion;
  btnWrapper.appendChild(nextButton);
  box.appendChild(btnWrapper);
  console.log(
    `That's wright. ${idioms[currentQuestion].english} or as the English say ${idioms[currentQuestion].engVersion}`
  );
  const wrightAnswer = document.createElement("p");
  wrightAnswer.innerText = `That's wright. ${idioms[currentQuestion].english} or as the English say ${idioms[currentQuestion].engVersion}`;
  btnWrapper.appendChild(wrightAnswer);
  console.log(
    `That's wright. ${idioms[currentQuestion].english} or as the English say ${idioms[currentQuestion].engVersion}`
  );
}
function loadNextQuestion() {
  console.log(`called load next question`);
  getQuestion();
}

function deleteQuestion() {
  const parent = document.querySelector(".box");
  const child = document.querySelector(".question-wrapper");
  parent.removeChild(child);
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
