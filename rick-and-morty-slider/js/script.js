document.addEventListener("DOMContentLoaded", async function () {
  const baseUrl = "https://rickandmortyapi.com/api/character/";

  await fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      persons = data.results;
    });

  persons.map((person) => {
    let status = "";

    switch (person.status) {
      case "Alive":
        status = "green";
        break;
      case "Dead":
        status = "red";
        break;
      case "unknown":
        status = "gray";
        break;
    }

    const addPerson = `
    <li class="splide__slide">
    <img src="${person.image}">
    <div class="imgCard">
        <div class="solKisim">
            <p id="name">${person.name}</p>
        </div>
        <div class="sagKisim">
            <div id="yuvarlak" class="yuvarlak-${status}"></div>
            <p id="status">${person.status}</p>
            <p id="line"> - </p>
            <p id="gender">${person.gender}</p>
        </div>
    </div>
    </li>
    `;

    document.getElementById("splide__list").innerHTML += addPerson;
  });

  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    rewind: true,
    width: "1000px",
    height: "350px",
    gap: "3em",
  });
  splide.mount();
});
