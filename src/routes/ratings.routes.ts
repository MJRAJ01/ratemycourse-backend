import * as express from "express";
import { createRating } from "../controller/ratings.controller";


const router = express.Router();

router.post('', createRating)


export default router;