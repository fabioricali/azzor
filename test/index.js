import {download} from '../index.js'

describe('download and extract', function () {
    it ('#1', async function () {
        console.log('start')
        await download('https://github.com/fabioricali/html-to-extjs-object/archive/refs/heads/master.zip', './test/download/')
        console.log('end')
    })
})