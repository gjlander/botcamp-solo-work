const petList = require("./petList");
const express = require("express");
const app = express();
const port = 24601;

app.route("/").get((req, res) => {
    return res.send(`<h1>Adopt a pet!</h1>
    <p>Browse through the links below to find your new furry friend:</p>
    <ul>
    <li><a href="/animals/dogs">Dogs</a></li>
    <li><a href="/animals/cats">Cats</a></li>
    <li><a href="/animals/rabbits">Rabbits</a></li>
    </ul>`);
});

app.route("/animals/:pet_type").get((req, res) => {
    const petType = req.params.pet_type;
    console.log(petList[petType]);
    return res.send(`<h1>List of ${req.params.pet_type}:</h1>
    <ul>
    ${
        petList[petType] &&
        petList[petType].map(
            (pet, i) =>
                `<li><a href=${`/animals/${petType}/${i + 1}`}>${
                    pet.name
                }</a></li>`
        )
    }
    </ul>`);
});

app.route("/animals/:pet_type/:pet_id").get((req, res) => {
    const petType = req.params.pet_type;
    const petIndex = req.params.pet_id - 1;
    const pet = petList[petType][petIndex];
    console.log(pet.name);
    return res.send(`<h1>${pet.name}</h1>
    <img src=${pet.url} alt=${pet.breed} />
    <p>${pet.description}</p>
    <ul>
    <li>Breed: ${pet.breed}</li>
    <li>Age: ${pet.age} years old</li>
    `);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
