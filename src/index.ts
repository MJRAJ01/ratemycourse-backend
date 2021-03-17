import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";

import coursesRouter from "./routes/course.routes"
import ratingsRouter from "./routes/ratings.routes"

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    //refactor to handle all the courses resources
    app.use('/api/v1/courses', coursesRouter) 


    app.use('/api/v1/ratings', ratingsRouter) 


    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // // insert new users for test
    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Timber",
    //     lastName: "Saw",
    //     age: 27
    // }));
    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Phantom",
    //     lastName: "Assassin",
    //     age: 24
    // }));

    console.log("Express server has started on port 3000");

}).catch(error => console.log(error));
