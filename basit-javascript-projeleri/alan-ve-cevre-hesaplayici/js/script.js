function validateform(event) {
  event.preventDefault();
  const kisaKenarCheck = document.getElementById("kisaKenar").value;
  const uzunKenarCheck = document.getElementById("uzunKenar").value;

  if (kisaKenarCheck == null || kisaKenarCheck == "" && uzunKenarCheck == null || uzunKenarCheck == "") {
    alert("Bilgilerinizi kontrol ediniz.");
    return false;
  } else {
    const kisaKenar = document.getElementById("kisaKenar").value;
    const uzunKenar = document.getElementById("uzunKenar").value;

    let Alan = parseInt(kisaKenar) * parseInt(uzunKenar);
    document.getElementById("Alan").value = Alan;

    let Cevre = (parseInt(kisaKenar) + parseInt(uzunKenar)) * 2;
    document.getElementById("Cevre").value = Cevre;
  }
}