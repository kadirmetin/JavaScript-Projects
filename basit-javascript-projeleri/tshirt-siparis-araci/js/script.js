function numToText() {
    var newValue = document.getElementById("sizeChooser").value;

    if (newValue == 0) {
        newValue = "XS";
    } else if (newValue == 20) {
        newValue = "S";
    } else if (newValue == 40) {
        newValue = "M";
    } else if (newValue == 60) {
        newValue = "L";
    } else if (newValue == 80) {
        newValue = "XL";
    } else {
        newValue = "XXL";
    }

    document.getElementById("sizePointer").value = newValue;
}

function handleSubmit(e) {
    e.preventDefault();

    const table = document.querySelector("table");

    table.innerHTML = `
  <tr>
      <td><b>SİPARİŞ ONAY</b></td>
  </tr>
  <tr>
      <td><b>Kişisel Bilgiler</b></td>
      <td>Ad: </td>
      <td>${document.getElementById("name").value}</td>
  </tr>
  <tr>
      <td></td>
      <td>Soyad: </td>
      <td>${document.getElementById("surName").value}</td>
  </tr>
  <tr>
      <td></td>
      <td>Doğum Tarihi:</td>
      <td>${document.getElementById("birthday").value}</td>
  </tr>
  <tr>
      <td></td>
      <td>Mail Adresi:</td>
      <td>${document.getElementById("mail").value}</td>
  </tr>
  <tr>
      <td></td>
      <td>Telefon:</td>
      <td>${document.getElementById("phone").value}</td>
  </tr>
  <tr>
      <td><b>Sipariş Bilgileri</b></td>
      <td>Tişört Rengi:</td>
      <td>${document.getElementById("colorTshirt").value}</td>
  </tr>
  <tr>
      <td></td>
      <td>Yazı Rengi:</td>
      <td>${document.getElementById("colorText").value}</td>
  </tr>
  <tr>
      <td></td>
      <td>Yazı:</td>
      <td>${document.getElementById("tshirtText").value}</td>
  </tr>
  <tr>
      <td></td>
      <td>Tişört Adeti:</td>
      <td>${document.getElementById("tshirtNumber").value}</td>
  </tr>
  <tr>
      <td></td>
      <td>Tişört Bedeni:</td>
      <td>${document.getElementById("sizePointer").value}</td>
  </tr>
  <tr>
      <td><b>Teslimat Bilgileri</b></td>
      <td>Adres:</td>
      <td>${document.getElementById("address").value}</td>
  </tr>
  <tr>
      <td></td>
      <td>Teslim Tarihi:</td>
      <td>${document.getElementById("deliveryTime").value}</td>
  </tr>
  <tr>
      <td><b>Ödeme Bilgileri</b></td>
      <td>Ad Soyad:</td>
      <td>${document.getElementById("nameSurname").value}</td>
  </tr>
  <tr>
      <td></td>
      <td>Kart Numarası:</td>
      <td>${document.getElementById("ccn").value}</td>
  </tr>
  <tr>
      <td></td>
      <td>Son Kullanma Tarihi:</td>
      <td>${document.getElementById("expDate").value}</td>
  </tr>
  <tr>
      <td></td>
      <td>CVV:</td>
      <td>${document.getElementById("cvv").value}</td>
  </tr>
      `;
}
