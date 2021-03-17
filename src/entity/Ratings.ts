import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";
import { Course } from "./Course";

@Entity()
export class Rating {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    professor: string;

    @Column()
    comment: string;

    @Column()
    rating: number;

    @Column()
    difficulty: number;

    @Column()
    takeAgain: boolean;

    @ObjectIdColumn()
    course: Course;
}
