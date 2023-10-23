const express = require("express");
// const countriesList = require("./countriesList");
const countriesList = require("./countriesList.json");
const fs = require("fs");
const { body, validationResult } = require("express-validator");

const app = express();
const port = process.env.PORT || 24601;
const updateCountriesFile = () => {
    fs.writeFileSync(
        "countriesList.json",
        JSON.stringify(countriesList, "utf8")
    );
};

const hasValue = (obj, value) => Object.values(obj).includes(value);

app.use(express.json());

app.route("/countries")
    .get((req, res) => {
        const { sort, visited } = req.query;
        const sortIsOn = sort === "true";
        // const sortedCountries = countriesList.toSorted();

        const sortedCountries = [...countriesList].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        if (sortIsOn && !visited) {
            console.log(sortIsOn);
            return res.json(sortedCountries);
        }
        if (visited) {
            let filteredCountries;
            const visitedValue = visited === "true";
            if (sortIsOn) {
                filteredCountries = [...sortedCountries].filter(
                    (country) => country.visited === visitedValue
                );
            } else if (!sortIsOn) {
                filteredCountries = [...countriesList].filter(
                    (country) => country.visited === visitedValue
                );
            }
            return res.json(filteredCountries);
        }
        return res.json(countriesList);
    })
    .post((req, res) => {
        const { alpha2code, alpha3code } = req.body;
        const alreadyExists = countriesList.filter((country) => {
            return hasValue(country, alpha2code || alpha3code);
        }).length;
        console.log(alpha2code, alpha3code);
        console.log(alreadyExists);
        if (alreadyExists)
            return res.json("This country is already in the database.");
        countriesList.push(req.body);
        // fs.writeFileSync(
        //     "countriesList.json",
        //     JSON.stringify(countriesList, "utf8")
        // );
        updateCountriesFile();
        return res.json(countriesList);
    });

app.route("/countries/:code")
    .get((req, res) => {
        const { code } = req.params;
        const singleCountry = countriesList.filter((country) => {
            return hasValue(country, code);
        });
        if (!singleCountry.length) return res.json("Country not found.");
        // console.log(singleCountry);
        return res.json(singleCountry);
    })
    .put((req, res) => {
        const { code } = req.params;
        //mutates original array instead of making a copy
        const singleCountry = countriesList.filter((country) => {
            return hasValue(country, code);
        });
        if (!singleCountry.length) return res.json("Country not found.");
        countriesList.forEach((country, i, arr) => {
            hasValue(country, code) && (arr[i] = req.body);
            //want to make it so you don't have to edit full thing
            // ({ ...arr[i], ...req.body });
        });
        updateCountriesFile();
        return res.json(countriesList);
    })
    .delete((req, res) => {
        const { code } = req.params;
        //for actually deleting
        // const deleteIndex = countriesList.findIndex((country) => {
        //     return hasValue(country, code);
        // });
        // console.log(deleteIndex);
        // countriesList.splice(deleteIndex, 1);

        //for toggling visited
        countriesList.forEach((country, i, arr) => {
            hasValue(country, code) && (country.visited = !country.visited);
        });
        updateCountriesFile();
        return res.json(countriesList);
    });

app.listen(port, () => {
    console.log(`Travel wishlist listening on port ${port}`);
});
