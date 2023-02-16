let button1 = document.getElementById("btn1");
button1.addEventListener("click", numToInput1);

function numToInput1() {
  const x = document.getElementById("minValue").value;
  document.getElementById("minBox").value = x;
}

let button2 = document.getElementById("btn2");
button2.addEventListener("click", numToInput2);

function numToInput2() {
  const x = document.getElementById("maxValue").value;
  document.getElementById("maxBox").value = x;
}

let button3 = document.getElementById("submit");
button3.addEventListener("click", submit);

function submit() {
  const minSayi = Number(document.getElementById("minBox").value);
  const maxSayi = Number(document.getElementById("maxBox").value);

  const rastgeleSayi =
    Math.round(Math.random() * (maxSayi - minSayi)) + minSayi;

  document.getElementById("rastgeleSayi").innerHTML = rastgeleSayi;
}
