//Minimum//

//Secomd task//

let z = 'Zalhar';
let s = 'Stepan';
let m = 'Mira';
let d = 'Dima'

//Fourth task//

// Є 2 cтилі написання змінних, а саме: CamelCase та з нижеім підчеркуванням.//
// CamelCas: pershaZminna, перша буква завжди маленька, а наступне слово змінної з великої літери.//



//Norma//

//Fist task//

let yourName = prompt("Як тебе звати?");
alert("Привіт," + " " + yourName);

//Second task//

let age = prompt("Вкажи свій рік народження!");
let date = new Date();
let year = (date.getFullYear());
let a = year - age;
alert("Тобі" + " " + a + " " + "років");

//Third task//

let side = prompt("Вкажи сторону квадрата, і отримаєш периметр ;)");
side = side * 4;
alert("Периметр квадрата дорівнює" + " " + side);



//Maximum//

//First task//

let radius = prompt("Вкажи радіус кола, щоб визначити площу");
radius = 3.14 * radius * radius;
alert("Площа кола дорівнює" + " " + radius);

//Second task//

let dist = prompt("Вкажи відстань між містами");
let time = prompt("Вкажи за скільки часу ти хочеш проїхати цю відстань (в годинах)");
let speed = dist / time;
alert("Тобі необхідно рухатись зі швидкістю" + " " + speed + " " + "км/год, приємної поїздки :)");

//Third task//

let dolar = prompt("Введи свою суму в баксах, щоб перевести в євро")
const dol = 0.93;
let x = dolar * dol;
alert("Ого, у тебе аж" + " " + x + "євро" + ". Перерахуй 10% нашим ЗСУ!");
