function validateForm(event) {
  event.preventDefault();
  const xChecker = document.getElementById("x").value;
  const yChecker = document.getElementById("y").value;

  if (xChecker == null || xChecker == "" && yChecker == null || yChecker == "") {
    alert("Bilgilerinizi kontrol ediniz.");
    return false;
  } else {
    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;

    var kareFarki =
      (parseInt(x) - parseInt(y)) * (parseInt(x) + parseInt(y));
    document.getElementById("kareFarki").value = kareFarki;
  }
}
