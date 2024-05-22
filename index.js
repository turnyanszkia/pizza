const options = {
    methond: "POST"
}

fetch("https://pizza.kando-dev.eu/Pizza/")
    .then(szerverValasz => szerverValasz.json())
    .then(feldolgozottValasz => {
        console.log(feldolgozottValasz)
    })