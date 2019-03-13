const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');
// console.log that your server is up and running


app.listen(port, () => console.log(`Listening on port ${port}`));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// create a GET routes for api calls:

app.get('/api/github', (req, res) => {
    console.log(`first call made from ${port}`);
    axios({
        method: 'get',
        url: 'https://jobs.github.com/positions.json?location=remote'
    })
        .then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});

app.get('/api/remoteOk', (req, res) => {
    axios({
        method: 'get',
        url: 'https://remoteok.io/api'
    }).then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});

app.get('/api/stackOverflow', (req, res) => {
    axios({
        method: 'get',
        url: 'https://stackoverflow.com/jobs/feed?r=true'
    }).then(resp => res.send(resp)).catch(e => `Server error, ${e}`);
});