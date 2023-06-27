// ---1--- перетворити рядок на новий рядок, де кожен символ у новому рядку є, "("якщо цей символ з’являється лише один раз у вихідному рядку або ")"якщо цей символ з’являється більше одного разу у вихідному рядку. Ігноруйте великі літери, коли визначаєте, чи є символ дублікатом.
// const duplicateEncode = (s) =>
//   s.toLowerCase().split``.map((e, _, a) =>
//     a.indexOf(e) === a.lastIndexOf(e) ? "(" : ")"
//   ).join``;
// console.log(duplicateEncode("recede"));
// console.log(duplicateEncode("Success"));
// console.log(duplicateEncode("(( @"));

// ---2---Ваше завдання полягає в тому, щоб реалізувати функцію, яка приймала б азбуку Морзе як вхідні дані та повертала б декодований зрозумілий людині рядок.
// const decodeMorse = function (morseCode) {
//   return morseCode
//     .split("   ")
//     .map((s) => s.split(" "))
//     .map((s) => s.map((s) => MORSE_CODE[s]))
//     .map((s) => s.join(""))
//     .join(" ")
//     .trim();
// };
// console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
// console.log(decodeMorse("   .... . -.--   "));
// console.log(decodeMorse("...   ---   ..."));
// console.log(
//   decodeMorse(
//     "      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  "
//   )
// );
// ---3---Дано масив цілих чисел, знайдіть те, яке з’являється непарну кількість разів.Завжди буде лише одне ціле число, яке з’являється непарну кількість разів.
// function findOdd(A) {
//   //happy coding!
//   return 0;
// }

// ---4--- Вам надано масив (який матиме довжину принаймні 3, але може бути дуже великим), що містить цілі числа. Масив або повністю складається з непарних цілих чи повністю складається з парних цілих чисел, за винятком одного цілого числа N. Напишіть метод, який приймає масив як аргумент і повертає цей "викид" N.
// function findOutlier(integers) {
//   const q = integers.filter((el) => el % 2 === 0);
//   const num = q.length === 1 ? q : integers.filter((el) => el % 2 !== 0);
//   return num[0];
// }
// console.log(findOutlier([0, 1, 2]));
// console.log(findOutlier([0, 0, 3, 0, 0]));

// --5-- Ваше завдання — відсортувати заданий рядок. Кожне слово в рядку міститиме одне число. Це число є позицією слова в результаті.Примітка. Числа можуть бути від 1 до 9. Отже, 1 буде першим словом (а не 0).Якщо вхідний рядок порожній, поверніть порожній рядок. Слова у вхідному рядку міститимуть лише дійсні послідовні числа.
// function order(words) {
//   const newArr = [];
//   let newWords = [];
//   let newStr = "";
//   const array = words.split(" ").map((el) => el.split(""));
//   for (let i = 1; i <= array.length; i++) {
//     const q = array.filter((el) => el.includes(`${i}`));
//     newArr.push(q);
//   }
//   for (let i = 0; i < newArr.length; i++) {
//     const q = newArr[i].map((el) => el.join(" "));
//     newWords.push(q);
//   }
//   for (let i = 0; i < newWords.length; i++) {
//     const q = newArr[i].map((el) => el.join(""));
//     newStr = newStr + "  " + q.join("");
//   }

//   return newStr.trim();
// }

// console.log(order("is2 Thi1s T4est 3a"));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
// const order = (w) =>
//   w
//     .split(" ")
//     .sort((a, b) => /\d/.exec(a) - /\d/.exec(b))
//     .join(" ");

