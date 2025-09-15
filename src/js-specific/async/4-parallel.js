/*
Реализовать функцию parallel(funcArray, doneAll), которая принимает два аргумента:
1. funcArray — массив асинхронных функций. Каждая функция принимает колбэк done и вызывает его при завершении с результатом своей работы
2. doneAll — финальный колбэк, который должен быть вызван после завершения всех функций из funcArray. В этот колбэк необходимо передать массив результатов в том же порядке, в котором функции были переданы в funcArray
*/

function a(done) {
  setTimeout(function () {
    done("result a");
  }, 300);
}
function b(done) {
  setTimeout(function () {
    done("result b");
  }, 200);
}

const funcArray = [a, b];

parallel(funcArray, (result) => {
  result.forEach((v) => console.log(v));
});

function parallel(funcArray, doneAll) {}
