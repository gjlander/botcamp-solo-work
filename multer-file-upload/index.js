const express = require("express");
const fileUploadRouter = require("./routes/fileUploadRoutes");

const app = express();
const port = 24601;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/upload-profile-pic", fileUploadRouter);

app.use((err, req, res, next) => {
    // console.log(err);
    return res.status(403).json({ error: err.message });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
