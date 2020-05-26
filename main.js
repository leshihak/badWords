"use strict";
// Task 1
// let city: string;
// city = 'Київ';
// city = 'Львів';
// let adress: string = city;
// console.log(adress);
// Task 2
// let stringPrompt: string | null = prompt('Write number:');
// if(typeof stringPrompt === 'string') {
//   let number = +stringPrompt;
//   if(number === 0) console.log('Це число 0!')
//   else if(number % 2 === 0) console.log('Це число парне!');
//   else console.log('Це число непарне!');
// }
// Task 3
// function maxNumber(a: number, b: number, ...restOfNum: number[]) {
//   let maxNumber = Math.max(a, b, ...restOfNum);
//   console.log(maxNumber);
// }
// maxNumber(-5, -2);
// maxNumber(5,-2, 30, 6);
// Task 4
// function getSqrt(number: number) {
//   let sqrt = Math.sqrt(number);
//   if (number <= 0) console.log('Введіть додатнє число.');
//   else if (typeof number === 'number') console.log(`Квадратний корінь з ${number} дорівнює ${sqrt}.`);
//   else if (typeof number !== 'number') console.log('Повинно бути числове значення.');
//   else console.log('Будь ласка, введіть число!');
// }
// getSqrt(9);
// getSqrt(-1);
// getSqrt('d');
// Task 5
// const badWordInp: any = document.getElementById('badWordInp');
// const textarea: any = document.getElementById('textarea');
// const badWords: any = document.querySelector('.bad-words');
// const btnAdd = document.querySelector('.add');
// const btnReset = document.querySelector('.reset');
// const btnCensor = document.querySelector('.censor');
// const formInp = document.forms['form-inp'];
// let emptyArrayOfWords: Array<string> = [];
// // btn 
// btnReset?.addEventListener('click', (event) => {
//   event.preventDefault();
//   badWords.innerHTML = '<b>Bad words: </b>';
//   badWordInp.placeholder = 'Write word here...';
//   badWordInp.style.border = 'none';
//   formInp.reset();
//   emptyArrayOfWords = [];
//   textarea.value = '';
// });
// btnAdd?.addEventListener('click', (event) => {
//   event.preventDefault(); 
//   emptyArrayOfWords = [...emptyArrayOfWords, badWordInp?.value];
//   if(badWordInp?.value !== '') {
//     let stringOfBadWords: string = emptyArrayOfWords.join(', ');
//     badWords.innerHTML = '<b>Bad words: </b>';
//     badWords.innerHTML += `<span style="color:red";>${stringOfBadWords}</span>`;
//     badWordInp.placeholder = 'Write word here...';
//     badWordInp.style.border = 'none';
//     formInp.reset(); 
//   } else {
//     badWordInp.placeholder = 'Please write a word!';
//     badWordInp.style.border = '2px solid red';
//     emptyArrayOfWords.pop();
//   }
// });
// btnCensor?.addEventListener('click', (event) => {
//   event.preventDefault();
//   let stringOfSentense: string = textarea?.value;
//   let wordOfSentence = stringOfSentense.split(' ');
//   let findABadWord = wordOfSentence.map(word => {
//     if(-1 !== emptyArrayOfWords.indexOf(word)) {
//       let hideBadWord = word.replace(/./g, '*');
//       word = hideBadWord;
//     } 
//     return word;
//   }).join(' ');
//   textarea.value = findABadWord;
// });
