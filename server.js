import express from 'express';
const app = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
    next();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
//TODO error handling
//TODO refactor feed call for reusability
app.get('/api/remoteOkRss', async (req, res) => {
    let url = 'https://remoteok.com/rss';
    try {
        const feed = await fetch(url)
        res.send(await feed.text())
    } catch (e){
        console.log({e})
        res.send(e)
    }
});

app.get('/api/weWorkRemotely/devOps', async (req, res) => {
    let url = 'https://weworkremotely.com/categories/remote-devops-sysadmin-jobs.rss';
    try {
        const feed = await fetch(url)
        res.send(await feed.text())
    } catch (e){
        console.log({e})
        res.send(e)
    }
});

app.get('/api/weWorkRemotely/product', async (req, res) => {
    let url = 'https://weworkremotely.com/categories/product.rss';
    try {
        const feed = await fetch(url)
        res.send(await feed.text())
    } catch (e){
        console.log({e})
        res.send(e)
    }
});

app.get('/api/weWorkRemotely/design',  async (req, res) => {
    let url = 'https://weworkremotely.com/categories/remote-design-jobs.rss';
    try {
        const feed = await fetch(url)
        res.send(await feed.text())
    } catch (e){
        console.log({e})
        res.send(e)
    }
});
