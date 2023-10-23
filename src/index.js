// 1. 알파벳 버튼을 누른다.
// 2-1. 단어에 있으면 위치에 들어가고 목숨이 줄어들지 않고 그림이 바뀌지 않는다.
// 2-2. 단어에 없으면 목숨이 줄어들고 그림이 그림이 바뀐다.
// 3. 그 단어가 비활성화 된다.
// 4. 계속 반복된다.
// 5-1. 답을 맞춘 경우 승리 메세지가 뜬다.
// 5-2. 답을 틀린 경우 패매 메시지가 뜬다.
// 6. 위의 메세지와 함께 다시 시작할건지 묻는 버튼이 생긴다.
let programming_languages = [
  "python",
  "javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby",
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
  answer =
    programming_languages[
      Math.floor(Math.random() * programming_languages.length)
    ];
}

// function generateButtons() {
//   let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
//     .split("")
//     .map(
//       (letter) =>
//         `
//       <button
//         class="btn btn-lg btn-primary m-2"
//         id='` +
//         letter +
//         `'
//         onClick="handleGuess('` +
//         letter +
//         `')"
//       >
//         ` +
//         letter +
//         `
//       </button>
//     `
//     )
//     .join("");

//   document.getElementById("keyboard").innerHTML = buttonsHTML;
// }

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    //mistakes++;
    //updateMistakes();
    checkIfGameLost();
    //updateHangmanPicture();
  }
}

// function updateHangmanPicture() {
//   document.getElementById("hangmanPic").src = "./images/" + mistakes + ".jpg";
// }

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById("keyboard").innerHTML = "You Won!!!";
  }
}

// function checkIfGameLost() {
//   if (mistakes === maxWrong) {
//     document.getElementById("wordSpotlight").innerHTML =
//       "The answer was: " + answer;
//     document.getElementById("keyboard").innerHTML = "You Lost!!!";
//   }
// }

function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

// function updateMistakes() {
//   document.getElementById("mistakes").innerHTML = mistakes;
// }

function reset() {
  //mistakes = 0;
  guessed = [];
  //document.getElementById("hangmanPic").src = "./images/0.jpg";

  randomWord();
  guessedWord();
  //updateMistakes();
  //generateButtons();
}

//document.getElementById("maxWrong").innerHTML = maxWrong;

randomWord();
//generateButtons();
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
