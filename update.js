const { readdirSync, readFileSync, writeFileSync } = require('fs');
const nunjucks = require('nunjucks');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .filter((dirent) => dirent.name.startsWith('.') == false)
    .filter((dirent) => dirent.name.startsWith('node_') == false)
    .map((dirent) => dirent.name);

const getDirContents = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((fileent) => fileent.isFile())
    .map((fileent) => fileent.name);

const getTitleFromFile = (source) =>
  readFileSync(source, 'utf8')
    .split('\n')
    .filter((line) => line.startsWith('#'))
    .map((line) => line.split('# ')[1]);

const structures = getDirectories(__dirname).map((topic) => {
  return {
    name: topic,
    articles: getDirContents(`${__dirname}/${topic}/`).map((article) => {
      return {
        name: getTitleFromFile(`${__dirname}/${topic}/${article}`)[0],
        file: article,
      };
    }),
  };
});

const res = nunjucks.render('./README.md.tpl', { categories: structures });

writeFileSync(`${__dirname}/README.md`, res);
