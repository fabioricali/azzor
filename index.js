import axios from 'axios';
import AdmZip from 'adm-zip';

export const download = async function (remotePath, destinationPath) {
    const body = await axios.get(remotePath, {
        responseType: 'arraybuffer',
    });

    let zip = new AdmZip(body.data, {});
    //let zipEntries = zip.getEntries();

    // and to extract it into current working directory
    await new Promise((resolve, reject) => {
        zip.extractAllToAsync(destinationPath, true, false, err => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        });
    })

}