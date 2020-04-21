# Listing folders in current working directory

I needed to collect the directories present in the working directory of the script that generates the markdown for this repo.

Using filters, I was able to easily exclude anything starting with a dot.

I managed to do it like this.

```javascript
const { readdirSync } = require("fs");

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .filter((dirent) => dirent.name.startsWith(".") == false)
    .map((dirent) => dirent.name);

// Use it like this
console.info(getDirectories(__dirname));
```
