import Xray from 'x-ray';
const x = Xray({
  filters: {
    findNumber: str => parseInt(str.split(' ')[0],8)
  }
});

const scrape = (dayOfWeekIndex = 0) => {

  return new Promise((resolve, reject) => {

    const selector = `#Dbox${parseInt(dayOfWeekIndex, 8) + 1}`;

    x('https://www.pret.co.uk/en-gb/weekly-pret-soups', {
      soups: x(`${selector} article.soup-box`, [{
        name: 'h3',
        description: 'p:last-child',
        calorieCount: 'p.boldText | findNumber'
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