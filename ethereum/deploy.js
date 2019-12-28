const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/Factory.json');

const provider = new HDWalletProvider(
    'east fame scheme hero hole able jelly cabbage inspire dentist gravity sphere', // account mneumonic
    'https://rinkeby.infura.io/v3/0198c15f016b4923858770f9369b1927' // infura api to interact with infura node
);

const web3 = new Web3(provider);
// let initMessage = 'Hi there!';
const deploy = async()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('deploying from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                    .deploy({data: '0x'+compiledFactory.bytecode})
                    .send({from: accounts[0], gas: '1000000'});
    console.log('deployed to address', result.options.address);
}
deploy();