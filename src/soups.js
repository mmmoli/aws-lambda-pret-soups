import osmosis from 'osmosis';

const scrape = () => {
  return osmosis
    .get('https://www.pret.co.uk/en-gb/weekly-pret-soups')
    .find('#Dbox1 article.soup-box')
    .set({
      name: 'h3',
      description: 'p:last-child',
      calorieCount: 'p.boldText'
    })
    .data(soups => soups)
}

export default scrape;
