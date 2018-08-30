import express from 'express';

class StudentController{
    create(req : express.Request , res : express.Response) : void {

            res.send("Student is created");
    }

    getAll( req : express.Request , res : express.Response) : void {
        res.send("Here you can get all contacts");
    }

}

export default StudentController;