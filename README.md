# azzor
Download a zip file from an url and extract it in a directory.

## Get started
```
$ npm install azzor
```

## Example
```js
const download = require('azzor');

download('https://www.a-remote/file.zip', './')
    .then(() => console.log('downloaded'))
    .catch(e => console.error(e))
```

## License
Azzor is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>