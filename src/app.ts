import express from "express";

import Middlewares from './config/middlewares/middlewares';


 class App{
    public app : express.Application;

        constructor(){
            this.app = express();
            this.config();
        }

        private config() : void{
            this.app.use(Middlewares.configuration);

        }
        
    }

export default new App().app;

