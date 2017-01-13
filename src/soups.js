import Xray from 'x-ray';
const x = Xray();

const scrape = () => {

  return new Promise((resolve, reject) => {

    x('https://www.pret.co.uk/en-gb/weekly-pret-soups', {
      soups: x('#Dbox1 article.soup-box', [{
        name: 'h3',
        description: 'p:last-child',
        calorieCount: 'p.boldText'
      }])
    })
    ((err, obj) => {
      if (err) {
        return reject(err);
      }
      return resolve(obj);
    });

  });
}


module.exports = scrape;