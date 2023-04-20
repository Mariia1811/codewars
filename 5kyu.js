// ---1---ROT13: Замінити кожну букву str на букву з алфавіту з індексом +13
// function rot13(str) {
//   const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";

//   return str.replace(
//     /[a-z]/gi,
//     (letter) => cipher[originalAlpha.indexOf(letter)]
//   );
// }

// const rot13 = (str) =>
//   str.replace(/[a-z]/gi, (val) =>
//     String.fromCharCode(val.charCodeAt() + (/[a-m]/i.test(val) ? 13 : -13))
//   );

// console.log(rot13("EBG13 rknzcyr."));
// console.log(rot13("This is my first ROT13 excercise!"));


