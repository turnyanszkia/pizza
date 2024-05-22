const nev = document.getElementById("pizza-nev")
const kep = document.getElementById("pizza.kep")
const gluten = document.getElementById("gluten")
const gomb = document.getElementById("mentes")

function pizzaMentes(){
    const ujPizza = {
        name:nev.value,
        isGlutenFree:gluten.checked == true ? 1 : 0,
        kepURL:kep.value
    }
    const options = {
        method:"POST",
        body:JSON.stringify(ujPizza),
        headers:{
            "Content-Type":"application/json"
        }
    }
    fetch("https://pizza.kando-dev.eu/Pizza/", options)
    .then(response => response.json())
    .then(data => {
        alert("kész")
    })
}

gomb.addEventListener("click", pizzaMentes)

