import app from './app';

const server = app.listen(3770 , () =>{
    console.log("Server is started successfully on port number 3770");
});

export default server;