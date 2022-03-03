import { meta_autogen, randomNum }  from './scripts/meta_autogen.mjs';

/**
 * @param {*} startId is the NFT id to start generating metadata files from, make sure it to be the latest id for the specific collection
 * @param {*} amount is number of NFT's to mint in this batch
 * @param {*} metadataSource is the metadata-code of the NFT, see NFT library/logger document https://docs.google.com/spreadsheets/d/1FRcC0wnXfgYq6mI9ve2ouimt3HMVGSlaulPZ4-4J8KA/edit#gid=0
 * To run metadata_autogenerator: $ npm start or (ctrl + alt + n or F1 and "run code")
 */

//-----------------------------------------------------------------------------------#
const startId = 1;
const amount = 5;
const metadataSource = "001001"; // input "randomNumber" if random metadata-schemes
// Random metadata
const random = true; // toggle random on/off
const maxRandomValue = 3;
//-----------------------------------------------------------------------------------#

if (random) {
    for (let index = 1; index <= amount; index++) {
        let randomMetadata = "00100" + String(randomNum(maxRandomValue));
        await meta_autogen(index, 1, randomMetadata).then((value) => 
            console.log("index: " + index + " with metadata: " + randomMetadata)
        )
    }
} else {
    await meta_autogen(startId, amount, metadataSource).then((value) => 
        console.log(value + " Generated metadata files with id:  " + startId + " - " + (startId + amount - 1) + "  (" + amount + "x)")
    )
};
