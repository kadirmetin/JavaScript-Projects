function validateform(event) {
  event.preventDefault();
  const fiyatCheck = document.getElementById("fiyat").value;
  const karCheck = document.getElementById("kar").value;

  if (fiyatCheck == null || fiyatCheck == "") {
    alert("Bilgilerinizi kontrol ediniz.");
    return false;
  }
  if (karCheck == null || karCheck == "") {
    alert("Bilgilerinizi kontrol ediniz.");
    return false;
  } else {
    var fiyat = document.getElementById("fiyat").value;
    var kar = document.getElementById("kar").value;
    var satisFiyati = (parseInt(fiyat) * (100 + parseInt(kar))) / 100;
    document.getElementById("satisFiyati").value = satisFiyati;
  }
}
