function validateForm(event) {
  event.preventDefault();
  let sayiChecker = document.getElementById("sayi").value;

  if (sayiChecker == null || sayiChecker == "") {
    alert("Bilgilerinizi kontrol ediniz.");
    return false;
  } else {
    let sayi = document.getElementById("sayi").value;

    let karesi = parseInt(sayi) * parseInt(sayi);
    document.getElementById("karesi").value = karesi;
  }
}