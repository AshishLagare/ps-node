import express from 'express';
declare class StudentController {
    create(req: express.Request, res: express.Response): void;
    getAll(req: express.Request, res: express.Response): void;
}
export default StudentController;
