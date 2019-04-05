let Parser = require('rss-parser');
let parser = new Parser();

class RSSFormatService {

    async formatSoRssFeed(data) {
        let parsedData = await parser.parseURL(data).catch(e => {
            return `S.O. error, ${e}`
        });

        return parsedData.items.slice(0,45);
    }
}

module.exports = RSSFormatService;