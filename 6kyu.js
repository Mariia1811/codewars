// ---1--- перетворити рядок на новий рядок, де кожен символ у новому рядку є, "("якщо цей символ з’являється лише один раз у вихідному рядку або ")"якщо цей символ з’являється більше одного разу у вихідному рядку. Ігноруйте великі літери, коли визначаєте, чи є символ дублікатом.
// const duplicateEncode = (s) =>
//   s.toLowerCase().split``.map((e, _, a) =>
//     a.indexOf(e) === a.lastIndexOf(e) ? "(" : ")"
//   ).join``;
// console.log(duplicateEncode("recede"));
// console.log(duplicateEncode("Success"));
// console.log(duplicateEncode("(( @"));
