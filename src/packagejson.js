import fs from 'fs'
import denodeify from 'denodeify'

const read = () => {
  const read = denodeify(fs.readFile);
  return read('./package.json')
    .then(JSON.parse)
    .then(val => val);

}

export default read;