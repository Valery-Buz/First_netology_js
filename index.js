"use strict";

const sotr10 = 5;
const sotr25 = 15;
const sotr50 = 40;
const sotr100 = 10;

const zp10 = 10000;
const zp25 = 25000;
const zp50 = 50000;
const zp100 = 100000;

const tax_rate = 0.2;

let SotrArray = [];

let arrindex = 0;
let zp_summ = 0;
let tax_summ = 0;
let mid_tax = 0;

for (arrindex = 0; arrindex < sotr10; arrindex++) {
  SotrArray.push(zp10); zp_summ = zp_summ + zp10;
}
for (arrindex = 0; arrindex < sotr25; arrindex++) {
  SotrArray.push(zp25); zp_summ = zp_summ + zp25;
}
for (arrindex = 0; arrindex < sotr50; arrindex++) {
  SotrArray.push(zp50); zp_summ = zp_summ + zp50;
}
for (arrindex = 0; arrindex < sotr100; arrindex++) {
  SotrArray.push(zp100); zp_summ = zp_summ + zp100;
}

tax_summ = Math.floor(zp_summ * tax_rate);
mid_tax = Math.floor(tax_summ / SotrArray.length);

console.log("Всего сотрудников: " + SotrArray.length + " человек.\n\r" +
  "Фонд оплаты труда = " + zp_summ + " рублей. \n\r" +
  "Общая сумма налоговых отчислений = " + tax_summ + " рублей.\n\r" +
  "Средний налог на работника = " + mid_tax + " рублей.");
