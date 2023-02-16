function inputtanCek1() {
  let x = document.getElementById("adSoyad").value;
  document.getElementById("cvadSoyad1").innerHTML = x;
}

function inputtanCek2() {
  let x = document.getElementById("unvan").value;
  document.getElementById("cvUnvan").innerHTML = x;
}

function inputtanCek3() {
  let x = document.getElementById("telefon").value;
  document.getElementById("cvTelefon").innerHTML = x;
}

function inputtanCek4() {
  let x = document.getElementById("mail").value;
  document.getElementById("cvMail").innerHTML = x;
}

function inputtanCek5() {
  let x = document.getElementById("web").value;
  document.getElementById("cvWeb").innerHTML = x;
}

function inputtanCek6() {
  let x = document.getElementById("adres").value;
  document.getElementById("cvAdres").innerHTML = x;
}

function inputtanCek7() {
  let x = document.getElementById("egitim").value;
  document.getElementById("cvEgitim").innerHTML = x;
}

let deger1;
function openBox1() {
  let okulSayisi = document.getElementById("okulSayisi");
  let secilenDeger1 = okulSayisi.options[okulSayisi.selectedIndex].value;
  let createBox = document.getElementById("createBox1");

  switch (secilenDeger1) {
    case "1":
      createBox.innerHTML = `
      <br>
<div>
    <label for="egitim1">1. Okul</label>
    <input type="text" id="okulIsim1" onkeyup="inputtanCek17()">
    <input type="text" id="okulAciklama1" placeholder="Açıklama" onkeyup="inputtanCek17()">
</div>
      `;
      break;

    case "2":
      createBox.innerHTML = `
      <br>
      <div>
          <label for="egitim1">1. Okul</label>
          <input type="text" id="okulIsim1" onkeyup="inputtanCek17()">
          <input type="text" id="okulAciklama1" placeholder="Açıklama" onkeyup="inputtanCek17()">
      </div>
      <div>
          <label for="egitim2">2. Okul</label>
          <input type="text" id="okulIsim2" onkeyup="inputtanCek18()">
          <input type="text" id="okulAciklama2" placeholder="Açıklama" onkeyup="inputtanCek18()">
      </div>`;
      break;

    case "3":
      createBox.innerHTML = `
      <br>
      <div>
          <label for="egitim1">1. Okul</label>
          <input type="text" id="okulIsim1" onkeyup="inputtanCek17()">
          <input type="text" id="okulAciklama1" placeholder="Açıklama" onkeyup="inputtanCek17()">
      </div>
      <div>
          <label for="egitim2">2. Okul</label>
          <input type="text" id="okulIsim2" onkeyup="inputtanCek18()">
          <input type="text" id="okulAciklama2" placeholder="Açıklama" onkeyup="inputtanCek18()">
      </div>
      <div>
          <label for="egitim3">3. Okul</label>
          <input type="text" id="okulIsim3" onkeyup="inputtanCek19()">
          <input type="text" id="okulAciklama3" placeholder="Açıklama" onkeyup="inputtanCek19()">
      </div>`;
      break;

    default:
      createBox.innerHTML = `
      <div>
      </div>`;
      break;
  }
  deger1 = secilenDeger1;
}

function inputtanCek17() {
  let x = document.getElementById("okulIsim1").value;
  let y = document.getElementById("okulAciklama1").value;

  document.getElementById("cvEgitimList1").innerHTML = `
<ul>
    <li>${x}</li>
    <ul>
        <li>${y}</li>
    </ul>
</ul>`;
}

function inputtanCek18() {
  let x = document.getElementById("okulIsim2").value;
  let y = document.getElementById("okulAciklama2").value;

  document.getElementById("cvEgitimList2").innerHTML = `
<ul>
    <li>${x}</li>
    <ul>
        <li>${y}</li>
    </ul>
</ul>`;
}

function inputtanCek19() {
  let x = document.getElementById("okulIsim3").value;
  let y = document.getElementById("okulAciklama3").value;

  document.getElementById("cvEgitimList3").innerHTML = `
<ul>
    <li>${x}</li>
    <ul>
        <li>${y}</li>
    </ul>
</ul>`;
}

function inputtanCek8() {
  let x = document.getElementById("aciklamaYetenek").value;
  document.getElementById("cvYetenek").innerHTML = x;
}

function openBox2() {
  let yetenekSayisi = document.getElementById("yetenekSayisi");

  let secilenDeger = yetenekSayisi.options[yetenekSayisi.selectedIndex].value;

  let createBox = document.getElementById("createBox2");

  switch (secilenDeger) {
    case "1":
      createBox.innerHTML = `
        <br>
        <div>
        <label for="yetenek1">1. Yetenek</label>
        <input type="text" id="yetenekIsim1" onkeyup="inputtanCek20()">
        <input type="text" id="yetenekAciklama1" placeholder="Açıklama" onkeyup="inputtanCek20()">
        </div>`;
      break;

    case "2":
      createBox.innerHTML = `
        <br>
        <div>
        <label for="yetenek1">1. Yetenek</label>
        <input type="text" id="yetenekIsim1" onkeyup="inputtanCek20()">
        <input type="text" id="yetenekAciklama1" placeholder="Açıklama" onkeyup="inputtanCek20()">
        </div>
        <div>
        <label for="yetenek2">2. Yetenek</label>
        <input type="text" id="yetenekIsim2" onkeyup="inputtanCek21()">
        <input type="text" id="yetenekAciklama2" placeholder="Açıklama" onkeyup="inputtanCek21()">
        </div>`;
      break;

    case "3":
      createBox.innerHTML = `
        <br>
        <div>
        <label for="yetenek1">1. Yetenek</label>
        <input type="text" id="yetenekIsim1" onkeyup="inputtanCek20()">
        <input type="text" id="yetenekAciklama1" placeholder="Açıklama" onkeyup="inputtanCek20()">
        </div>
        <div>
        <label for="yetenek2">2. Yetenek</label>
        <input type="text" id="yetenekIsim2" onkeyup="inputtanCek21()">
        <input type="text" id="yetenekAciklama2" placeholder="Açıklama" onkeyup="inputtanCek21()">
        </div>
        <div>
        <label for="yetenek3">3. Yetenek</label>
        <input type="text" id="yetenekIsim3" onkeyup="inputtanCek22()">
        <input type="text" id="yetenekAciklama3" placeholder="Açıklama" onkeyup="inputtanCek22()">
        </div>`;
      break;

    default:
      createBox.innerHTML = `
        <div>
        </div>`;
      break;
  }
}

function inputtanCek20() {
  let x = document.getElementById("yetenekIsim1").value;
  let y = document.getElementById("yetenekAciklama1").value;

  document.getElementById("cvYetenekList1").innerHTML = `
<ul>
    <li>${x}</li>
    <ul>
        <li>${y}</li>
    </ul>
</ul>`;
}

function inputtanCek21() {
  let x = document.getElementById("yetenekIsim2").value;
  let y = document.getElementById("yetenekAciklama2").value;

  document.getElementById("cvYetenekList2").innerHTML = `
<ul>
    <li>${x}</li>
    <ul>
        <li>${y}</li>
    </ul>
</ul>`;
}

function inputtanCek22() {
  let x = document.getElementById("yetenekIsim3").value;
  let y = document.getElementById("yetenekAciklama3").value;

  document.getElementById("cvYetenekList3").innerHTML = `
<ul>
    <li>${x}</li>
    <ul>
        <li>${y}</li>
    </ul>
</ul>`;
}

function inputtanCek9() {
  let x = document.getElementById("aciklamaHakkimda").value;
  document.getElementById("cvaciklamaHakkimda").innerHTML = x;
}

function inputtanCek10() {
  let x = document.getElementById("aciklamaisDeneyimi").value;
  document.getElementById("cvaciklamaisDeneyimi").innerHTML = x;
}

function inputtanCek11() {
  let element = document.getElementById("onizle");
  let set = document.getElementById("arkaplanRenk").value;
  element.style.backgroundColor = set;
}

function inputtanCek12() {
  let element = document.getElementById("cvsolKolon");
  let set = document.getElementById("solkolonRenk").value;
  element.style.backgroundColor = set;
}

function inputtanCek13() {
  let element = document.getElementById("cvadSoyad");
  let set = document.getElementById("isimkutusuRenk").value;
  element.style.backgroundColor = set;
}

function inputtanCek14() {
  let element = document.getElementById("cvadSoyad");
  let set = document.getElementById("isimkutusuyaziRenk").value;
  element.style.color = set;
}

function inputtanCek15() {
  let element = document.getElementById("isim");
  let set = document.getElementById("isimkutusuRenk").value;
  element.style.backgroundColor = set;
}

function fontPick() {
  let fontPick = document.getElementById("fontSelect");
  let secilenDeger = fontPick.options[fontPick.selectedIndex].value;

  switch (secilenDeger) {
    case "1":
      var element = document.getElementById("onizle");
      element.style.fontFamily = "Times New Roman";
      break;

    case "2":
      var element = document.getElementById("onizle");
      element.style.fontFamily = "Courier New";
      break;

    case "3":
      var element = document.getElementById("onizle");
      element.style.fontFamily = "Lucida HandWriting";
      break;

    default:
      break;
  }
}

function shapePick() {
  let shapePick = document.getElementById("shapeSelect");
  let secilenDeger = shapePick.options[shapePick.selectedIndex].value;

  switch (secilenDeger) {
    case "1":
      var element = document.getElementById("cvFoto");
      element.style.borderRadius = "0px";
      break;

    case "2":
      var element = document.getElementById("cvFoto");
      element.style.borderRadius = "50px";
      break;

    case "3":
      var element = document.getElementById("cvFoto");
      element.style.borderRadius = "150px";
      break;

    default:
      break;
  }
}

function inputtanCek16() {
  const borderList = document.querySelectorAll(".altCizgi");
  let set = document.getElementById("cizgiRenk").value;
  for (let i = 0; i < borderList.length; i++) {
    borderList[i].style.borderColor = set;
  }
}

function lineShapePick() {
  let lineShapePick = document.getElementById("cizgiSekli");
  const borderList = document.querySelectorAll(".altCizgi");
  let secilenDeger = lineShapePick.options[lineShapePick.selectedIndex].value;

  switch (secilenDeger) {
    case "1":
      for (let i = 0; i < borderList.length; i++) {
        borderList[i].style.border = "dotted";
      }
      break;

    case "2":
      for (let i = 0; i < borderList.length; i++) {
        borderList[i].style.border = "dashed";
      }
      break;

    case "3":
      for (let i = 0; i < borderList.length; i++) {
        borderList[i].style.border = "solid";
      }
      break;

    default:
      break;
  }
}
