// 변수 선언
let input = document.getElementById("result");
let clear = document.getElementById("clear");
let backspace = document.getElementById("backspace");
let equals = document.getElementById("equals");
let decimal = document.getElementById("decimal");

// 숫자 버튼의 이벤트 처리
let numbers = document.querySelectorAll(".buttons button:not(#clear):not(#backspace):not(#divide):not(#multiply):not(#subtract):not(#add):not(#decimal):not(#equals)");
numbers.forEach(function(number) {
  number.addEventListener("click", function() {
    input.value += this.textContent;
  });
});

// C 버튼의 이벤트 처리
clear.addEventListener("click", function() {
  input.value = "";
});

// ← 버튼의 이벤트 처리
backspace.addEventListener("click", function() {
  input.value = input.value.slice(0, -1);
});

// ÷ 버튼의 이벤트 처리
document.getElementById("divide").addEventListener("click", function() {
  input.value += "/";
});

// × 버튼의 이벤트 처리
document.getElementById("multiply").addEventListener("click", function() {
  input.value += "*";
});

// - 버튼의 이벤트 처리
document.getElementById("subtract").addEventListener("click", function() {
  input.value += "-";
});

// + 버튼의 이벤트 처리
document.getElementById("add").addEventListener("click", function() {
  input.value += "+";
});

// . 버튼의 이벤트 처리
decimal.addEventListener("click", function() {
  input.value += ".";
});

// = 버튼의 이벤트 처리
equals.addEventListener("click", function() {
  input.value = eval(input.value);
});
