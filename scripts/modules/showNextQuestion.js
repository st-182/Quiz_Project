import { questionElement, answerBtnsElement } from "./DOM_Elements.js";

export const showNextQuestion = (question, color, func) => {
  questionElement.textContent = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement(`button`);
    button.innerText = answer.text;
    button.classList.add(`btn`, color);
    if (answer.correct) button.dataset.correct = answer.correct;
    button.addEventListener(`click`, func);
    answerBtnsElement.appendChild(button);
  });
};
