// https://www.acmicpc.net/problem/1000

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);
