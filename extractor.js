import scrape from 'website-scraper'

let options = {
    urls: ['https://nodejs.org/'],
    directory: './website',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});