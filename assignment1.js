let nfts = [];

function generateTransactionID() {
    return 'tx-' + Math.random().toString(36).substr(2, 9);
}

function mintNFT(name, eyeColor, shirtType, bling) {
    const transactionID = generateTransactionID();

    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling,
        transactionID: transactionID
    };
    nfts.push(nft);

    console.log(`Transaction ID for ${name}: ${transactionID}`);
}

function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log(`NFT ${i + 1}:`);
        console.log(`  Name: ${nfts[i].name}`);
        console.log(`  Eye Color: ${nfts[i].eyeColor}`);
        console.log(`  Shirt Type: ${nfts[i].shirtType}`);
        console.log(`  Bling: ${nfts[i].bling}`);
        console.log(`  Transaction ID: ${nfts[i].transactionID}`);
        console.log('------------------------');
    }
}

function getTotalSupply() {
    return nfts.length;
}

mintNFT('NFT 1', 'Blue', 'T-shirt', 'Gold Chain');
mintNFT('NFT 2', 'Green', 'Hoodie', 'Silver Ring');
mintNFT('NFT 3', 'Brown', 'Sweater', 'Diamond Necklace');

listNFTs();
console.log('Total Supply:', getTotalSupply());




// tsarthak544@gmail.com
