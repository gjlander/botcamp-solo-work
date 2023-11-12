// Get your shorts on - this is an array workout!
// ## Array Cardio

// Some initial data we can work with:
// Take some time to analyze the data structure
// Do each objects have the exact same data?
const inventors = [
    {
        first: "Albert",
        last: "Einstein",
        year: 1879,
        passed: 1955,
        categories: ["man", "physicist"],
    },
    {
        first: "Isaac",
        last: "Newton",
        year: 1643,
        passed: 1727,
        categories: ["man", "mathematician"],
    },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    {
        first: "Marie",
        last: "Curie",
        year: 1867,
        passed: 1934,
        categories: ["woman", "physicist"],
    },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    {
        first: "Katherine",
        last: "Blodgett",
        year: 1898,
        passed: 1979,
        categories: ["woman", "physicist"],
    },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    {
        first: "Lise",
        last: "Meitner",
        year: 1878,
        passed: 1968,
        categories: ["woman", "physicist"],
    },
    {
        first: "Hanna",
        last: "Hammarström",
        year: 1829,
        passed: 1909,
        categories: ["woman", "inventor"],
    },
];

// Array.prototype.filter()
// 1. Filter the list of inventors to retrieve only those born between 1500 and 1600
// Expected output: an array containing two inventors: Galileo Galilei and Johannes Kepler
const fifteenthCenturyInventors = inventors.filter(
    (inventor) => inventor.year > 1499 && inventor.year < 1600
);
console.log("fifteenthCenturyInventors", fifteenthCenturyInventors);

// Array.prototype.filter()
// 2. Filter the list of inventors to retrieve only the ones that have the "mathematician" category
// Expected output: an array containing only one inventor: Isaac Newton
const mathematician = inventors.filter((inventor) => {
    if (inventor.categories) {
        return inventor.categories.includes("mathematician");
    }
});
console.log("mathematician", mathematician);

// Array.prototype.filter()
// 3. Filter the list of inventors to retrieve only the ones with the category === 'physicist' AND 'man'
// Expected output: an array containing only one inventor: Albert Einstein
const malePhysicist = inventors.filter((inventor) => {
    if (inventor.categories) {
        return (
            inventor.categories.includes("physicist") &&
            inventor.categories.includes("man")
        );
    }
});
console.log("malePhysicist", malePhysicist);

// Array.prototype.map()
// 4. Give us an array filled with the inventors first and last names
// Expected output:
// ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler", "Nicolaus Copernicus", "Max Planck", "Katherine Blodgett", "Ada Lovelace", "Sarah E. Goode", …]
const inventorNames = inventors.map(
    (inventor) => `${inventor.first} ${inventor.last}`
);
console.log("inventorNames", inventorNames);

// Array.prototype.map()
// 5. Give us an array filled only with the inventors emails
// the emails should be lowercase firstName + date of birth @ inventor.com
// Expected output:
// eg: ["albert1879@inventor.com", "isaac1643@inventor.com", "galileo1564@inventor.com", "marie1867@inventor.com", "johannes1571@inventor.com", "nicolaus1473@inventor.com", "max1858@inventor.com", "katherine1898@inventor.com", "ada1815@inventor.com", "sarah e.1855@inventor.com", …]
const inventorEmails = inventors.map(
    (inventor) => `${inventor.first.toLowerCase()}${inventor.year}@inventor.com`
);
console.log("inventorEmails", inventorEmails);
// Array.prototype.sort()
// 6. Sort the inventors by birthdate, youngest to oldest (eg: the one whose birth year is closer to us on top)
// Expected output: an array of inventors going from "Katherine Blodgett" -> to "Nicolaus Copernicus"
const youngestToOldest = inventors.toSorted((a, b) => {
    // if (a.year > b.year) {
    //     return -1;
    // } else if (a.year < b.year) {
    //     return 1;
    // }
    // return 0;
    return b.year - a.year;
});
console.log("youngestToOldest", youngestToOldest);

// Array.prototype.reduce()
// 7. How many years did all the inventors live all together?
const totalYearsLived = inventors.reduce((accumulator, currentValue) => {
    let currentValueAge = currentValue.passed - currentValue.year;
    return accumulator + currentValueAge;
}, 0);
console.log("totalYearsLived", totalYearsLived);

// Array.prototype.sort()
// 8. Sort the inventors by years lived
const inventorAges = [];
inventors.forEach((inventor) =>
    inventorAges.push(
        `${inventor.first} lived ${inventor.passed - inventor.year} years.`
    )
);
console.log("inventorAges", inventorAges);

const livedLongestToShortest = inventors.toSorted((a, b) => {
    return b.passed - b.year - (a.passed - a.year);
});
console.log("livedLongestToShortest", livedLongestToShortest);

//Why does this effect my longest to shortest function?--because sort mutates the original array, use toSorted to make a copy
const livedShortestToLongest = inventors.toSorted((a, b) => {
    return a.passed - a.year - (b.passed - b.year);
});
console.log("livedShortestToLongest", livedShortestToLongest);

// Array.prototype.filter()
// 9. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevardsInParis = [
    "Boulevard Auguste-Blanqui",
    "Boulevard Barbès",
    "Boulevard Beaumarchais",
    "Boulevard de l'Amiral-Bruix",
    "Boulevard Mortier",
    "Boulevard Poniatowski",
    "Boulevard Soult",
    "Boulevard des Capucines",
    "Boulevard de la Chapelle",
    "Boulevard de Clichy",
    "Boulevard du Crime",
    "Boulevard du Général-d'Armée-Jean-Simon",
    "Boulevard Haussmann",
    "Boulevard de l'Hôpital",
    "Boulevard des Italiens",
    "Boulevard Lefebvre",
    "Boulevard de la Madeleine",
    "Boulevard de Magenta",
    "Boulevard Malesherbes",
    "Boulevard Marguerite-de-Rochechouart",
    "Boulevard Montmartre",
    "Boulevard du Montparnasse",
    "Boulevard Raspail",
    "Boulevard Richard-Lenoir",
    "Boulevard Saint-Germain",
    "Boulevard Saint-Michel",
    "Boulevard de Sébastopol",
    "Boulevard de Strasbourg",
    "Boulevard du Temple",
    "Boulevard Voltaire",
    "Boulevard de la Zone",
];
const boulevardsWithDeStrict = boulevardsInParis.filter((boulevard) =>
    boulevard.includes(" de ")
);
console.log("boulevardsWthDeStrict", boulevardsWithDeStrict);

const boulevardsWithDeAndDes = boulevardsInParis.filter((boulevard) =>
    boulevard.includes("de")
);
console.log("boulevardsWithDeAndDes", boulevardsWithDeAndDes);

// Array.prototype.sort()
// 10. Sort the people alphabetically by last name

const people = [
    "Bernhard, Sandra",
    "Bethea, Erin",
    "Becker, Carl",
    "Bentsen, Lloyd",
    "Beckett, Samuel",
    "Blake, William",
    "Berger, Ric",
    "Beddoes, Mick",
    "Beethoven, Ludwig",
    "Belloc, Hilaire",
    "Begin, Menachem",
    "Bellow, Saul",
    "Benchley, Robert",
    "Blair, Robert",
    "Benenson, Peter",
    "Benjamin, Walter",
    "Berlin, Irving",
    "Benn, Tony",
    "Benson, Leana",
    "Bent, Silas",
    "Berle, Milton",
    "Berry, Halle",
    "Biko, Steve",
    "Beck, Glenn",
    "Bergman, Ingmar",
    "Black, Elk",
    "Berio, Luciano",
    "Berne, Eric",
    "Berra, Yogi",
    "Berry, Wendell",
    "Bevan, Aneurin",
    "Ben-Gurion, David",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bennington, Chester",
    "Bierce, Ambrose",
    "Billings, Josh",
    "Birrell, Augustine",
    "Blair, Tony",
    "Beecher, Henry",
    "Biondo, Frank",
];
const sortedPeople = people.sort();
console.log("sortedPeople", sortedPeople);

// Array.prototype.reduce()
// 11. Sum up the instances of each of these vehicles
// (eg: how many times each vehicle appears in the array)

const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
    "skateboard",
];

const vehicleTally = data.reduce((vehicle, tally) => {
    vehicle[tally] = (vehicle[tally] || 0) + 1;
    return vehicle;
}, {});
console.log("vehicleTally", vehicleTally);

// Array.prototype.some()
// 12. Is at least one person 18 years old?

const family = [
    { name: "Lily", year: 2009 },
    { name: "Leah", year: 2011 },
    { name: "Liv", year: 2000 },
    { name: "Lydia", year: 2015 },
];

const familyOver18 = family.some((member) => 2023 - member.year > 18);

console.log("familyOver18", familyOver18);

// Array.prototype.every
// 13. Do all names of the family members start with the letter L?
const allStartWithL = family.every((member) => member.name.startsWith("L"));
console.log("allStartWithL", allStartWithL);

//You know the drill! It's time for another array cardio!

const movies = [
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },
    { title: "Inception", director: "Christopher Nolan", year: 2010 },
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
    },
    {
        title: "The Godfather: Part II",
        director: "Francis Ford Coppola",
        year: 1974,
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        director: "Peter Jackson",
        year: 2003,
    },
    { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994 },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        director: "Peter Jackson",
        year: 2001,
    },
];

// Exercise 1 - Array.prototype.filter()
// Find all movies that were released before 2000
//Expected Output: A list of 5 movies

const olderMovies = movies.filter((movie) => movie.year);

// Exercise 2 - Array.prototype.find()
// Find the first movie that was released in 1994
// Expected output: Pulp Fiction
const released94 = movies.find((movie) => movie.year === 1994);
console.log(released94);
// Exercise 3 - Array.prototype.filter()
// Find all movies directed by Christopher Nolan
// Expected output: An array with the objects of the movies directed by Christopher Nolan (2 in total)
const nolanMovies = movies.filter(
    (movie) => movie.director === "Christopher Nolan"
);
console.log(nolanMovies);
// Exercise 4 - Array.prototype.map()
// Create a new array with only the titles of the movies
// Expected output: A new array with the titles of the movies
const movieTitles = movies.map((movie) => movie.title);
console.log(movieTitles);

// Exercise 5 - Array.prototype.sort()
// Sort the movies by year, oldest to newest
// Expected output: An array with the objects of the movies sorted by year
//Hint: after solving this exercise, comment it out. Sort also mutates the initial array, so your results from here on will be based on the sorted array, not on the initial movies array.

const moviesByYear = movies.toSorted(
    (movie1, movie2) => movie1.year - movie2.year
);
console.log(moviesByYear);
// Exercise 6 - Array.prototype.every()
// Check if all the movies were directed by the same director
// Expected output: false

const directorCheck = movies.every(
    (movie) => movie.director === movies[0].director
);
console.log(directorCheck);

// Exercise 7 - Array.prototype.some()
// Check if there is at least one movie directed by Steven Spielberg
// Expected output: false
const spielbergCheck = movies.some(
    ({ director }) => director === "Steven Spielberg"
);
console.log(spielbergCheck);

// Exercise 8 - Array.prototype.map
//Create a new array that includes the time that has passed since the year the movie came out, until today (2023).
const moviesWithAge = movies.map((movie) => {
    return { ...movie, [`Years since release`]: `${2023 - movie.year}` };
});
console.log(moviesWithAge);
// Exercise 9 - Array.prototype.findIndex()
// Find the index of the first movie directed by Francis Ford Coppola
// Expected output: 2

// declare the function
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Usage
const myArray = [
    "Garrett",
    "Nora",
    "Eugen",
    "Gwen",
    "Louis",
    "Sabine",
    "Peter",
    "Angela",
    "Romana",
];
const shuffledArray = shuffle(myArray);
console.log("shuffledArray", shuffledArray);

const matches = [
    { giver: "Garrett" },
    { giver: "Nora" },
    { giver: "Eugen" },
    { giver: "Gwen" },
    { giver: "Louis" },
    { giver: "Sabine" },
    { giver: "Peter" },
    { giver: "Angela" },
    { giver: "Romana" },
];

const pairs = matches.map((match, i) => {
    const receiver = shuffledArray[i];
    return { ...match, receiver: receiver };
    // console.log(match);
});

console.log(pairs);
