import express from 'express';
import bodyparser from 'body-parser';

import BaseRoutes from '../../routes/BaseRoutes';

class Middlewares{

    static get configuration() {
        var app = express();
        app.use(bodyparser.json());
        app.use(new BaseRoutes().routes);

        return app;

    }
}

export = Middlewares;