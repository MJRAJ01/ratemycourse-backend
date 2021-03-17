import * as express from "express";
import { createCourse, getAllCourses, getSingleCourse } from "../controller/courses.controller";


const router = express.Router();

router.post('', createCourse)
router.get('',  getAllCourses )

router.get('/:courseid',  getSingleCourse )

export default router;