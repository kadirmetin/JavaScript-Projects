const tahminBtn = document.getElementById("tahminBtn");
const kurayiCek = document.getElementById("kurayiCek");

let girilenSayi = 0;
let randomSayi = 0;

function tahminGir(event) {
  event.preventDefault();

  const data = Array.from(new FormData(event.target).values());

  const sayiValid = data.every(
    (element) => Number(element) >= 1 && Number(element) < 49
  );

  const sayiBosMu = data.some((element) => element == "");

  const ayniSayiVarMi = data.some((element, index) => {
    return data.indexOf(element) !== index;
  });

  if (!sayiValid) {
    alert("1-49 sayıları arasında bir sayı girmelisiniz");
  }
  if (sayiBosMu) {
    alert("Sayı girişi boş olamaz");
  }
  if (ayniSayiVarMi) {
    alert("Aynı tahmin bir kez girilebilir.");
  }

  if (sayiValid && !sayiBosMu && !ayniSayiVarMi) {
    document.getElementById("tahminlerGirildi").innerText =
      "Tahminler girildi.";
    tahminBtn.setAttribute("disabled", true);
    kurayiCek.removeAttribute("disabled");
  }
  girilenSayi = data;
}

function randomNumberGenerator() {
  let sayilarim = [];

  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 49 + 1);

    if (!sayilarim.includes(randomNum)) {
      sayilarim.push(randomNum);
    } else {
      i--;
    }
  }

  sayilarim = sayilarim.sort((a, b) => a - b);
  return sayilarim;
}

kurayiCek.addEventListener("click", () => {
  let random = randomNumberGenerator();

  let template = random
    .map((sayi) => `<input type="number" value="${sayi}" disabled readonly/>`)
    .join("\n");
  document.getElementById("kuraSonuclari").innerHTML = template;

  console.log(randomSayi);

  var bilinenler = new Array();
  var sayac = 0;

  for (let i = 0; i < girilenSayi.length; i++) {
    for (let t = 0; t < randomSayi.length; t++) {
      if (girilenSayi[i] == randomSayi[t]) {
        sayac++;
        girilenSayi[i] = randomSayi[t];
      }
    }
  }

  var eslesenler = document.getElementById("bilinenSayi");
  eslesenler.innerText = "Bilinen sayılar: ";

  for (let i = 0; i < bilinenler.length; i++) {
    if (bilinenler[i] != null) {
      if (i != bilinenler.length - 1) {
        eslesenler.innerText = eslesenler.innerText + bilinenler[i] + ",";
      } else {
        eslesenler.innerText = eslesenler.innerText + bilinenler[i];
      }
    }
  }

  document.getElementById("adet").innerText = sayac + " adet sayı bildiniz.";
});
