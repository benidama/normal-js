function calculateCircumference(r) {
  const pi = 3.14;
  console.log(2 * pi * r);
}
calculateCircumference(5);

function timer() {
  const dates = new Date();
  const my = new Date(2020, 1, 1);
  const again = new Date("23-11-01");
  document.getElementById("tim").innerHTML = dates.toDateString() + " " + my;
  +" " + again;
}
timer();

// function prom() {
//   const name = prompt("Please, Enter your name.");
//   document.getElementById("prom").innerHTML = name;
// }
// prom();

function generateNumber() {
  let getNumber = Math.round(Math.random() * 100);
  document.getElementById("radom").innerHTML = getNumber;
}
generateNumber();

function getNumber() {
  const num = 23.88;
  document.getElementById("nbers").innerHTML = num.toFixed(1);
  // document.getElementById("nbers").innerHTML = Number.isInteger(num);
}
getNumber();
