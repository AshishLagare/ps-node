import express from 'express';

import StudentRoute from './StudentRoutes';

var app = express();

class BaseRoutes{
    get routes(){
        
        //for '/' route
        app.get('/' , (req , res )=>{
            res.send("Welcome To Node With TypeScript Simple Version");
        });
        
        app.use("/api/" , new StudentRoute().routes);

        return app;
    }
}


export = BaseRoutes;