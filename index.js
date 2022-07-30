const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');

const file = './commitData.json';

const makeCommit = n => {

if (n===0) {
  return simpleGit().push();
}

x = random.int(0, 25);
y = random.int(0, 6);

const date = moment().subtract(1, 'y').subtract(25, 'w').add(x,'w').add(y,'d').format();
const commitData = {
    date: date,
}

console.log("Commited file with date: " + date);

jsonfile.writeFile(file, commitData, () => {
    simpleGit().add(file).commit("Commit from TheCommiter - INDEX0" + n, {'--date': date},
    makeCommit.bind(this, --n));

})}

makeCommit(20);

