/*const a = "tôi đi học, tôi học giỏi, tôi đẹp trai";
const targetWord = "tôi";
let count = 0;

for (let i = 0; i < a.length; i++) {
  if (a.slice(i, i + targetWord.length) === targetWord) {
    count++;
  }
}
alert(`Số lần lặp của ${targetWord} là ${count} lần`);*/
function separate(inputString) {
  let letter = "";
  let number = "";
  let countLetter = 0;
  let countNumber = 0;
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if (isNaN(char)) {
      letter += char;
      countLetter++;
    } else {
      number += char;
      countNumber++;
    }
  }
  return { letter, number, countLetter, countNumber };
}
let inputString = prompt("Mời nhập chuỗi");
let result = separate(inputString);
alert(`
    Chuỗi chữ: ${result.letter} 
    Chuỗi số: ${result.number}
    `);
