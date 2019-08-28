function getRamdomNumber() {
  const randomQuestion = Math.floor(Math.random() * Math.floor(idioms.length));
  currentQuestion = randomQuestion;
  if (arrayOfQuestionsAsked.includes(idioms[randomQuestion].german)) {
    return getRamdomNumber();
  }
  return randomQuestion;
}
function getIdiom(randomQuestion) {
  const question = document.createElement("h1");
  question.innerText = `${idioms[randomQuestion].german}`;
  return question;
}
function pointDeduction() {
  const wrong = document.querySelectorAll(".checked");
  console.log(`pointDeduction: `, wrong.length);
  return wrong.length;
}
function possiblePoints() {
  const currPoints = hightsPossiblePoints - pointDeduction();
  return currPoints;
}
function removeAnswerClickEvent() {
  const allListItems = document.querySelectorAll("li");
  Array.from(allListItems).map(e => e.classList.add("remove-event"));
  // console.log(Array.from(allListItems));
}
