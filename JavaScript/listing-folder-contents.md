# Listing folder contents

I needed to collect the contents of a directory to generate the markdown for this repo.

I managed to do it like this.

```javascript
const { readdirSync } = require("fs");

const getDirContents = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((fileent) => fileent.isFile())
    .map((fileent) => fileent.name);

// Use it like this
console.info(getDirContents(`${__dirname}/python`));
```
