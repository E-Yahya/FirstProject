"use strict";
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("Один из последних просмотренных фильмов?", "");
// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
// i--;
//Если пользователь не выполнил условия if
//то в консоли будет error, i--; вернёт нас на 1 цикл назад
//если пользователь пропустил или сделал ошибку в if.
//   }
// }
// if (personalMovieDB.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);

// if (4==4){
//     console.log('Ok!');
// };
// Если при условии что 4 будет равно 4
// в консоли появиться команда
// которую мы хотим вывести в саму консоль.

//                   Switch

// const num = 50;

// switch (num) {
//     case 51:
//     console.log('Не верно');
//     break;
//     case 52:
//     console.log('Тоже не верно');
//     break;
//     case 53:
//     console.log('Не правильно');
//     break;
//     default:
//     console.log('Ответ по умолчанию');
//     break;
// };

//                   Циклы
// 1. Цикл - while

//  let num = 50;
// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // 2. Цикл - do

// do{
//     console.log(num < 55);
//     num++;
// }
// while (num < 55);

// 3. Цикл for

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num ++;
// }

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");
//       if (a != null && b != null && a != '' && b !='' && a.length < 50) {
//           personalMovieDB.movies[a] = b;
//       }

// const a = prompt('Один из последних просмотренных сериалов?',''),
//       b = prompt('На сколько оцените сериал?','');

//       personalSerialDB.serials [a] = b;
//       console.log(personalSerialDB);

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных сериалов?',''),
//         b = prompt('На сколько оцените сериал?','');

//         if ( a != null && b != null && a !='' && b !="" && a.length < 50 ) {
//              personalSerialDB.serials [a] = b;
//              console.log('done');
//         } else {
//             console.log('error');
//             i--;
//           }

// }

// if(personalSerialDB.count < 10) {
//   console.log('Просмотрено довольно мало фильмов');
// }else if (personalSerialDB.count > 10 && personalSerialDB.count < 30){
//   console.log('Вы классический зритель');
// }else if (personalSerialDB.count >= 30) {
//   console.log('Вы киноман');
// }else {
//   console.log('Произошла ошибка');
// };
// console.log(personalSerialDB)

// const numberOfMultFilms = +prompt ('Сколько мультфильмов вы уже посмотрели?');
// const personalMultMovieDB = {
//   count: numberOfMultFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt('Один из последних просмотренных мультфильмов?'),
//       b = prompt('На сколько оцените его?'),
//       c = prompt('Один из последних просмотренных мультфильмов?'),
//       d = prompt('На сколько оцените его?');

//       personalMultMovieDB.movies [a] = b,
//       personalMultMovieDB.movies [c] = d;
//       console.log(personalMultMovieDB);

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */

// const numberOfSeasons = +prompt('Сколько сезонов вы уже посмотрели?');
// const personalSeasonDB = {
//   count: numberOfSeasons,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++ ) {
//   const a = prompt('Один из последних просмотренных сериалов?','')
//         b = prompt('На сколько оцените его?','')
//         if (a !=null && b !=null && a !='' && b !='' && a.length < 50){

//           personalSeasonDB.movies [a] = b,

//           console.log('done');

//     }; else {
//      i--
// };

// };

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }
// showFirstMessage('Hello World!');
// console.log(num);

// console.log(calc(7, 8));
// console.log(calc(3, 7));
// console.log(calc(15, 7));
// function calc(a,b) {
//     return (a+b);
// } //При помощи функции деклорация можно вывести результат первым

// function ret() {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello");
// };
// logger(); // А с функицей function expression нельзя вывести результат первым

// const calc = (a,b) => a + b;

// function showFirstConnect() {
//     console.log('Goodby');
// };
// showFirstConnect();

// function showFirstConnect(text) {
//     console.log(text);
// }
// showFirstConnect('GoodGoodby');

// console.log(calc(54 ,33));
// console.log(calc(44 ,33));
// console.log(calc(88 ,10));

// function calc(a,b) {
//     return(a+b);
// }

// function ret() {
//     let num = 40;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('Goodby');
// };
// logger();

// const calc = (a,b) => a*b;
// console.log(calc(66,10));

//Методы и св-ва строк

// const str= "test";
// console.log(str.length)
//Показывет длину строки test т.е 4

// const str= "test";
// console.log(str[3]);
//В консоль выводится буква "s",так как отчет начинается с 0,
//и при помощи массивных скобок можно это узнать

// const str ="tEst";
// console.log(str.toLowerCase());
// console.log(str);

// const str = "test from chechnya";
// console.log(str.indexOf("russia"));
//Тег indexOf(); находит адрес или индекс аргумента

// const logg = "My name is Yahya, i from chechnya";
// console.log(logg.slice(11, 16));
//Метод skice(); обрезает текст, 11-начало, а 16-конец.
//в результате получится слово Yahya.

// const logg = "My name is Yahya, i from chechnya";
// console.log(logg.substring(16, 11));
//Метод substring(); похож на slice(); но
//у substring(); нельзя пользоваться отрицательным отчётом
//и у substring(); можно чтобы начало было больше чем конец, а конец больше чем начало.

// const logg = "Hello world";
// console.log(logg.substr(6, 5));
// //Здесь 6 начало вырезки текста, а 5 кол-во символов чтобы вырезать.
// //В консоли будет world

// const num = 12.2;
// console.log(Math.round(num));
// //Округляет сумму, было 12.2 стало 12.

// let billion = 1e9;
// console.log(billion);

// let billion = 1.9e9;
// console.log(billion);

// let billion = 1_000_000_000;
// console.log(billion);

// Начало практики ч3

// let numberOfFilms;
// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
//     }

// }
// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

//     function rememberMyFilms() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt("Один из последних просмотренных фильмов?", ""),
//               b = prompt("На сколько оцените его?", "");

//             if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//               personalMovieDB.movies[a] = b;
//               console.log("done");
//             } else {
//               console.log("error");
//               i--;
//             }
//           }
//     }
//     rememberMyFilms();

//         function detectedPersonalLevel() {

//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//       } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//       } else {
//         console.log("Произошла ошибка");
//       }
//         }
//     detectedPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
//  }
// writeYourGenres();
// //.

// if (4 == 4) {
//     console.log("Ok!")
// } else {
//     console.log('Error')
// }

// if (num < 49) {
//     console.log('Мало');
// } else if (num > 100) {
//     console.log(Много);
// } else {
//     console.log('Верно');
// }

// (num === 50) ? console.log('В ерно') : console.log('Error');

// const num = 50

// switch (num) {
//     case 49:
//         console.log('Не верно');
//         break;
//     case 100:
//         console.log('Не верно');
//         break;
//     case 51:
//         console.log('Верно');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

//Практика часть 1

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько оцените его?'),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько оцените его?');
//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;
//       console.log(personalMovieDB);

//Практика часть 2
// for (let i = 0; i < 2; i++) {
// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько оцените его?');
//       if (a !='' && b !='' && a !=null && b !=null && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
// console.log(personalMovieDB);
// if(personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// }else if (personalMovieDB.count > 30) {
//     console.log('Вы киноман');
// }else {
//     console.log('Произошла ошибка');
// }
// console.log(personalMovieDB);

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
// }
// showFirstMessage('Hello Mir');
// console.log(num);

// function calc (a,b) {
//     return (a+b);
// }
// console.log(calc(5,5));
// console.log(calc(155,5));
// console.log(calc(66,4));
//Можно вывести результат первым

// function ret () {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);
//Возвращение кода в глобальную ветку

// const logger = function() {
//     console.log('Hello');
// };
// logger();
//А здесь нельзя вывести результат первым

// let calc = (a, b) => {
//     return a + b
// }
// console.log(calc(33,70));
//Стрелочная функция

// const str = 'teSt';
// console.log(str.toLowerCase());

// const arr =[1,2,3,5,10111];
// console.log(arr[3]);

// let fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const perem = 'Hello world';
// console.log(perem.slice(6,11))

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько оцените его?',''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько оцените его?','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

//Условия Условия Условия Условия Условия Условия Условия Условия

// if (4) {
//     console.log('Верно')
// }else {
//     console.log('Неверно')
// }

// if (num < 50) {
//     console.log('Мало')
// }else if (num > 50){
//     console.log('Много')
// }else{
//     console.log('Ровно 50')
// }

// (num === 50) ? console.log('Верно') : console.log('Неверно'); //Тернарный оператор

// const num = 200;
// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Тоже неверно');
//         break;
//     case 50:
//         console.log('Верно');
//         break;
//     default:
//         console.log('Не сегодня');
//         break;

// }

//Циклы Циклы Циклы Циклы Циклы Циклы Циклы Циклы Циклы Циклы Циклы

//while - пока
//do - делать
//for - для
// while (num <= 55) {
//     console.log(num)
//     num++
// }

// do {
//     console.log(num)
//     num++
// }
// while (num <= 55)

// let num = 50;

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++
// }

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   }else {
//     i--;
//     console.log('error')
//   }

// }

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// }else if (personalMovieDB.count >= 10 && personalMovieDB.count >= 30) {
//     console.log('Вы классический зритель');
// }else if (personalMovieDB.count > 30) {
//     console.log('Вы киноман');
// }else {
//     console.log('Походу вы не ответили на вопросы :(')
// }

// console.log(personalMovieDB);

//Функции
// let num  = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }
// showFirstMessage('Hello World');
// console.log(num);

// console.log(calc(4, 6));
// console.log(calc(5, 25));
// console.log(calc(8, 12));

// function calc(a,b) {
//     return(a+b);
// }

// function ret() {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

//Function Expression
// const logger = function() {
//     console.log('Hello');
// };
// logger();

//Стрелочные функции
// const calc = (a, b) => {return a + b};
// console.log(calc(33, 7));

// const str = 'teSt';
// const arr = [1, 2, 4]
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str[2]);
// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'))

// const logg = 'Hello world';
// console.log(logg.slice(6));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

//Практика ч.1
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

//Практика ч.2

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");
    if (a != "" && b != "" && a != null && b != null && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("Верно");
    } else {
      console.log("Неверно");
      i--;
    }
  }
}
// rememberMyFilms();

function detectedPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка!");
  }
}

// detectedPersonalLevel();


function showMyDB(hidden) {
  if(!hidden) {
  console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for(let i = 1; i <= 3; i++) { 
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }

}
writeYourGenres();