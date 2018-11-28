"use strict";

var arr = [1, 2, 3, 4, 5]; // todo MAP

var newArr = arr.map(function (item) {
  return item + 2;
});
console.log(newArr); //TODO REDUCE

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item > 1;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 3;
});
console.log(find);
