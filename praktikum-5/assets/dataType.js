// Number
let foo = 100;
let bar = -5000;
let baz = 0.66634;

console.log(foo); // 100
console.log(bar); // -5000
console.log(baz); // 0.66634

// String
let text;

text = "Hello World";
console.log(text);

text = "Sedang belajar JavaScript";
console.log(text);

text = "199";
console.log(text);

// Type Of
let num = 199;
console.log(typeof num); // number

let word = "199";
console.log(typeof word); // string

// Template String
let name = "Purnama";
let hello = `Semangat Pagi ${name}`;
console.log(hello); // Semangat Pagi Purnama

let myHello = "Semangat Pagi " + name;
console.log(myHello); // Semangat Pagi Purnama

// Boolean
let benar = true;
let salah = false;

console.log(benar); // true
console.log(salah); // false

// Null
let myNull = null;
console.log(myNull); // null

// Array
let siswa = ["Andri", "Joko", "Sukma", "Rina", "Sari"];

console.log(siswa[0]); // Andri
console.log(siswa[1]); // Joko
console.log(siswa[2]); // Sukma
console.log(siswa[3]); // Rina
console.log(siswa[4]); // Sari

//   Change Array Value
let arr = ["andi", "santi", "joko"];

arr[0] = "alex";
console.log(arr); // Array [ "alex", "santi", "joko" ]

arr[3] = "rika";
console.log(arr); // Array [ "alex", "santi", "joko", "rika" ]

//   Array Destructuring
let mahasiswa = ["Andi", "Lisa", "Eko"];
let [a, b, c] = mahasiswa;

console.log(a); // Andi
console.log(b); // Lisa
console.log(c); // Eko