const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');
const path = require('path');
const helmet = require('helmet');
const csp = require('helmet-csp');


app.use(helmet());

app.use(csp({
    // https://github.com/helmetjs/csp for more information about setting this up
    directives: {
        defaultSrc: ["'self'", 'remotework.tech'],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        fontSrc: ["'self'", 'https://fonts.google.com/'],
        sandbox: ['allow-forms', 'allow-scripts'],
        reportUri: '/report-violation',
        objectSrc: ["'self'"],
        upgradeInsecureRequests: true,
        workerSrc: false  // This is not set.
    },
    loose: false,
    reportOnly: false,
    setAllHeaders: false,
    disableAndroid: false,
    browserSniff: true
}));

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.static(path.join(__dirname, 'client/build')));


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname = 'client/build/index.html'));
    })
}

app.get('/api/github', (req, res) => {
    console.log(`first call made from ${port}`);
    axios({
        method: 'get',
        url: 'https://jobs.github.com/positions.json?&location=remote&page=1',
    })
        .then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});

app.get('/api/remoteOk', (req, res) => {
    axios({
        method: 'get',
        url: 'https://remoteok.io/api',
    }).then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});


app.get('/api/remoteOkRss', (req, res) => {
    axios({
        method: 'get',
        url: 'https://remoteok.io/remote-jobs.rss',
    }).then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});

app.get('/api/stackOverflow', (req, res) => {
    axios({
        method: 'get',
        url: 'https://stackoverflow.com/jobs/feed?r=true',
    }).then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});