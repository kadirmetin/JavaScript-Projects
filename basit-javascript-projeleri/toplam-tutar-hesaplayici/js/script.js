function validateForm(e) {
  event.preventDefault();

  const birimFiyat = document.getElementById("birimFiyat").value;
  const adet = document.getElementById("adet").value;
  let toplamTutar;

  toplamTutar = birimFiyat * adet;
  console.log(toplamTutar);

  document.getElementById("toplamTutar").value = toplamTutar;
}
