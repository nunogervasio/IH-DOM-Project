function getRamdomNumber() {
  const randomQuestion = Math.floor(Math.random() * Math.floor(idioms.length));
  currentQuestion = randomQuestion;
  return randomQuestion;
}
