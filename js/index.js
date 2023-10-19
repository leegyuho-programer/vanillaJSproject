function $(selector) {
  return document.querySelector(selector);
}

function addClass(element, className) {
  element.classList.add(className);
}

function createElement(tagName) {
  return document.createElement(tagName);
}

//1~9까지 랜덤 숫자 생성
function randomNumber() {
  return Math.floor(Math.random() * 9 + 1);
}

//랜덤 단어 생성
async function createRandomWords(wordCount) {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  const result = await response.json();
  const { puzzle } = result;
  return { puzzle };
  //console.log(puzzle);
}

createRandomWords(randomNumber());
console.log(createRandomWords(randomNumber()));
