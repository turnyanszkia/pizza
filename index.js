let adatok = []

fetch("https://pizza.kando-dev.eu/Pizza")
.then((res) => res.json())
.then((datas) => {
    console.log(datas);
    let content = document.getElementById("pizza-menu");
    for(const data of datas) {
      adatok.push(data);
        content.innerHTML += `<div class="card m-3" style="width: 18rem;">
        <img src="${data.kepURL}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          <p>Gluténmentes: ${data.isGlutenFree ? "igen" : "Nem"}</p>
          <button onclick="Reszletek(${data.id})">Részletek</button>
        </div>
      </div>`
    }
})

function Reszletek(id) {
  console.log(id);
}