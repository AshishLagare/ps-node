import express from 'express';
import StudentController from '../controllers/StudentController'

var router = express.Router();

class StudentRouters{
    private studentcontroller : StudentController;

    constructor(){
        this.studentcontroller = new StudentController();
    }

    get routes(){
        router.get('/student/all' , this.studentcontroller.getAll);
        return router;
    }

}

export = StudentRouters;