// !Variables
// - DOM elements                    in this case import is used for test purposes only
import {
  startBtnElement,
  nextBtnElement,
  quizQuestionElement,
  questionElement,
  answerBtnsElement,
  resultElement,
  scoreElement,
  containerElement,
} from "./modules/DOM_Elements.js";

// - program's logic                  there is no reason for using import
export let questions = [];
let index;
let scoreCorrect = 0;
let scoreIncorrect = 0;

// !Getting data for quiz from .json data file and pushing them into "questions" array
import fetchFunction from "./modules/fetch.js"; // in my opinion this import is worth it)
fetchFunction(`../data/HTML_questions.json`, questions);

// Functions
// - starting quiz (after pressing "START QUIZ")
const startQuiz = () => {
  startBtnElement.classList.add(`hide`);
  questionElement.classList.remove(`hide`);
  quizQuestionElement.classList.remove(`hide`);
  nextBtnElement.classList.add(`visibility`);
  nextBtnElement.classList.remove(`hide`);
  if (!resultElement.classList.contains("hide")) {
    resultElement.classList.add("hide");
  }
  // - reseting scores and index (index represents quiz question in .json)
  scoreCorrect = 0;
  scoreIncorrect = 0;
  index = 0;
  setNextQuestion();
};

const setNextQuestion = () => {
  resetButtons();
  showNextQuestion(questions[index], `btn-html`, selectAnswer);
  index++;
};

const selectAnswer = (e) => {
  let correct = e.target.dataset.correct;
  if (correct) {
    // add css syling to button
    e.target.classList.add(`correct`);
    // add green check mark
    if (e.target.childNodes.length === 1)
      e.target.innerHTML += ` <i class="fas fa-check-circle"></i>`;
    // disabling buttons after ckiking on right answer
    Array.from(answerBtnsElement.children).forEach(
      (btn) => (btn.disabled = true)
    );
    // console.log(questions.length);
    // console.log(index + 1);
    // adding point to score
    scoreCorrect++;

    if (questions.length > index) {
      nextBtnElement.classList.remove(`hide`);
      nextBtnElement.classList.remove(`visibility`);

      // nextBtnElement.classList.add(`next-btn`);
    } else {
      quizEnded();
    }
  } else {
    e.target.classList.add(`wrong`);
    if (e.target.childNodes.length === 1)
      e.target.innerHTML += ` <i class="fas fa-times-circle"></i>`;
    scoreIncorrect++;
    // console.log(answerBtnsElement.firstChild);
  }
};

// -- showing question and answers from questions array
const quizEnded = () => {
  startBtnElement.innerText = "RESTART QUIZ";
  startBtnElement.classList.remove("hide");
  nextBtnElement.classList.add(`hide`);

  resultElement.classList.remove("hide");
  resultElement.innerText = `Your score is ${
    scoreCorrect - scoreIncorrect
  } points, meaning you have ${scoreCorrect} correct answers and ${scoreIncorrect} incorrect ones from ${
    questions.length
  } questions.`;
  animationFn();
};

const animationFn = () => {
  resultElement.animate(
    [
      { opacity: "0", letterSpacing: `5px` },
      {
        opacity: "1",
        letterSpacing: `initial`,
        //transform: `translate(0,-80px)`,
      },
    ],
    {
      duration: 1500,
      delay: 1700,
    }
  );
  setTimeout(() => {
    // resultElement.style.transform = `translate(0,20px)`;
  }, 3000);
  let del = 500;
  Array.from(answerBtnsElement.children).forEach((btn) => {
    animationType1(btn, del);
    setTimeout(() => {
      btn.classList.add(`hide`);
    }, del + 1500);
  });
  animationType1(questionElement, del);
  setTimeout(() => {
    questionElement.classList.add(`hide`);
  }, del + 1500);
  containerElement.animate(
    [
      { height: `${containerElement.offsetHeight}px` },
      {
        height: `${
          containerElement.offsetHeight -
          answerBtnsElement.offsetHeight -
          questionElement.offsetHeight
        }px`,
      },
    ],
    {
      duration: 2000,
      delay: 1500,
    }
  );

  resultElement.animate(
    [
      { opacity: `0` },
      {
        opacity: `1`,
      },
    ],
    {
      duration: 2000,
      delay: 1500,
    }
  );
  startBtnElement.animate(
    [
      { opacity: `0` },
      {
        opacity: `1`,
      },
    ],
    {
      duration: 2000,
      delay: 1500,
    }
  );
};

const animationType1 = (btn, time) => {
  btn.animate(
    [
      { opacity: "1", transform: `scale(1)` },
      { opacity: "0", transform: `scale(0.1)` },
    ],
    {
      duration: 1500,
      delay: time,
    }
  );
};

import { showNextQuestion } from "./modules/showNextQuestion.js";
//
const resetButtons = () => {
  nextBtnElement.classList.add("visibility");
  resultElement.style.transform = ``;
  while (answerBtnsElement.firstChild) {
    answerBtnsElement.removeChild(answerBtnsElement.firstChild);
  }
};

// Events
document.addEventListener(`DOMContentLoaded`, () => {
  startBtnElement.style.backgroundColor = `var(--html-color)`;
  nextBtnElement.style.backgroundColor = `var(--html-color)`;
});
startBtnElement.addEventListener(`click`, startQuiz);
nextBtnElement.addEventListener(`click`, setNextQuestion);
