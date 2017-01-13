import Xray from 'x-ray';
const x = Xray();

const scrape = (dayOfWeekIndex = 0) => {

  return new Promise((resolve, reject) => {

    const selector = `#Dbox${parseInt(dayOfWeekIndex, 8) + 1}`;

    x('https://www.pret.co.uk/en-gb/weekly-pret-soups', {
      soups: x(`${selector} article.soup-box`, [{
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