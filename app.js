function calculateCircumference(r) {
  const pi = 3.14;
  console.log(2 * pi * r);
}
calculateCircumference(5);

function timer() {
  const dates = new Date();
  document.getElementById("tim").innerHTML = dates.toDateString();
}
timer();
