const cevap = Math.floor(Math.random() * 100) + 1;
let deneme = 1;

let yazi = document.getElementById("tahminYazi");
let yakinUzak = document.getElementById("tahminYardim");
let sonuc = document.getElementById("tahminSonuc");

let button = document.getElementById("tahminYap");
button?.addEventListener("click", basla);

function basla() {
  let yanit = document.getElementById("tahminGiris").value;
  if (yanit < 1 || yanit > 100 || yanit == "" || yanit == null) {
    alert("Lütfen 1 ile 100 arasında bir sayı giriniz.");
  } else {
    deneme = deneme + 1;

    if (deneme >= 8) {
      yakinUzak.textContent = "Deneme hakkınız kalmadı. Kaybettiniz.";
      document.getElementById("tahminYap").disabled = true;
    } else if (yanit < cevap) {
      yakinUzak.textContent = "Daha büyük bir sayı girin.";
      yazi.textContent = deneme + ". tahmini girin: ";
    } else if (yanit > cevap) {
      yakinUzak.textContent = "Daha küçük bir sayı girin.";
      yazi.textContent = deneme + ". tahmini girin: ";
    } else if (yanit == cevap) {
      yakinUzak.textContent = "KAZANDIN!!!";
      sonuc.textContent = "Sayı " + deneme + ". denemede bulundu.";
      document.getElementById("tahminYap").disabled = true;
    }
  }
}
