import express from "express";
import {
    createStudent,
    allStudents,
    editStudents,
} from "../controllers/studentControllers.js";

const studentRouter = express.Router();

studentRouter
    .route("/")
    .get(allStudents)
    .post(express.json(), createStudent)
    .put(express.json(), editStudents);
// studentRouter.route("/:id").get(oneOwner);

export default studentRouter;
