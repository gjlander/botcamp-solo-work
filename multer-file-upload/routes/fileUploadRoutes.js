const express = require("express");
const fileUploadRouter = express.Router();
const { uploadPic } = require("../controllers/fileUploadControllers");

fileUploadRouter.post("/", uploadPic);

module.exports = fileUploadRouter;
