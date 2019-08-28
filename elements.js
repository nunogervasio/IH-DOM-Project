function addButton() {
  const button = document.createElement("button");
  button.innerText = "Next Question";
  box.appendChild(button);
}
function deleteButton() {
  const child = document.querySelector("button");
  box.removeChild(child);
}
function addCorrectMessage() {
  const para = document.createElement("p");
  para.innerHTML = `Message about user getting answer right`;
  //   para.innerHTML = `${idioms[0]}`;
  box.appendChild(para);
}
function deleteCorrectMessage() {
  const child = document.querySelector("p");
  //   para.innerHTML = `${idioms[0]}`;
  box.removeChild(child);
}
function addPossiblePoints() {
  const h3 = document.createElement("h3");
  h3.innerHTML = `This question is worth 3 Points`;
  box.appendChild(h3);
}
function deletePossiblePoints() {
  const child = document.querySelector("h3");
  box.removeChild(child);
}
function addQuestion() {
  const h1 = document.createElement("h1");
  h1.innerText = "Here is the German idiom";
  box.appendChild(h1);
}
function deleteQuestion() {
  const child = document.querySelector("h1");
  box.removeChild(child);
}
function addAnswers() {
  const ul = document.createElement("ul");
  box.appendChild(ul);
  const li = document.createElement("li");
  li.innerText = `here is an list item`;
  ul.appendChild(li);
}
function deleteAnswers() {
  const child = document.querySelector("ul");
  box.removeChild(child);
}
function addFinalPoints() {
  const h2 = document.createElement("h2");
  h2.innerText = `Your final point score is 88`;
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
