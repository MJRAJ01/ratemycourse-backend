import * as express from 'express'
import {NextFunction, Request, Response} from "express";
import { getRepository } from 'typeorm';
import { Rating } from '../entity/Ratings';



export const createRating = async (request: Request, response: Response, next: NextFunction) => {

    const ratingTable = getRepository(Rating);

    //retrive data from request

    const {professor, comment, difficulty, rating, takeAgain, courseID} = request.body;

    //create entity course that is passed

    const newRating = new Rating();

    newRating.professor = professor;
    newRating.comment = comment;
    newRating.difficulty = difficulty;
    newRating.rating = rating;
    newRating.takeAgain = takeAgain;
    newRating.course = courseID;

    //insert entity into db
    const insertedRating = await ratingTable.save(newRating);

    response.json(insertedRating) 
}