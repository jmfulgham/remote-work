const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');
const path = require('path');
const helmet = require('helmet');
const uuidv4 = require('uuid/v4');


const nonce = new Buffer.from(uuidv4()).toString('base64');

app.use(helmet());
app.use((req, res, next) => {
    res.locals.styleNonce = Buffer.from(uuidv4()).toString('base64');
    next();
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'",],
            fontSrc: ["'self'", 'https://fonts.google.com/'],
            styleSrc: ["'self'", (req, res) => `'nonce-${res.locals.styleNonce}'`],
            sandbox: ['allow-forms', 'allow-scripts'],
            reportUri: '/report-violation',
            objectSrc: ["'self'"],
            upgradeInsecureRequests: true,
            workerSrc: false
        },
        loose: false,
        reportOnly: false,
        setAllHeaders: false,
        disableAndroid: false,
        browserSniff: true
    });
});


app.listen(port, () => console.log(`Listening on port ${port}`));


app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/', (req, res) => {
    res.render('index', {styleNonce: res.locals.styleNonce})
});


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build/index.html'));
    })
}

app.get('/api/github', (req, res) => {
    console.log(`first call made from ${port}`);
    let url = 'https://jobs.github.com/positions.json?&location=remote&page=1';
    axios({
        method: 'get',
        url
    })
        .then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});

app.get('/api/remoteOkRss', (req, res) => {
    let url = 'https://remoteok.io/remote-jobs.rss';
    axios({
        method: 'get',
        url
    }).then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});

app.get('/api/stackOverflow', (req, res) => {
    let url = 'https://stackoverflow.com/jobs/feed?r=true';
    axios({
        method: 'get',
        url,
    }).then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});

app.get('/api/weWorkRemotely/devOps', (req, res)=>{
    let url = 'https://weworkremotely.com/categories/remote-devops-sysadmin-jobs.rss';
    axios({
        method: 'get',
        url,
    }).then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});

app.get('/api/weWorkRemotely/product', (req, res)=>{
    let url = 'https://weworkremotely.com/categories/product.rss';
    axios({
        method: 'get',
        url,
    }).then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});

app.get('/api/weWorkRemotely/design', (req, res)=>{
    let url = 'https://weworkremotely.com/categories/remote-design-jobs.rss';
    axios({
        method: 'get',
        url,
    }).then(resp => res.send(resp.data)).catch(e => `Server error, ${e}`);
});
