const { readdirSync, readFileSync } = require('fs')

const top = `
# TIL

> Today I Learned

A collection of concise write-ups on small things I learn day to day across a
variety of languages and technologies. These are things that don't really
warrant a full blog post.

---

### Categories
`

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .filter(dirent => dirent.name.startsWith(".") == false)
    .map(dirent => dirent.name)

const getDirContents = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(fileent => fileent.isFile())
    .map(fileent => fileent.name)

const getTitleFromFile = source =>
  readFileSync(source, "utf8")
    .split("\n")
    .filter(line => line.startsWith("#"))
    .map(line => line.split("# ")[1])

const structures = getDirectories(__dirname)
  .map(topic => {
    return {
      name: topic,
      articles: getDirContents(`${__dirname}/${topic}/`)
        .map(article => {
          return {
            name: getTitleFromFile(`${__dirname}/${topic}/${article}`)[0],
            file: article
          }
        })
    }
  })

console.info(top)

structures
  .map(topic => topic.name)
  .forEach(topic => console.info(`* [${topic}](#${topic})`))

console.info("\n---");

structures.forEach(topic => {
  console.info(`### ${topic.name}\n`)
  topic.articles.forEach(article => console.info(`- [${article.name}](${topic.name}/${article.file})`))
  console.info("\n")
})
