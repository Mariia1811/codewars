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

// ---2--- Напишіть функцію dirReduc, яка прийматиме масив рядків і повертатиме масив рядків без непотрібних напрямків (W<->E або S<->N поруч ).Версія Haskell приймає список вказівок за допомогою data Direction = North | East | West | South.Версія Clojure повертає нуль, коли шлях зводиться до нуля.Версія Rust займає частину enum Direction {North, East, West, South}.Не всі шляхи можна зробити простішими. Шлях [«ПІВНІЧ», «ЗАХІД», «ПІВДЕНЬ», «СХІД»] не зводиться. «ПІВНІЧ» і «ЗАХІД», «ЗАХІД» і «ПІВДЕНЬ», «ПІВДЕНЬ» і «СХІД» не є прямою протилежністю один одному і не можуть такими стати. Отже, шлях результату сам по собі: ["NORTH", "WEST", "SOUTH", "EAST"].

function dirReduc(arr) {
  if (arr.length === 0) return arr;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") {
      arr.splice([i], 2);
    }
    if (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") {
      arr.splice([i], 2);
    }
    if (arr[i] === "EAST" && arr[i + 1] === "WEST") {
      arr.splice([i], 2);
    }
    if (arr[i] === "EAST" && arr[i + 1] === "WEST") {
      arr.splice([i], 2);
    }
  }

  return arr;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
