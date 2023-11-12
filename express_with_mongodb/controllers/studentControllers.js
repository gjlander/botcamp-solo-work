import ErrorStatus from "../utils/errorStatus.js";
import chalkLog from "../lib/chalkColors.js";
import StudentModel from "../models/studentModel.js";

const allStudents = async (req, res, next) => {
    try {
        const dbStudents = await StudentModel.find();
        return res.json(dbStudents);
    } catch (error) {
        next(error);
    }
};

const editStudents = async (req, res, next) => {
    try {
        const { first_name } = req.body;
        if (!first_name)
            throw new ErrorStatus("Please provide all required field", 400);
        const dbStudents = await StudentModel.updateMany(
            { first_name: "John" },
            { first_name: first_name }
        );
        return res.json(dbStudents);
    } catch (error) {
        next(error);
    }
};

const createStudent = async (req, res, next) => {
    try {
        const { first_name, last_name, email } = req.body;
        if (!first_name || !last_name || !email)
            throw new ErrorStatus("Please provide all required field", 400);

        // Using the model's static .create() method to create and insert a new document in one go
        const newStudent = await StudentModel.create({
            first_name,
            last_name,
            email,
        });

        return res.status(201).json(newStudent);
    } catch (error) {
        next(error);
    }
};

export { createStudent, allStudents, editStudents };
