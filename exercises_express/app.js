const express = require("express");
const app = express();
const path = require("path");
const server = app.listen(3000, () => {
    console.log("Hello");
});
app.set("view engine", "ejs");
app.use(express.json());

app.route("/")
    .put((req, res) => {
        return res.sendFile(path.join(__dirname + "/index.html"));
    })
    .delete((req, res) => {
        return res.json({ good: "yep" });
    });

app.route("/test-ejs").get((req, res) => {
    return res.render("index", {
        myTitle: "my first title",
        users: ["Bob", "John", "Jane"],
    });
});
