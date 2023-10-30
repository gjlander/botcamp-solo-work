const express = require("express");
const app = express();
const port = 24601;

const secure = require("./middlewares/secure");

app.get("/verify/:token", secure, (req, res) => {
    res.send("Hello World!");
});

app.use((err, req, res, next) => {
    // console.log(err);
    return res.status(403).json({ error: err.message });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
