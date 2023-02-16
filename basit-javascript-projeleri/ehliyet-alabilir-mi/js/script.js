function checkAge(event) {
  event.preventDefault();

  const yil = document.getElementById("yil").value;

  if (yil == "" || yil == null) {
    return alert("Bilgilerinizi kontrol ediniz.")
  } else {
    const d = new Date();
    let yilCheck = d.getFullYear();

    let conc = yilCheck - yil;

    if (conc >= 18) {
      document.getElementById("showConc").value = "Ehliyet alabilir."
    } else {
      document.getElementById("showConc").value = "Ehliyet alamaz."
    }
  }
}