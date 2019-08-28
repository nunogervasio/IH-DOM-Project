function addButton() {
  const button = document.createElement("button");
  button.innerText = "Next Question";
  button.onclick = deleteQuestion;
  box.appendChild(button);
}

function deleteButton() {
  const child = document.querySelector("button");
  box.removeChild(child);
}
function addCorrectMessage() {
  const para = document.createElement("p");
  para.innerHTML = `<span class="blink">That's right.</span> You earned ${createMessage()} <br /> 
  ${idioms[currentQuestion].german} means ${
    idioms[currentQuestion].english
  }.<br /> Or as the English say. <span class="idiom">${
    idioms[currentQuestion].engVersion
  }</span>.`;
  box.appendChild(para);
}
function createMessage() {
  return possiblePoints() === 1
    ? `<span class="blink">${possiblePoints()}</span> Point`
    : `<span class="blink">${possiblePoints()}</span> Points`;
}
function deleteCorrectMessage() {
  const child = document.querySelector("p");
  //   para.innerHTML = `${idioms[0]}`;
  box.removeChild(child);
}
function addPossiblePoints() {
  const h3 = document.createElement("h3");
  h3.innerHTML = `This question is worth ${possiblePoints()} Points`;
  box.appendChild(h3);
}
function deletePossiblePoints() {
  const child = document.querySelector("h3");
  box.removeChild(child);
}
function addQuestion() {
  //   const h1 = document.createElement("h1");
  //   h1.innerText = getIdiom();
  box.appendChild(`getIdiom(getRamdomNumber())`);
}
function deleteQuestion() {
  const child_h1 = document.querySelector("h1");
  box.removeChild(child_h1);
  const child_ul = document.querySelector("ul");
  box.removeChild(child_ul);
  deleteCorrectMessage();
  deleteButton();
  getQuestion();
}
// function addAnswers() {
//   const ul = document.createElement("ul");
//   box.appendChild(ul);
//   const li = document.createElement("li");
//   li.innerText = `here is an list item`;
//   ul.appendChild(li);
// }
// function deleteAnswers() {
//   const child = document.querySelector("ul");
//   box.removeChild(child);
// }
function addFinalPoints() {
  const h2 = document.createElement("h2");
  h2.innerHTML = `Your final point score is <span class="blink">${totalPoints}</span>`;
  box.appendChild(h2);
}
function deleteFinalPoints() {
  const child = document.querySelector("h2");
  box.removeChild(child);
}
function addQuizDone() {
  const h2 = document.createElement("h2");
  h2.classList.add("quiz-done");
  h2.innerText = `You have finished the Quiz`;
  box.appendChild(h2);
}
function deleteQuizDone() {
  const child = document.querySelector(".quiz-done");
  box.removeChild(child);
}
function addWrongAnswer(event) {
  const targetElement = event.currentTarget;
  targetElement.classList.add("checked");
  const wrong = document.createElement("h3");
  wrong.classList.add("wrong");
  wrong.innerText = `That's Wrong. Try again`;
  box.appendChild(wrong);
  pointDeduction();
  //   deletePossiblePoints();
  //   addPossiblePoints();
}
function deleteWrongAnswer() {
  const parent = document.querySelector(".box");
  const child = document.querySelector(".wrong");
  parent.removeChild(child);
}
