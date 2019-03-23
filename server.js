const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');
const path = require('path');

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.static(path.join(__dirname, 'client/build')));


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    })
}



app.get('/api/github', (req, res) => {
    console.log(`first call made from ${port}`);
    axios({
        method: 'get',
        url: 'https://jobs.github.com/positions.json?&location=remote&page=1'
    })
        .then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});

app.get('/api/remoteOk', (req, res) => {
    axios({
        method: 'get',
        url: 'https://remoteok.io/api'
    }).then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});


app.get('/api/remoteOkRss', (req, res) => {
    axios({
        method: 'get',
        url: 'https://remoteok.io/remote-jobs.rss'
    }).then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});

app.get('/api/stackOverflow', (req, res) => {
    axios({
        method: 'get',
        url: 'https://stackoverflow.com/jobs/feed?r=true'
    }).then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});