import Web3 from 'web3';

let web3;
if(typeof window !=='undefined'&&typeof window.web3!=='undefined'){
// we are on the browser and metamask is installed
    web3 = new Web3(window.web3.currentProvider);
} else{
// we are on server or metasmask is not installed on the browser
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/0198c15f016b4923858770f9369b1927'
    );
    web3 = new Web3(provider);
}

export default web3;