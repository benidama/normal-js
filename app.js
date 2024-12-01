function calculateCircumference(r) {
  const pi = 3.14;
  console.log(2 * pi * r);
}
calculateCircumference(5);

function timer() {
  const dates = new Date();
  const my = new Date(24, 12, 1);
  document.getElementById("tim").innerHTML = dates.toDateString();
}
timer();
