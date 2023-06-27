// ---1--- Реалізуйте функцію, яка приймає послідовність об’єктів і назву властивості та повертає послідовність, що містить іменовану властивість кожного об’єкта.
// function pluck(objs, name) {
//   return objs.reduce((acc, obj) => {
//     return [...acc, obj[name]];
//   }, []);
// }
// const pluck = (objs, name) => objs.map((obj) => obj[name]);
// console.log(pluck([{ a: 1 }, { a: 2 }], "a"));

// --- 2-- -  функція приймає ціле число n > 1та повертає масив із усіма дільниками цілого числа (окрім 1 і самого числа), від найменшого до найбільшого. Якщо число є простим, поверніть рядок «(ціле число) є простим»
// function divisors(integer) {
//   const arr = [];
//   for (let i = 2; i < integer; i++) {
//     if (Number.isInteger(integer / i)) {
//       arr.push(i);
//     }
//   }
//   return arr.length === 0 ? `${integer} is prime` : arr;
// }

// console.log(divisors(15));
// console.log(divisors(12));
// console.log(divisors(13));

