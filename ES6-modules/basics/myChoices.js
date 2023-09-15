const favQuote =
    "“So do I,” said Gandalf, “and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.”";

// export default favQuote;
export { favQuote as default };

const favBook = { title: "The Lord of the Rings", author: "JRR Tolkien" };

const oddsAndEvens = (num1, num2, choice) => {
    ((num1 + num2) % 2 === 0 && choice === "even") ||
    ((num1 + num2) % 2 !== 0 && choice === "odd")
        ? console.log("You win!")
        : console.log("Haha you lost to a computer!");
};

export { favBook, oddsAndEvens };
