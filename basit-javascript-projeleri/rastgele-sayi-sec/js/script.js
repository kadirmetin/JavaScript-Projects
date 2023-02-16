let button1 = document.getElementById("btn1");
button1.addEventListener("click", sayilariSirala);
button1.addEventListener("click", makeDisable);

let button2 = document.getElementById("btn2");
button2.addEventListener("click", rastgeleSayiSec);

function makeDisable() {
  button2.disabled = false;
  button1.disabled = true;
}

let sayilar = new Array();

function sayilariSirala() {
  for (let i = 1; i <= 99; i++) {
    sayilar.push(`<span id="${i}">${i}</span>`);
    if (i % 10 == 0) {
      sayilar.push("<br/>");
    }
  }
  let arrayString = sayilar.join();
  let str2 = arrayString.replace(/,/g, " ");
  sayilar = str2;
  document.getElementById("sonuc").innerHTML = `${sayilar}`;
}

function rastgeleSayiSec() {
  let elts = document.getElementsByTagName("span");
  let myRandomSpan = elts[Math.floor(Math.random() * elts.length)];

  myRandomSpan.style.color = "#FF0000";
  myRandomSpan.style.fontWeight = "900";
}
