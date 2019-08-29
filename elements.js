function addButton() {
  const button = document.createElement("button");
  button.innerText = "Next Question";
  button.onclick = deleteQuestion;
  button.addEventListener("mouseover", buttonGerman);
  button.addEventListener("mouseout", buttonEnglish);
  box.appendChild(button);
}
function buttonGerman() {
  const button = document.querySelector("button");
  button.innerText = "nächste Frage";
}
function buttonEnglish() {
  const button = document.querySelector("button");
  button.innerText = "Next Question";
}
function deleteButton() {
  const child = document.querySelector("button");
  if (child) {
    box.removeChild(child);
  }
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
  box.removeChild(child);
}
function addPossiblePoints() {
  const h3 = document.createElement("h3");
  h3.innerHTML = `This question is worth ${possiblePoints()} Points`;
  box.appendChild(h3);
}
function deletePossiblePoints() {
  const child = document.querySelector("h3");
  if (child) {
    box.removeChild(child);
  }
}
function addQuestion() {
  box.appendChild(`getIdiom(getRamdomNumber())`);
}
function deleteQuestion() {
  const child_h1 = document.querySelector("h1");
  if (child_h1) {
    box.removeChild(child_h1);
  }
  const child_ul = document.querySelector("ul");
  if (child_ul) {
    box.removeChild(child_ul);
  }
  deleteCorrectMessage();
  deleteButton();
  getQuestion();
}
function addFinalPoints() {
  const finalPoints = document.createElement("h2");
  finalPoints.classList.add("final-points");
  finalPoints.innerHTML = `Your final point score is <span class="blink">${totalPoints}</span>`;
  box.appendChild(finalPoints);
}
function addReSetButton() {
  const button = document.createElement("button");
  button.classList.add("re-set");
  button.innerText = "Redo Quiz";
  button.onclick = reSetQuiz;
  button.addEventListener("mouseover", reSetGerman);
  button.addEventListener("mouseout", reSetEnglish);
  box.appendChild(button);
}
function reSetGerman() {
  const button = document.querySelector("button");
  button.innerText = "Quiz wiederholen";
}
function reSetEnglish() {
  const button = document.querySelector("button");
  button.innerText = "Redo Quiz";
}

function deleteReSetButton() {
  const child = document.querySelector(".re-set");
  if (child) {
    box.removeChild(child);
  }
}
function addStartButton() {
  const button = document.createElement("button");
  button.classList.add("title");
  button.innerText = "Start Quiz";
  button.onclick = startGame;
  button.addEventListener("mouseover", startButtonGerman);
  button.addEventListener("mouseout", startButtonEnglish);
  box.appendChild(button);
}
function startButtonGerman() {
  const button = document.querySelector("button");
  button.innerText = "Quiz starten";
}
function startButtonEnglish() {
  const button = document.querySelector("button");
  button.innerText = "Start Quiz";
}
function deleteFinalPoints() {
  const child_h2 = document.querySelector(".final-points");
  if (child_h2) {
    box.removeChild(child_h2);
  }
}
function addQuizDone() {
  const h2 = document.createElement("h2");
  h2.classList.add("quiz-done");
  h2.innerText = `You have finished the Quiz`;
  box.appendChild(h2);
}
function deleteQuizDone() {
  const child = document.querySelector(".quiz-done");
  if (child) {
    box.removeChild(child);
  }
}
function addWrongAnswer(event) {
  const targetElement = event.currentTarget;
  targetElement.classList.add("checked");
  const wrong = document.createElement("h3");
  wrong.classList.add("wrong");
  wrong.innerText = `That's Wrong. Try again`;
  box.appendChild(wrong);
  pointDeduction();
}
function deleteWrongAnswer() {
  const child = document.querySelector(".wrong");
  if (child) {
    child.parentNode.removeChild(child);
  }
}
function addMainTitle() {
  const title = document.createElement("img");
  title.classList.add("title");
  title.setAttribute("src", "./header-pink.gif");
  box.appendChild(title);
}

/**Dot functions */
// const holder = document.createElement("div");
function addPulsatingDot(randomNumber) {
  const holder = document.createElement("div");
  holder.classList.add("holder");
  const dot = document.createElement("div");
  dot.classList.add("dot");
  const pulse = document.createElement("div");
  pulse.classList.add("pulse");
  const items = [dot, pulse];
  appendChildren(holder, items);
  //   box.appendChild(holder);
  /**Tooltip  */
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  //
  tooltip.addEventListener("mouseover", () => {
    const liList = document.querySelectorAll("li");
    let newList = Array.from(liList);

    const filteredListliList = newList.filter(
      li => li.innerText != idioms[randomNumber].english
    );

    filteredListliList.forEach(li => {
      li.classList.add("checked");
    });
  });
  //

  tooltip.addEventListener("mouseout", () => {
    const liList = document.querySelectorAll("li");
    let newList = Array.from(liList);

    const filteredListliList = newList.filter(
      li => li.innerText != idioms[randomNumber].english
    );

    filteredListliList.forEach(li => {
      li.classList.remove("checked");
    });
  });
  const tooltiptext = document.createElement("span");
  tooltiptext.classList.add("tooltiptext");
  tooltiptext.innerText = "Hint 👆";
  tooltip.appendChild(holder);
  tooltip.appendChild(tooltiptext);
  box.appendChild(tooltip);
}

function deletePulsatingDot() {
  const child = document.querySelector(".holder");
  if (child) {
    child.parentNode.removeChild(child);
  }
}
function appendChildren(parent, children) {
  children.forEach(child => {
    parent.appendChild(child);
  });
}
