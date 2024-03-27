import express from "express";
import { getStudent } from "./controller.js";
import { createStudent } from "./controller.js";
import { updateStudent } from "./controller.js";
import { deleteStudent } from "./controller.js";

const router = express.Router();

router.get("/", getStudent);
router.post("/student", createStudent);
router.post("/student/update/:id", updateStudent);
router.post("/student/delete/:id", deleteStudent);

export default router;