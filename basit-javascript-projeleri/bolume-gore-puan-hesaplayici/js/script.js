function myFunc(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const formData = Object.fromEntries(data.entries());
  const {
    adSoyad,
    turkce1,
    turkce2,
    turkce3,
    mat1,
    mat2,
    mat3,
    fen1,
    fen2,
    fen3,
    sosyal1,
    sosyal2,
    sosyal3,
  } = formData;

  const sayisalSonuc =
    (Number(mat1) + Number(mat2) + Number(mat3)) / 3 +
    (Number(fen1) + Number(fen2) + Number(fen3)) / 3;
  const eaSonuc =
    (Number(mat1) + Number(mat2) + Number(mat3)) / 3 +
    (Number(turkce1) + Number(turkce2) + Number(turkce3)) / 3;
  const sozelSonuc =
    (Number(sosyal1) + Number(sosyal2) + Number(sosyal3)) / 3 +
    (Number(turkce1) + Number(turkce2) + Number(turkce3)) / 3;

  document.getElementById("sayisalSonuc").value = Math.floor(sayisalSonuc);
  document.getElementById("eaSonuc").value = Math.floor(eaSonuc);
  document.getElementById("sozelSonuc").value = Math.floor(sozelSonuc);
  document.getElementById(
    "ogrenciAd"
  ).innerHTML = `${adSoyad} isimli öğrencinin notu`;
}