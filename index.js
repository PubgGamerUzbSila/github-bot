const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const FILE_PATH = "./data.json";

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  const DATE = moment().format();

  const data = {
    data: DATE,
  };
  console.log(DATE);
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n));
  });
};

makeCommit(10);
