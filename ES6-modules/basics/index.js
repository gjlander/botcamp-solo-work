import favQuote from "./myChoices.js";
console.log("default export from myChoices.js:", favQuote);

import { favBook, oddsAndEvens } from "./myChoices.js";
console.log("named export from myChoices.js", favBook);
import { selectNumber as computerNum } from "./computerChoices.js";

const computerChoice = computerNum();
console.log(computerChoice);
oddsAndEvens(computerChoice, 3, "even");
