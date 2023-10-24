let fruits = [
  "apple",
  "banana",
  "grape",
  "pear",
  "strawberry",
  "lemon",
  "melon",
  "watermelon",
  "tomato",
  "orange",
  "kiwi",
  "pineapple",
];

let answer = "";
let life = 5;
let guessed = [];
let wordStatus = null;

function $(selector) {
  return document.querySelector(selector);
}

function addClass(element, className) {
  element.classList.add(className);
}

function createElement(tagName) {
  return document.createElement(tagName);
}

// //랜덤 단어 생성
// const createRandomWords = async () => {
//   const response = await fetch("src/words.json");
//   const result = await response.json();
//   const { randomWords } = result;

//   const randomNumber = Math.floor(Math.random() * randomWords.length);
//   const { word } = randomWords[randomNumber];
//   // missionWord.inputWord = word;
//   // console.log(word);
//   // return word;
// };

function randomWord() {
  answer = fruits[Math.floor(Math.random() * fruits.length)];
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkGameWin();
  } else if (answer.indexOf(chosenLetter) === -1) {
    life--;
    checkGameLose();
  }
}

function checkGameWin() {
  if (wordStatus === answer) {
    alert("You Win!!");
  }
}

function checkGameLose() {
  if (life === 0) {
    alert("You Lose!!");
  }
}

function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

function reset() {
  life = 5;
  guessed = [];

  randomWord();
  guessedWord();
}

randomWord();
guessedWord();
// //1~2까지 랜덤 숫자 생성
// function randomNumber() {
//   return Math.floor(Math.random() * 2) + 1;
// }

//랜덤 단어 생성
// async function createRandomWords() {
//   //const wordCount = randomNumber();
//   try {
//     const response = await fetch("http://puzzle.mead.io/puzzle?wordCount=1");
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// createRandomWords();
