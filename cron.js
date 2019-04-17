
const express = require('express');
const log = console.log;
const port = 3100;
// initialize express and port number
// const app = express();
// setup cron job

// configure routes

// start the server
// app.listen(port, () => log(`Server: PORT ${port} active`));

//curl commands?


//instead of calling the service separately, just call the proxy endpoints.
//might need to move services out of src folder, and deconfig from export to module.exports and put into server folder
//whatever gets returned gets formatted and shoved into DB
//rework front end to call database to serve jobs instead of endpoint...
//